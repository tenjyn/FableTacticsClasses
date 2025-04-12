const classData = [
  { name: "Knight", advanced: [
    { name: "Crusader", prestige: ["Knight-Errant", "Iron Saint"] },
    { name: "Sentinel", prestige: ["Iron Saint", "Gravemark"] },
    { name: "Bulwark", prestige: ["Knight-Errant", "Gravemark"] }
  ]},
  { name: "Magician", advanced: [
    { name: "Elementalist", prestige: ["Pyroveil", "Hexstar"] },
    { name: "Arcanist", prestige: ["Archon of the Arcane", "Hexstar"] },
    { name: "Spellblade", prestige: ["Spellheart Duelist", "Pyroveil", "Archon of the Arcane"] }
  ]},
  { name: "Warlock", advanced: [
    { name: "Bloodbinder", prestige: ["Sanguine Tyrant", "Oathshard"] },
    { name: "Hexblade", prestige: ["Covenlord", "Oathshard"] },
    { name: "Soulbrand", prestige: ["Sanguine Tyrant", "Covenlord"] }
  ]},
  { name: "Archer", advanced: [
    { name: "Sharpshooter", prestige: ["Farsight Ascendant", "Crimson Notcher"] },
    { name: "Hawkeye", prestige: ["Farsight Ascendant", "Rainwielder"] },
    { name: "Volleymaster", prestige: ["Crimson Notcher", "Rainwielder"] }
  ]},
  { name: "Scout", advanced: [
    { name: "Skirmisher", prestige: ["Pathfinder", "Ghostblade"] },
    { name: "Tracker", prestige: ["Ghostblade", "Longshot"] },
    { name: "Pathfinder", prestige: ["Waystalker", "Ghostblade"] }
  ]},
  { name: "Cleric", advanced: [
    { name: "Vicar", prestige: ["Saint of Mercy", "Voice of the Dawn"] },
    { name: "Exorcist", prestige: ["Lightbinder", "Witchbane"] },
    { name: "Sanctifier", prestige: ["Saint of Mercy", "Witchbane"] }
  ]},
  { name: "Druid", advanced: [
    { name: "Wilder", prestige: ["Wyrmborn Grovekeeper", "Avatar of the Verdant Deep"] },
    { name: "Thornweaver", prestige: ["Wyrmborn Grovekeeper", "Tempest Rootcaller"] },
    { name: "Cloudspeaker", prestige: ["Avatar of the Verdant Deep", "Tempest Rootcaller"] }
  ]},
  { name: "Fighter", advanced: [
    { name: "Weaponmaster", prestige: ["Blade Sage", "Ironstorm"] },
    { name: "Gladiator", prestige: ["Ironstorm", "Blood Banner"] },
    { name: "Blademaster", prestige: ["Blade Sage", "Blood Banner"] }
  ]},
  { name: "Rogue", advanced: [
    { name: "Assassin", prestige: ["Umbral Whisper", "Jester-King"] },
    { name: "Trickster", prestige: ["Jester-King", "Poison Harlequin"] },
    { name: "Saboteur", prestige: ["Umbral Whisper", "Poison Harlequin"] }
  ]},
  { name: "Monk", advanced: [
    { name: "Fist Sage", prestige: ["Lotus Flame", "Stone Veil"] },
    { name: "Ironwalker", prestige: ["Stone Veil", "Zenblade"] },
    { name: "Windstepper", prestige: ["Lotus Flame", "Zenblade"] }
  ]},
  { name: "Shaman", advanced: [
    { name: "Totemist", prestige: ["Skydrum Prophet", "Ancestor Vessel"] },
    { name: "Spirit Caller", prestige: ["Ancestor Vessel", "Wraithdrummer"] },
    { name: "Stormshaper", prestige: ["Skydrum Prophet", "Wraithdrummer"] }
  ]},
  { name: "Warden", advanced: [
    { name: "Ironwall", prestige: ["Palisade", "Soul Bastion"] },
    { name: "Battle Shepherd", prestige: ["Palisade", "Sanctum Keeper"] },
    { name: "Gravemarcher", prestige: ["Soul Bastion", "Sanctum Keeper"] }
  ]},
  { name: "Engineer", advanced: [
    { name: "Machinist", prestige: ["Forge Saint", "Brass Juggernaut"] },
    { name: "Saboteur", prestige: ["Clockcurse Tinker", "Brass Juggernaut"] },
    { name: "Gearmancer", prestige: ["Forge Saint", "Clockcurse Tinker"] }
  ]},
  { name: "Necromancer", advanced: [
    { name: "Bonecaller", prestige: ["Crypt Marshall", "Corpse Sovereign"] },
    { name: "Hauntweaver", prestige: ["Soul Shepherd", "Corpse Sovereign"] },
    { name: "Tomb Herald", prestige: ["Crypt Marshall", "Soul Shepherd"] }
  ]},
  { name: "Bard", advanced: [
    { name: "Virtuoso", prestige: ["Divine Aria", "Oath Singer"] },
    { name: "Balladeer", prestige: ["Oath Singer", "Ballad Echo"] },
    { name: "Cantor", prestige: ["Divine Aria", "Ballad Echo"] }
  ]},
  { name: "Dancer", advanced: [
    { name: "Bladewaltzer", prestige: ["Rhythmblade", "Carnival Wraith"] },
    { name: "Choreomancer", prestige: ["Stepwitch", "Rhythmblade"] },
    { name: "Mirrorstep", prestige: ["Stepwitch", "Carnival Wraith"] }
  ]},
  { name: "Diplomat", advanced: [
    { name: "Envoy", prestige: ["Kingmaker", "Voice of Accord"] },
    { name: "Silver Tongue", prestige: ["Voice of Accord", "Mirror Accuser"] },
    { name: "Herald", prestige: ["Kingmaker", "Mirror Accuser"] }
  ]},
  { name: "Merchant", advanced: [
    { name: "Smuggler", prestige: ["Trade Tyrant", "Vaultcaller"] },
    { name: "Marketlord", prestige: ["Trade Tyrant", "Gilded Broker"] },
    { name: "Appraiser", prestige: ["Gilded Broker", "Vaultcaller"] }
  ]},
  { name: "Commander", advanced: [
    { name: "Warlord", prestige: ["Crownmarshal", "Banner Imperium"] },
    { name: "Tactician", prestige: ["Echo General", "Banner Imperium"] },
    { name: "Strategeist", prestige: ["Echo General", "Crownmarshal"] }
  ]},
  { name: "Librarian", advanced: [
    { name: "Archivist", prestige: ["Scriptweaver", "Chronicle Revenant"] },
    { name: "Codex Warden", prestige: ["Chronicle Revenant", "Inkwarden"] },
    { name: "Lorebinder", prestige: ["Scriptweaver", "Inkwarden"] }
  ]},
  { name: "Quartermaster", advanced: [
    { name: "Provisioner", prestige: ["Siege Steward", "Ghost Quarter"] },
    { name: "Logistician", prestige: ["Caskwright", "Ghost Quarter"] },
    { name: "Warchest Keeper", prestige: ["Siege Steward", "Caskwright"] }
  ]},
  { name: "Beastmaster", advanced: [
    { name: "Packleader", prestige: ["Moonhowl Alpha", "Elder Wildspeaker"] },
    { name: "Tamer", prestige: ["Moonhowl Alpha", "Chimeric Warden"] },
    { name: "Wyrdbinder", prestige: ["Chimeric Warden", "Elder Wildspeaker"] }
  ]},
  { name: "Cartographer", advanced: [
    { name: "Wayfinder", prestige: ["Wanderking", "Mirage Cartomancer"] },
    { name: "Trailblazer", prestige: ["Pathsculptor", "Wanderking"] },
    { name: "Mapseer", prestige: ["Pathsculptor", "Mirage Cartomancer"] }
  ]},
  { name: "Runesmith", advanced: [
    { name: "Glyphcrafter", prestige: ["Eidolon Binder", "Sealmourner"] },
    { name: "Sealbreaker", prestige: ["Sealmourner", "Script Architect"] },
    { name: "Runecaller", prestige: ["Eidolon Binder", "Script Architect"] }
  ]},
  { name: "Tailor", advanced: [
    { name: "Weaver", prestige: ["The Unraveler", "Emblem Artisan"] },
    { name: "Costumer", prestige: ["Masqueheart", "Emblem Artisan"] },
    { name: "Threadbinder", prestige: ["Masqueheart", "The Unraveler"] }
  ]},
  { name: "Navigator", advanced: [
    { name: "Sailmaster", prestige: ["Stormpath Herald", "Driftblade"] },
    { name: "Skytracker", prestige: ["Worldpiercer", "Driftblade"] },
    { name: "Leywalker", prestige: ["Stormpath Herald", "Worldpiercer"] }
  ]}
];