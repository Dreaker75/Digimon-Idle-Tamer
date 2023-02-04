// baby 1: 5
// baby 2: 15
// child: 50
// adult: 100
// perfect: 175
// ultimate: 275
// ultimate 2: 400

const DIGIMON_DATABASE = [
    {
        dataname: "Botamon",
        names: {
            jp: "Botamon",
            en: "Botamon"
        },
		stage: BABY_I,
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Koromon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Botamon" ]
        },
        // bit_amount_buff : 1
    }, {
        dataname: "Koromon",
        names: {
            jp: "Koromon",
            en: "Koromon"
        },
		stage: BABY_II,
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Agumon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Botamon" ]
        },
        // bit_amount_buff : 2
    }, {
        dataname: "Agumon",
        names: {
            jp: "Agumon",
            en: "Agumon"
        },
		stage: CHILD,
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Greymon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Botamon" ]
        },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Greymon",
        names: {
            jp: "Greymon",
            en: "Greymon"
        },
		stage: ADULT,
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                // item: "Crest of Courage",
                evolvesTo: "MtlGreymon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Botamon" ]
        },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "MtlGreymon",
        names: {
            jp: "MetalGreymon",
            en: "MetalGreymon"
        },
		stage: PERFECT,
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "WGreymon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Botamon" ]
        },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "WGreymon",
        names: {
            jp: "WarGreymon",
            en: "WarGreymon"
        },
		stage: ULTIMATE,
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        rebirth_info : {
			rebirthTo: [ "Botamon" ]
        },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
    {
        dataname: "Punimon",
        names: {
            jp: "Punimon",
            en: "Punimon"
        },
		stage: BABY_I,
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Tsunomon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Punimon" ]
        },
        // bit_amount_buff : 1
    }, {
        dataname: "Tsunomon",
        names: {
            jp: "Tsunomon",
            en: "Tsunomon"
        },
		stage: BABY_II,
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Gabumon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Punimon" ]
        },
        // bit_amount_buff : 2
    }, {
        dataname: "Gabumon",
        names: {
            jp: "Gabumon",
            en: "Gabumon"
        },
		stage: CHILD,
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Garurumon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Punimon" ]
        },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Garurumon",
        names: {
            jp: "Garurumon",
            en: "Garurumon"
        },
		stage: ADULT,
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                // item: "Crest of Friendship",
                evolvesTo: "WGarurumon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Punimon" ]
        },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "WGarurumon",
        names: {
            jp: "WereGarurumon",
            en: "WereGarurumon"
        },
		stage: PERFECT,
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "MtlGarurumon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Punimon" ]
        },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "MtlGarurumon",
        names: {
            jp: "MetalGarurumon",
            en: "MetalGarurumon"
        },
		stage: ULTIMATE,
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        rebirth_info : {
			rebirthTo: [ "Punimon" ]
        },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
    {
        dataname: "Nyokimon",
        names: {
            jp: "Nyokimon",
            en: "Nyokimon"
        },
		stage: BABY_I,
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Pyokomon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Nyokimon" ]
        },
        // bit_amount_buff : 1
    }, {
        dataname: "Pyokomon",
        names: {
            jp: "Pyokomon",
            en: "Yokomon"
        },
		stage: BABY_II,
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Piyomon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Nyokimon" ]
        },
        // bit_amount_buff : 2
    }, {
        dataname: "Piyomon",
        names: {
            jp: "Piyomon",
            en: "Biyomon"
        },
		stage: CHILD,
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Birdramon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Nyokimon" ]
        },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Birdramon",
        names: {
            jp: "Birdramon",
            en: "Birdramon"
        },
		stage: ADULT,
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                // item: "Crest of Love",
                evolvesTo: "Garudamon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Nyokimon" ]
        },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Garudamon",
        names: {
            jp: "Garudamon",
            en: "Garudamon"
        },
		stage: PERFECT,
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "Hououmon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Nyokimon" ]
        },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Hououmon",
        names: {
            jp: "Hououmon",
            en: "Phoenixmon"
        },
		stage: ULTIMATE,
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        rebirth_info : {
			rebirthTo: [ "Nyokimon" ]
        },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
    {
        dataname: "Yuramon",
        names: {
            jp: "Yuramon",
            en: "Yuramon"
        },
		stage: BABY_I,
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Tanemon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Yuramon" ]
        },
        // bit_amount_buff : 1
    }, {
        dataname: "Tanemon",
        names: {
            jp: "Tanemon",
            en: "Tanemon"
        },
		stage: BABY_II,
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Palmon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Yuramon" ]
        },
        // bit_amount_buff : 2
    }, {
        dataname: "Palmon",
        names: {
            jp: "Palmon",
            en: "Palmon"
        },
		stage: CHILD,
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Togemon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Yuramon" ]
        },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Togemon",
        names: {
            jp: "Togemon",
            en: "Togemon"
        },
		stage: ADULT,
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                // item: "Crest of Purity",
                evolvesTo: "Lillymon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Yuramon" ]
        },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Lillymon",
        names: {
            jp: "Lillymon",
            en: "Lillymon"
        },
		stage: PERFECT,
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "Rosemon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Yuramon" ]
        },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Rosemon",
        names: {
            jp: "Rosemon",
            en: "Rosemon"
        },
		stage: ULTIMATE,
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        rebirth_info : {
			rebirthTo: [ "Yuramon" ]
        },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
    {
        dataname: "Babumon",
        names: {
            jp: "Babumon",
            en: "Pabumon"
        },
		stage: BABY_I,
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Motimon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Babumon" ]
        },
        // bit_amount_buff : 1
    }, {
        dataname: "Motimon",
        names: {
            jp: "Motimon",
            en: "Motimon"
        },
		stage: BABY_II,
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Tentomon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Babumon" ]
        },
        // bit_amount_buff : 2
    }, {
        dataname: "Tentomon",
        names: {
            jp: "Tentomon",
            en: "Tentomon"
        },
		stage: CHILD,
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Kabuterimon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Babumon" ]
        },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Kabuterimon",
        names: {
            jp: "Kabuterimon",
            en: "Kabuterimon"
        },
		stage: ADULT,
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                // item: "Crest of Knowledge",
                evolvesTo: "AKabuterimonR"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Babumon" ]
        },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "AKabuterimonR",
        names: {
            jp: "AtlurKabuterimon (Red)",
            en: "MegaKabuterimon (Red)"
        },
		stage: PERFECT,
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "HKabuterimon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Babumon" ]
        },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "HKabuterimon",
        names: {
            jp: "HeraclesKabuterimon",
            en: "HerculesKabuterimon"
        },
		stage: ULTIMATE,
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        rebirth_info : {
			rebirthTo: [ "Babumon" ]
        },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
    {
        dataname: "Pichimon",
        names: {
            jp: "Pichimon",
            en: "Pichimon"
        },
		stage: BABY_I,
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Pukamon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Pichimon" ]
        },
        // bit_amount_buff : 1
    }, {
        dataname: "Pukamon",
        names: {
            jp: "Pukamon",
            en: "Bukamon"
        },
		stage: BABY_II,
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Gomamon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Pichimon" ]
        },
        // bit_amount_buff : 2
    }, {
        dataname: "Gomamon",
        names: {
            jp: "Gomamon",
            en: "Gomamon"
        },
		stage: CHILD,
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Ikkakumon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Pichimon" ]
        },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Ikkakumon",
        names: {
            jp: "Ikkakumon",
            en: "Ikkakumon"
        },
		stage: ADULT,
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                item: "Crest of Sincerity",
                evolvesTo: "Zudomon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Pichimon" ]
        },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Zudomon",
        names: {
            jp: "Zudomon",
            en: "Zudomon"
        },
		stage: PERFECT,
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "Vikemon"
            }
        ],
        rebirth_info : {
			rebirthTo: [ "Pichimon" ]
        },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Vikemon",
        names: {
            jp: "Vikemon",
            en: "Vikemon"
        },
		stage: ULTIMATE,
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        rebirth_info : {
			rebirthTo: [ "Pichimon" ]
        },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
]