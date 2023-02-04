'use strict'

// If the player hasn't chosen a name yet, redirect them to the intro page
if (!localStorage.getItem("player") && !localStorage.getItem("name_chosen")) {
    window.location = "intro.html";
}

const HIGHEST_LEVEL = 99;
const MAX_REBIRTHS = 100;
const MAX_DIGIMON = DIGIMON_DATABASE.length * 2;
const DIGIEGG_HATCH_TIME = 300000 // 5 mins
var selectedLanguage = "jp";

const createPlayer = (_playerSavedData) => {
    // ID to identify each Digimon exclussively, even those that are the same species. It's a local value to each player, so player ID is needed if it's to be used in a server with multiple players.
    // ID = 0 will be used to know if a Digimon has yet to be assigned a UniqueID
    // ID = -1 will be used to know if player doesn't have the starter (Either deleted it or didn't choose it)
    var lastUniqueIdGenerated = _playerSavedData?.lastUniqueIdGenerated || 1,
        playerName = _playerSavedData?.name || undefined,
        bits = _playerSavedData?.money || 1000,
        // Unique ID of the starting Digimon. If it's -1, no starter was picked or it was deleted
        startingDigimonUniqueID = _playerSavedData?.getStarterDigimonUniqueID || 0,
        digimonBank = createDigiBank(),
        digiEgg;

    return {
        getName: () => playerName,
        getMoney: () => bits,
        getStarterDigimonUniqueID: () => startingDigimonUniqueID,
        getStarterDigimon: () => digimonBank.getDigimonByUniqueID(startingDigimonUniqueID),
        getDigimon: (_id) => digimonList[_id],
        getNewUniqueID: () => lastUniqueIdGenerated++,
        getLastUniqueIDGenerated: () => lastUniqueIdGenerated,
        gainMoney: (_amount) => {
            bits += _amount;
        },
        setName(_name) {
            playerName = _name;
        },
        setStarter(_digimonUniqueId) {
            startingDigimonUniqueID = _digimonUniqueId;
        },
        addDigimon(_digimon) {
            digimonBank.addDigimon(_digimon)
        },
        addDigiEgg(_digimon) {

        }
    }
}

// const createDigiEgg = (_digimon) => {
//     var timeLeft = DIGIEGG_HATCH_TIME,
//         digimonToHatch = _digimon;

//     return {
//         reduceTimer: (_amount) => {
//             timeLeft -= _amount;
//             if (timeLeft < 0)
//                 timeLeft = 0;
//         },
//         readyToHatch: () => {
//             return timeLeft == 0;
//         },
//         hatch: () => {
//             return createDigimon(digimonToHatch);
//         }
//     }
// }

const createDigimon = (_digimon, _id, _uniqueID = 0) => {
    var uniqueId = _uniqueID || player.getNewUniqueID(),
        id,
        name,
        level,
        expNextLevel,
        maxLevel,
        rebirths = 0;

    setNewDigimon(_id);

    // Change the Digimon to a new one from the database (For evolution, rebirth, etc)
    function setNewDigimon(_digimonID) {
        id = _digimonID
        var newDigimon = DIGIMON_DATABASE[id];
        name = newDigimon.names[selectedLanguage];
        level = 1;
        expNextLevel = EXP_TABLE[newDigimon.exp_growth][level - 1];
        maxLevel = rebirths == 0 ? newDigimon.max_level : Math.min(newDigimon.max_level + MAX_LEVEL_INCREASES[newDigimon.stage][rebirths - 1], HIGHEST_LEVEL);
    }

    function canEvolve() {
        var evolutions = DIGIMON_DATABASE[id].evolutions

        if (evolutions == undefined)
            return false

        for (var i = 0; i < evolutions.length; i++) {
            if (evolutionRequirementsFulfilled(evolutions[i]))
                return true;
        }

        return false;
    }

    function evolutionRequirementsFulfilled(evolution) {
        if (level < evolution.level)
            return false;

        // Add new evolution conditions here

        return true;
    }

    function canRebirth() {
        var evolutions = DIGIMON_DATABASE[id].evolutions

        if (evolutions == undefined)
            return true

        for (var i = 0; i < evolutions.length; i++) {
            // The Digimon has an evolution available
            if (maxLevel >= evolutions[i].level)
                // TODO: Add check for Rebirth requirements for evolution
                // TODO: Ignore Jogress Evolutions for rebirth? Digimon will be able to rebirth even if all conditions for a jogress are met
                return false;
        }

        return true;
    }

    const digimon_info = {
        getUniqueID: () => uniqueId
        , increaseExperience: (_amount) => {
            if (expNextLevel > 0) {
                expNextLevel -= _amount;
                while (expNextLevel <= 0) {
                    level++;
                    if (canEvolve()) {
                        document.getElementById('evolve-button').disabled = false;
                    }

                    if (level == maxLevel) {
                        expNextLevel = -1;
                        if (canRebirth()) {
                            document.getElementById('rebirth-button').disabled = false;
                        }
                        break;
                    } else {
                        expNextLevel += EXP_TABLE[_digimon.exp_growth][level - 1];
                    }
                }
            }
        }
        , getDisplayInfo: () => {
            // TODO: Temporary code, will need to find another way to do it to properly display information later
            return "<h2>" + name + "</h2><strong>Level</strong> " + level + "<br><strong>Next Level:</strong> " + (expNextLevel == -1 ? "---" : expNextLevel);
        }
        , evolve: (evolutionSelected) => {
            setNewDigimon(DIGIMON_DATABASE.findIndex(v => v.dataname == DIGIMON_DATABASE[id].evolutions[evolutionSelected].evolvesTo));
        }
        // TODO: Update for Digimon that rebirth into multiple Digimon (Jogress)
        , rebirth: () => {
            if (rebirths < MAX_REBIRTHS) {
                rebirths++
            }
            setNewDigimon(DIGIMON_DATABASE.findIndex(v => v.dataname == DIGIMON_DATABASE[id].rebirth_info.rebirthTo[0]));
        }
    }

    return digimon_info
}

const createDigiBank = () => {
    var digimonList = new Array(MAX_DIGIMON),
        firstEmptySlot = 0;

    const digibank_object = {
        hasEmptySlot: () => {
            return firstEmptySlot != -1;
        },
        addDigimon: (_digimon) => {
            if (firstEmptySlot == -1)
                return false;
            digimonList[firstEmptySlot++] = _digimon;
            return true;
        },
        removeDigimon: (_id) => {
            // TODO: Check if the _id slot has a Digimon / Change function cause it might not work right now
            if (firstEmptySlot > 0)
                firstEmptySlot--
            digimonList[_id] = digimonList[firstEmptySlot]
        }
        , getDigimonByUniqueID: (_uniqueID) => {
            var index = digimonList.findIndex(d => d.getUniqueID() == _uniqueID);
            return index != -1 ? digimonList[index] : null;
        }
        , getDigimonbyIndex: (_index) => {
            // TODO: Figure out when the check for empty slot happens
            return digimonList[_index];
        }
    }

    return digibank_object;
}

// Returns the player information that needs to be saved as an object
function GetPlayerSaveData() {
    return {
        name: player.getName(),
        // money: player.getMoney(),
        lastUniqueIdGenerated: player.getLastUniqueIDGenerated(),
        getStarterDigimonUniqueID: player.getStarterDigimonUniqueID(),
    }
}

// Creates the Starter Digimon based on the player's name
function GenerateStarter() {
    var tamer_name = player.getName();

    var starterValue = 0, digimonId = 0;
    switch (tamer_name) {
        case "Taichi":
        case "Tai":
            digimonId = DIGIMON_DATABASE.findIndex(v => v.dataname == "Koromon");
            break;
        case "Yamato":
        case "Matt":
            digimonId = DIGIMON_DATABASE.findIndex(v => v.dataname == "Tsunomon");
            break;
        case "Sora":
            digimonId = DIGIMON_DATABASE.findIndex(v => v.dataname == "Pyokomon");
            break;
        case "Mimi":
            digimonId = DIGIMON_DATABASE.findIndex(v => v.dataname == "Tanemon");
            break;
        case "Koushiro":
        case "Izzy":
            digimonId = DIGIMON_DATABASE.findIndex(v => v.dataname == "Motimon");
            break;
        case "Jo":
        case "Joe":
            digimonId = DIGIMON_DATABASE.findIndex(v => v.dataname == "Pukamon");
            break;
        default:
            for (var i = 0; i < tamer_name.length; i++) {
                starterValue += tamer_name.charCodeAt(i)
            };

            digimonId = DIGIMON_DATABASE.findIndex(v => v.dataname == STARTERS[starterValue % STARTERS.length]);
    }

    var starter = createDigimon(DIGIMON_DATABASE[digimonId], digimonId, player.getStarterDigimonUniqueID());
    player.setStarter(starter.getUniqueID());
    player.addDigimon(starter);
}

// TODO: Temporary! Change to use for multiple Digimon, not just the Starter
function EvolveDigimon() {
    // TODO: Change this to account for multiple evolutions, right now it defaults to the first one
    player.getStarterDigimon().evolve(0)
    document.getElementById('starter-selection').innerHTML = `${player.getStarterDigimon().getDisplayInfo()}`;
    document.getElementById('evolve-button').disabled = true;
}

// TODO: Temporary! Change to use for multiple Digimon, not just the Starter
function RebirthDigimon() {
    // TODO: Change this to account for Jogress Digimon, who rebirth into multiple DigiEggs
    player.getStarterDigimon().rebirth()
    document.getElementById('starter-selection').innerHTML = `${player.getStarterDigimon().getDisplayInfo()}`;
    document.getElementById('rebirth-button').disabled = true;
}

function InitializePage() {
    document.getElementById("tamer_name_display").innerHTML = "Tamer: " + player.getName();
    document.getElementById('starter-selection').innerHTML = `${player.getStarterDigimon().getDisplayInfo()}`;
    document.getElementById('evolve-button').hidden = false;
    document.getElementById('rebirth-button').hidden = false;

    var time = 1000;

    // TODO: Temporary function to test exp and bits gain, will remove later and implement proper
    // Minimum delay possible is 4ms
    function increaseExperience() {
        setTimeout(function () {
            //time -= 1000;
            player.getStarterDigimon().increaseExperience(100);
            // player.gainMoney(100);
            document.getElementById('starter-selection').innerHTML = `${player.getStarterDigimon().getDisplayInfo()}`;
            // document.getElementById('tamer-bits').innerHTML = `Bits: ${player.getMoney()}`;
            increaseExperience();
        }, time);
    }

    increaseExperience();
}

///////////////////////////////////////////////////
// Main Code

const player = createPlayer(JSON.parse(localStorage.getItem('player')) || null);

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("name_chosen")) {
        player.setName(localStorage.getItem("name_chosen"));
        GenerateStarter();
    }
    InitializePage();
})

// Event called right before the window is closed
window.addEventListener("beforeunload", () => {
    // Check the player has been assigned a starter to know it has properly been set before saving it
    if (player.getStarterDigimon()) {
        localStorage.setItem("version", current_version);
        localStorage.setItem("player", JSON.stringify(GetPlayerSaveData()));
    }
}, false)