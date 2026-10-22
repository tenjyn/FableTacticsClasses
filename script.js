from pathlib import Path

content = r'''import React, { useMemo, useState } from "react";

/**
 * Fable Tactics — Class Explorer
 *
 * Drop this file into a React project as ClassExplorer.jsx.
 * It exports the cleaned class data as CLASS_DATA and a ready-to-use
 * interactive component as the default export.
 *
 * Data cleanup:
 * - Base-class names are unique (Archivist appears only once as a base class).
 * - Each base class, subclass, and prestige specialty has a one-sentence description.
 * - The original advanced-class trees are preserved.
 * - Newly added base classes are included with empty subclass lists until their
 *   advancement trees are designed.
 */

export const CLASS_DATA = [
  {
    name: "Knight",
    description: "An armored frontline defender who protects allies and holds key positions.",
    advanced: [
      {
        name: "Crusader",
        description: "A holy or oath-driven warrior who combines disciplined melee combat with protective conviction.",
        specialties: [
          { name: "Knight-Errant", description: "A wandering champion who seeks worthy causes and defends those without protection." },
          { name: "Iron Saint", description: "An unyielding holy defender who turns faith and endurance into a shield for allies." }
        ]
      },
      {
        name: "Sentinel",
        description: "A vigilant guardian who intercepts threats and punishes enemies that approach protected allies.",
        specialties: [
          { name: "Iron Saint", description: "An unyielding holy defender who turns faith and endurance into a shield for allies." },
          { name: "Gravemark", description: "A grim sentinel who anchors the line and makes every step into its territory costly." }
        ]
      },
      {
        name: "Bulwark",
        description: "A defensive specialist who absorbs pressure and makes difficult ground nearly impossible to take.",
        specialties: [
          { name: "Knight-Errant", description: "A wandering champion who seeks worthy causes and defends those without protection." },
          { name: "Gravemark", description: "A grim sentinel who anchors the line and makes every step into its territory costly." }
        ]
      }
    ]
  },
  {
    name: "Magician",
    description: "A versatile spellcaster who shapes arcane forces for damage, control, and utility.",
    advanced: [
      {
        name: "Elementalist",
        description: "A spellcaster who commands elemental forces to overwhelm enemies and reshape the battlefield.",
        specialties: [
          { name: "Pyroveil", description: "A fire specialist who cloaks attacks in searing flame and lingering heat." },
          { name: "Hexstar", description: "An arcane disruptor who bends hostile magic into unstable and punishing patterns." }
        ]
      },
      {
        name: "Arcanist",
        description: "A learned mage who studies magical principles to cast precise and adaptable spells.",
        specialties: [
          { name: "Archon of the Arcane", description: "A master of pure magic who alters the rules of a fight through exceptional spellcraft." },
          { name: "Hexstar", description: "An arcane disruptor who bends hostile magic into unstable and punishing patterns." }
        ]
      },
      {
        name: "Spellblade",
        description: "A combat mage who blends weapon technique with fast, close-range spellcasting.",
        specialties: [
          { name: "Spellheart Duelist", description: "A graceful magical duelist who turns precise strikes into bursts of spell energy." },
          { name: "Pyroveil", description: "A fire specialist who cloaks attacks in searing flame and lingering heat." },
          { name: "Archon of the Arcane", description: "A master of pure magic who alters the rules of a fight through exceptional spellcraft." }
        ]
      }
    ]
  },
  {
    name: "Warlock",
    description: "A pact-bound caster who channels forbidden power, curses, and supernatural bargains.",
    advanced: [
      {
        name: "Bloodbinder",
        description: "A warlock who uses blood rites to empower spells and bind foes through sacrifice.",
        specialties: [
          { name: "Sanguine Tyrant", description: "A ruthless blood mage who converts life force into overwhelming power." },
          { name: "Oathshard", description: "A pact-breaker who weaponizes fractured promises and the debts they leave behind." }
        ]
      },
      {
        name: "Hexblade",
        description: "A weapon-bearing curse specialist who links hostile magic to devastating strikes.",
        specialties: [
          { name: "Covenlord", description: "A master of coven magic who commands layered curses and allied occult power." },
          { name: "Oathshard", description: "A pact-breaker who weaponizes fractured promises and the debts they leave behind." }
        ]
      },
      {
        name: "Soulbrand",
        description: "A pact caster who marks souls with lasting magical brands and spiritual afflictions.",
        specialties: [
          { name: "Sanguine Tyrant", description: "A ruthless blood mage who converts life force into overwhelming power." },
          { name: "Covenlord", description: "A master of coven magic who commands layered curses and allied occult power." }
        ]
      }
    ]
  },
  {
    name: "Archer",
    description: "A ranged combatant who uses careful aim, positioning, and specialized ammunition.",
    advanced: [
      {
        name: "Sharpshooter",
        description: "A precision marksman who prioritizes accurate, high-impact shots against key targets.",
        specialties: [
          { name: "Farsight Ascendant", description: "A master marksman who can identify and strike distant vulnerabilities." },
          { name: "Crimson Notcher", description: "A lethal archer whose carefully placed shots inflict punishing wounds." }
        ]
      },
      {
        name: "Hawkeye",
        description: "A perceptive archer who excels at spotting threats and controlling long sightlines.",
        specialties: [
          { name: "Farsight Ascendant", description: "A master marksman who can identify and strike distant vulnerabilities." },
          { name: "Rainwielder", description: "A rapid-fire archer who blankets an area with a storm of arrows." }
        ]
      },
      {
        name: "Volleymaster",
        description: "A battlefield archer who specializes in suppressing groups with coordinated volleys.",
        specialties: [
          { name: "Crimson Notcher", description: "A lethal archer whose carefully placed shots inflict punishing wounds." },
          { name: "Rainwielder", description: "A rapid-fire archer who blankets an area with a storm of arrows." }
        ]
      }
    ]
  },
  {
    name: "Scout",
    description: "A mobile reconnaissance specialist who finds routes, tracks foes, and strikes from advantageous positions.",
    advanced: [
      {
        name: "Skirmisher",
        description: "A hit-and-run fighter who uses speed and positioning to avoid being pinned down.",
        specialties: [
          { name: "Pathfinder", description: "A route-finder who guides allies through dangerous terrain and around enemy lines." },
          { name: "Ghostblade", description: "A stealthy striker who appears at vulnerable points and disappears before retaliation." }
        ]
      },
      {
        name: "Tracker",
        description: "A pursuit expert who follows trails and identifies enemy movement or weaknesses.",
        specialties: [
          { name: "Ghostblade", description: "A stealthy striker who appears at vulnerable points and disappears before retaliation." },
          { name: "Longshot", description: "A patient hunter who lands reliable attacks from exceptional distance." }
        ]
      },
      {
        name: "Pathfinder",
        description: "An exploration expert who opens safe routes and helps allies navigate hostile ground.",
        specialties: [
          { name: "Waystalker", description: "A relentless pursuer who follows marked targets across difficult terrain." },
          { name: "Ghostblade", description: "A stealthy striker who appears at vulnerable points and disappears before retaliation." }
        ]
      }
    ]
  },
  {
    name: "Cleric",
    description: "A divine servant who heals allies, wards the faithful, and confronts supernatural threats.",
    advanced: [
      {
        name: "Vicar",
        description: "A spiritual leader who sustains allies through blessings, healing, and steady guidance.",
        specialties: [
          { name: "Saint of Mercy", description: "A compassionate healer who rescues allies from the brink of defeat." },
          { name: "Voice of the Dawn", description: "A radiant preacher whose words inspire courage and weaken despair." }
        ]
      },
      {
        name: "Exorcist",
        description: "A specialist in banishing spirits, breaking possession, and resisting corrupting forces.",
        specialties: [
          { name: "Lightbinder", description: "A holy caster who restrains darkness with radiant chains and protective seals." },
          { name: "Witchbane", description: "A hunter of curses who disrupts hostile magic and punishes occult enemies." }
        ]
      },
      {
        name: "Sanctifier",
        description: "A consecrator who protects ground, purifies corruption, and strengthens allies within sacred zones.",
        specialties: [
          { name: "Saint of Mercy", description: "A compassionate healer who rescues allies from the brink of defeat." },
          { name: "Witchbane", description: "A hunter of curses who disrupts hostile magic and punishes occult enemies." }
        ]
      }
    ]
  },
  {
    name: "Druid",
    description: "A nature-bound spellcaster who channels growth, beasts, weather, and the living world.",
    advanced: [
      {
        name: "Wilder",
        description: "A primal shapeshifter who draws strength from untamed nature and wild creatures.",
        specialties: [
          { name: "Wyrmborn Grovekeeper", description: "A guardian of ancient groves who channels draconic life-force through nature magic." },
          { name: "Avatar of the Verdant Deep", description: "A druid who becomes an overwhelming embodiment of ancient green power." }
        ]
      },
      {
        name: "Thornweaver",
        description: "A battlefield controller who binds enemies with roots, brambles, and living growth.",
        specialties: [
          { name: "Wyrmborn Grovekeeper", description: "A guardian of ancient groves who channels draconic life-force through nature magic." },
          { name: "Tempest Rootcaller", description: "A storm-and-root adept who traps enemies while unleashing violent natural forces." }
        ]
      },
      {
        name: "Cloudspeaker",
        description: "A weather mystic who shapes wind, rain, thunder, and shifting battlefield conditions.",
        specialties: [
          { name: "Avatar of the Verdant Deep", description: "A druid who becomes an overwhelming embodiment of ancient green power." },
          { name: "Tempest Rootcaller", description: "A storm-and-root adept who traps enemies while unleashing violent natural forces." }
        ]
      }
    ]
  },
  {
    name: "Fighter",
    description: "A versatile weapon specialist who wins through training, adaptability, and martial discipline.",
    advanced: [
      {
        name: "Weaponmaster",
        description: "A practiced combatant who adapts to different weapons and exploits enemy defenses.",
        specialties: [
          { name: "Blade Sage", description: "A technically brilliant swordsman who turns perfect timing into decisive advantage." },
          { name: "Ironstorm", description: "An aggressive fighter who overwhelms opponents with relentless chains of attacks." }
        ]
      },
      {
        name: "Gladiator",
        description: "A showy arena combatant who thrives under pressure and turns momentum into advantage.",
        specialties: [
          { name: "Ironstorm", description: "An aggressive fighter who overwhelms opponents with relentless chains of attacks." },
          { name: "Blood Banner", description: "A battle-tested champion who rallies allies through fearless, hard-won momentum." }
        ]
      },
      {
        name: "Blademaster",
        description: "A disciplined sword expert who balances offense, defense, and precise counterattacks.",
        specialties: [
          { name: "Blade Sage", description: "A technically brilliant swordsman who turns perfect timing into decisive advantage." },
          { name: "Blood Banner", description: "A battle-tested champion who rallies allies through fearless, hard-won momentum." }
        ]
      }
    ]
  },
  {
    name: "Rogue",
    description: "A stealthy opportunist who relies on deception, precision, traps, and exploiting openings.",
    advanced: [
      {
        name: "Assassin",
        description: "A covert killer who plans decisive strikes against isolated or high-value targets.",
        specialties: [
          { name: "Umbral Whisper", description: "A shadow operative who moves unseen and strikes before enemies can react." },
          { name: "Jester-King", description: "A flamboyant deceiver who turns misdirection and mockery into tactical control." }
        ]
      },
      {
        name: "Trickster",
        description: "A cunning infiltrator who confuses opponents with feints, illusions, and dirty tricks.",
        specialties: [
          { name: "Jester-King", description: "A flamboyant deceiver who turns misdirection and mockery into tactical control." },
          { name: "Poison Harlequin", description: "A theatrical poisoner who disguises lethal effects behind playful deception." }
        ]
      },
      {
        name: "Saboteur",
        description: "A disruption expert who disables equipment, lays traps, and undermines enemy plans.",
        specialties: [
          { name: "Umbral Whisper", description: "A shadow operative who moves unseen and strikes before enemies can react." },
          { name: "Poison Harlequin", description: "A theatrical poisoner who disguises lethal effects behind playful deception." }
        ]
      }
    ]
  },
  {
    name: "Monk",
    description: "A disciplined martial artist who channels focus, movement, and controlled unarmed strikes.",
    advanced: [
      {
        name: "Fist Sage",
        description: "A thoughtful hand-to-hand master who turns calm precision into powerful techniques.",
        specialties: [
          { name: "Lotus Flame", description: "A serene striker who releases sudden bursts of focused inner energy." },
          { name: "Stone Veil", description: "A defensive martial artist who absorbs force and conceals openings behind composure." }
        ]
      },
      {
        name: "Ironwalker",
        description: "A steadfast martial artist who advances through danger and withstands punishing attacks.",
        specialties: [
          { name: "Stone Veil", description: "A defensive martial artist who absorbs force and conceals openings behind composure." },
          { name: "Zenblade", description: "A weapon-focused ascetic who pairs meditative precision with swift, decisive cuts." }
        ]
      },
      {
        name: "Windstepper",
        description: "An agile martial artist who uses rapid movement to evade attacks and strike from unexpected angles.",
        specialties: [
          { name: "Lotus Flame", description: "A serene striker who releases sudden bursts of focused inner energy." },
          { name: "Zenblade", description: "A weapon-focused ascetic who pairs meditative precision with swift, decisive cuts." }
        ]
      }
    ]
  },
  {
    name: "Shaman",
    description: "A spiritual intermediary who calls on ancestors, spirits, and elemental powers.",
    advanced: [
      {
        name: "Totemist",
        description: "A spirit-worker who channels protective and offensive powers through sacred tokens.",
        specialties: [
          { name: "Skydrum Prophet", description: "A storm-visionary who calls thunder and reads signs in the sky." },
          { name: "Ancestor Vessel", description: "A living conduit who borrows the skills and wisdom of ancestral spirits." }
        ]
      },
      {
        name: "Spirit Caller",
        description: "A summoner who invites spirits to aid allies, hinder enemies, and shape the field.",
        specialties: [
          { name: "Ancestor Vessel", description: "A living conduit who borrows the skills and wisdom of ancestral spirits." },
          { name: "Wraithdrummer", description: "A spectral ritualist whose rhythms summon restless spirits and unsettle foes." }
        ]
      },
      {
        name: "Stormshaper",
        description: "A shaman who directs wind, lightning, and rain through ritual power.",
        specialties: [
          { name: "Skydrum Prophet", description: "A storm-visionary who calls thunder and reads signs in the sky." },
          { name: "Wraithdrummer", description: "A spectral ritualist whose rhythms summon restless spirits and unsettle foes." }
        ]
      }
    ]
  },
  {
    name: "Warden",
    description: "A defensive controller who protects territory, blocks enemy movement, and supports nearby allies.",
    advanced: [
      {
        name: "Ironwall",
        description: "A heavy defender who holds a position and makes it difficult for enemies to advance.",
        specialties: [
          { name: "Palisade", description: "A fortification expert who creates dependable barriers and safe defensive lines." },
          { name: "Soul Bastion", description: "A spiritual guardian who shields allies with wards that endure under pressure." }
        ]
      },
      {
        name: "Battle Shepherd",
        description: "A protector who directs allies into safer positions and keeps a team fighting together.",
        specialties: [
          { name: "Palisade", description: "A fortification expert who creates dependable barriers and safe defensive lines." },
          { name: "Sanctum Keeper", description: "A guardian who establishes protected zones that restore and reinforce allies." }
        ]
      },
      {
        name: "Gravemarcher",
        description: "An imposing area-denial defender who slows advances and punishes enemies that cross its line.",
        specialties: [
          { name: "Soul Bastion", description: "A spiritual guardian who shields allies with wards that endure under pressure." },
          { name: "Sanctum Keeper", description: "A guardian who establishes protected zones that restore and reinforce allies." }
        ]
      }
    ]
  },
  {
    name: "Engineer",
    description: "A battlefield inventor who uses devices, mechanisms, and prepared tools to gain an advantage.",
    advanced: [
      {
        name: "Machinist",
        description: "A technical specialist who builds and operates reliable mechanical tools and combat devices.",
        specialties: [
          { name: "Forge Saint", description: "A master craftsperson whose exceptional devices combine durability with near-miraculous performance." },
          { name: "Brass Juggernaut", description: "A heavy-mechanism expert who fields intimidating machines built to break enemy lines." }
        ]
      },
      {
        name: "Saboteur",
        description: "A disruption expert who disables equipment, lays traps, and undermines enemy plans.",
        specialties: [
          { name: "Clockcurse Tinker", description: "A trap-maker who twists timing and machinery into unpredictable hazards." },
          { name: "Brass Juggernaut", description: "A heavy-mechanism expert who fields intimidating machines built to break enemy lines." }
        ]
      },
      {
        name: "Gearmancer",
        description: "A device-mage who blends enchantment with machinery to create unusual tactical effects.",
        specialties: [
          { name: "Forge Saint", description: "A master craftsperson whose exceptional devices combine durability with near-miraculous performance." },
          { name: "Clockcurse Tinker", description: "A trap-maker who twists timing and machinery into unpredictable hazards." }
        ]
      }
    ]
  },
  {
    name: "Necromancer",
    description: "A death mage who manipulates spirits, remains, and the boundary between life and death.",
    advanced: [
      {
        name: "Bonecaller",
        description: "A summoner who raises skeletal servants to fight, guard, and overwhelm opponents.",
        specialties: [
          { name: "Crypt Marshall", description: "A commander of the dead who organizes undead forces with military precision." },
          { name: "Corpse Sovereign", description: "A powerful necromancer who rules over a formidable host of reanimated bodies." }
        ]
      },
      {
        name: "Hauntweaver",
        description: "A spirit-worker who binds ghosts and uses fear, possession, and spectral interference.",
        specialties: [
          { name: "Soul Shepherd", description: "A guide of the departed who directs spirits toward protection or release." },
          { name: "Corpse Sovereign", description: "A powerful necromancer who rules over a formidable host of reanimated bodies." }
        ]
      },
      {
        name: "Tomb Herald",
        description: "A death-touched herald who spreads dread and calls on the power of forgotten graves.",
        specialties: [
          { name: "Crypt Marshall", description: "A commander of the dead who organizes undead forces with military precision." },
          { name: "Soul Shepherd", description: "A guide of the departed who directs spirits toward protection or release." }
        ]
      }
    ]
  },
  {
    name: "Bard",
    description: "A musical performer who inspires allies, disrupts foes, and turns performance into practical magic.",
    advanced: [
      {
        name: "Virtuoso",
        description: "A consummate performer whose technical mastery produces powerful magical effects.",
        specialties: [
          { name: "Divine Aria", description: "A sacred singer whose music restores hope and channels celestial power." },
          { name: "Oath Singer", description: "A singer whose vows become resonant magic that strengthens commitment and resolve." }
        ]
      },
      {
        name: "Balladeer",
        description: "A storyteller-musician who shapes morale through memorable tales and stirring refrains.",
        specialties: [
          { name: "Oath Singer", description: "A singer whose vows become resonant magic that strengthens commitment and resolve." },
          { name: "Ballad Echo", description: "A musical echoist who repeats and amplifies the effects of a performance." }
        ]
      },
      {
        name: "Cantor",
        description: "A ceremonial vocalist who sustains chants that support allies and weaken hostile forces.",
        specialties: [
          { name: "Divine Aria", description: "A sacred singer whose music restores hope and channels celestial power." },
          { name: "Ballad Echo", description: "A musical echoist who repeats and amplifies the effects of a performance." }
        ]
      }
    ]
  },
  {
    name: "Dancer",
    description: "A mobile performer who turns rhythm, footwork, and graceful motion into tactical advantage.",
    advanced: [
      {
        name: "Bladewaltzer",
        description: "A weapon dancer who combines elegant steps with flowing close-range attacks.",
        specialties: [
          { name: "Rhythmblade", description: "A rhythmic duelist whose attacks grow more dangerous when performed in sequence." },
          { name: "Carnival Wraith", description: "A masked performer who uses eerie movement and spectacle to unsettle enemies." }
        ]
      },
      {
        name: "Choreomancer",
        description: "A magical dancer whose choreographed movements produce spells and battlefield effects.",
        specialties: [
          { name: "Stepwitch", description: "A spell-dancer who casts charms and hexes through carefully timed steps." },
          { name: "Rhythmblade", description: "A rhythmic duelist whose attacks grow more dangerous when performed in sequence." }
        ]
      },
      {
        name: "Mirrorstep",
        description: "An elusive dancer who uses misdirection and mirrored movement to evade and confuse foes.",
        specialties: [
          { name: "Stepwitch", description: "A spell-dancer who casts charms and hexes through carefully timed steps." },
          { name: "Carnival Wraith", description: "A masked performer who uses eerie movement and spectacle to unsettle enemies." }
        ]
      }
    ]
  },
  {
    name: "Diplomat",
    description: "A social tactician who negotiates, manipulates loyalties, and changes the balance of a conflict.",
    advanced: [
      {
        name: "Envoy",
        description: "A representative who builds alliances and turns negotiation into strategic leverage.",
        specialties: [
          { name: "Kingmaker", description: "A power broker who shapes leadership and decides which allies rise to influence." },
          { name: "Voice of Accord", description: "A mediator whose words settle disputes and coordinate otherwise divided allies." }
        ]
      },
      {
        name: "Silver Tongue",
        description: "A persuasive operator who uses charm, rhetoric, and careful deception to sway others.",
        specialties: [
          { name: "Voice of Accord", description: "A mediator whose words settle disputes and coordinate otherwise divided allies." },
          { name: "Mirror Accuser", description: "A truth-twister who reflects an opponent's claims back at them to expose contradictions." }
        ]
      },
      {
        name: "Herald",
        description: "A public voice who spreads declarations, rallies supporters, and shapes how events are understood.",
        specialties: [
          { name: "Kingmaker", description: "A power broker who shapes leadership and decides which allies rise to influence." },
          { name: "Mirror Accuser", description: "A truth-twister who reflects an opponent's claims back at them to expose contradictions." }
        ]
      }
    ]
  },
  {
    name: "Merchant",
    description: "An economic tactician who uses trade, supplies, bargaining, and resource control to support a team.",
    advanced: [
      {
        name: "Smuggler",
        description: "A covert trader who moves restricted goods and finds unconventional ways around obstacles.",
        specialties: [
          { name: "Trade Tyrant", description: "A ruthless dealmaker who controls valuable exchanges and forces costly choices." },
          { name: "Vaultcaller", description: "A keeper of hidden reserves who produces the right resource at a critical moment." }
        ]
      },
      {
        name: "Marketlord",
        description: "A market strategist who controls prices, access, and the flow of useful supplies.",
        specialties: [
          { name: "Trade Tyrant", description: "A ruthless dealmaker who controls valuable exchanges and forces costly choices." },
          { name: "Gilded Broker", description: "A master negotiator who turns wealth and connections into practical battlefield advantages." }
        ]
      },
      {
        name: "Appraiser",
        description: "An expert evaluator who identifies value, hidden flaws, and useful properties in goods and equipment.",
        specialties: [
          { name: "Gilded Broker", description: "A master negotiator who turns wealth and connections into practical battlefield advantages." },
          { name: "Vaultcaller", description: "A keeper of hidden reserves who produces the right resource at a critical moment." }
        ]
      }
    ]
  },
  {
    name: "Commander",
    description: "A battlefield leader who coordinates allies, directs formations, and turns plans into team-wide advantages.",
    advanced: [
      {
        name: "Warlord",
        description: "An aggressive leader who drives allies forward through forceful orders and personal example.",
        specialties: [
          { name: "Crownmarshal", description: "A supreme field commander whose authority keeps a force disciplined under pressure." },
          { name: "Banner Imperium", description: "A standard-bearer whose banner coordinates allies and projects commanding presence." }
        ]
      },
      {
        name: "Tactician",
        description: "A planner who reads the battlefield and directs allies toward efficient tactical decisions.",
        specialties: [
          { name: "Echo General", description: "A strategic mastermind who anticipates enemy moves and repeats successful commands through allies." },
          { name: "Banner Imperium", description: "A standard-bearer whose banner coordinates allies and projects commanding presence." }
        ]
      },
      {
        name: "Strategeist",
        description: "A psychological strategist who manipulates expectations and uses clever plans to unsettle opponents.",
        specialties: [
          { name: "Echo General", description: "A strategic mastermind who anticipates enemy moves and repeats successful commands through allies." },
          { name: "Crownmarshal", description: "A supreme field commander whose authority keeps a force disciplined under pressure." }
        ]
      }
    ]
  },
  {
    name: "Librarian",
    description: "A keeper of knowledge who turns research, records, and careful analysis into useful support.",
    advanced: [
      {
        name: "Archivist",
        description: "A methodical researcher who preserves information and retrieves the right fact at the right time.",
        specialties: [
          { name: "Scriptweaver", description: "A scholar who transforms written symbols and recorded language into active magic." },
          { name: "Chronicle Revenant", description: "A keeper of lost histories who draws power from memories that refuse to fade." }
        ]
      },
      {
        name: "Codex Warden",
        description: "A guardian of dangerous texts who uses knowledge to counter threats and protect allies.",
        specialties: [
          { name: "Chronicle Revenant", description: "A keeper of lost histories who draws power from memories that refuse to fade." },
          { name: "Inkwarden", description: "A defender of written lore who binds, seals, and protects knowledge through magical script." }
        ]
      },
      {
        name: "Lorebinder",
        description: "A lore specialist who connects stories, secrets, and recorded facts to reveal hidden patterns.",
        specialties: [
          { name: "Scriptweaver", description: "A scholar who transforms written symbols and recorded language into active magic." },
          { name: "Inkwarden", description: "A defender of written lore who binds, seals, and protects knowledge through magical script." }
        ]
      }
    ]
  },
  {
    name: "Quartermaster",
    description: "A logistics specialist who manages equipment, provisions, and the resources needed to keep a team effective.",
    advanced: [
      {
        name: "Provisioner",
        description: "A supplier who keeps allies equipped, fed, and ready for prolonged operations.",
        specialties: [
          { name: "Siege Steward", description: "A logistics expert who organizes the tools and supplies required to overcome fortified positions." },
          { name: "Ghost Quarter", description: "A covert supply-master who secures hidden caches and delivers resources unnoticed." }
        ]
      },
      {
        name: "Logistician",
        description: "A planner who optimizes movement, supply lines, and the timing of critical resources.",
        specialties: [
          { name: "Caskwright", description: "A specialist in portable stores who turns carefully prepared supplies into timely advantages." },
          { name: "Ghost Quarter", description: "A covert supply-master who secures hidden caches and delivers resources unnoticed." }
        ]
      },
      {
        name: "Warchest Keeper",
        description: "A resource manager who safeguards reserves and deploys them when the battle most needs them.",
        specialties: [
          { name: "Siege Steward", description: "A logistics expert who organizes the tools and supplies required to overcome fortified positions." },
          { name: "Caskwright", description: "A specialist in portable stores who turns carefully prepared supplies into timely advantages." }
        ]
      }
    ]
  },
  {
    name: "Beastmaster",
    description: "A companion specialist who fights alongside trained beasts and coordinates their instincts with allies.",
    advanced: [
      {
        name: "Packleader",
        description: "A leader of animal companions who uses coordinated pack tactics to surround and pressure foes.",
        specialties: [
          { name: "Moonhowl Alpha", description: "A dominant beast leader who empowers a pack through instinct and fearsome calls." },
          { name: "Elder Wildspeaker", description: "A seasoned animal speaker who communicates with ancient and unusually powerful beasts." }
        ]
      },
      {
        name: "Tamer",
        description: "A patient trainer who develops a companion's abilities and controls its behavior in dangerous situations.",
        specialties: [
          { name: "Moonhowl Alpha", description: "A dominant beast leader who empowers a pack through instinct and fearsome calls." },
          { name: "Chimeric Warden", description: "A guardian of strange hybrid beasts who draws on their unusual strengths." }
        ]
      },
      {
        name: "Wyrdbinder",
        description: "A mystic who forms unusual bonds with magical creatures and shares in their extraordinary traits.",
        specialties: [
          { name: "Chimeric Warden", description: "A guardian of strange hybrid beasts who draws on their unusual strengths." },
          { name: "Elder Wildspeaker", description: "A seasoned animal speaker who communicates with ancient and unusually powerful beasts." }
        ]
      }
    ]
  },
  {
    name: "Cartographer",
    description: "A spatial expert who maps routes, reads terrain, and helps allies exploit the shape of a battlefield.",
    advanced: [
      {
        name: "Wayfinder",
        description: "A route specialist who finds safe passages through unfamiliar or dangerous territory.",
        specialties: [
          { name: "Wanderking", description: "A legendary traveler who always seems to find a path through impossible country." },
          { name: "Mirage Cartomancer", description: "A map-mage who uses deceptive routes and shifting images to confuse pursuers." }
        ]
      },
      {
        name: "Trailblazer",
        description: "A pioneer who opens new paths and helps a team move through difficult terrain.",
        specialties: [
          { name: "Pathsculptor", description: "A terrain shaper who creates, closes, or redirects routes across the battlefield." },
          { name: "Wanderking", description: "A legendary traveler who always seems to find a path through impossible country." }
        ]
      },
      {
        name: "Mapseer",
        description: "A visionary navigator who reads hidden patterns in maps, places, and possible routes.",
        specialties: [
          { name: "Pathsculptor", description: "A terrain shaper who creates, closes, or redirects routes across the battlefield." },
          { name: "Mirage Cartomancer", description: "A map-mage who uses deceptive routes and shifting images to confuse pursuers." }
        ]
      }
    ]
  },
  {
    name: "Runesmith",
    description: "A magical craftsperson who inscribes runes and seals to create durable, rule-bound effects.",
    advanced: [
      {
        name: "Glyphcrafter",
        description: "An inscriber who creates magical glyphs that trigger when specific conditions are met.",
        specialties: [
          { name: "Eidolon Binder", description: "A rune master who anchors spirits or magical echoes inside crafted symbols." },
          { name: "Sealmourner", description: "A keeper of binding seals who can close breaches and restrain dangerous powers." }
        ]
      },
      {
        name: "Sealbreaker",
        description: "A counter-rune expert who dismantles wards, unlocks bindings, and exploits magical weaknesses.",
        specialties: [
          { name: "Sealmourner", description: "A keeper of binding seals who can close breaches and restrain dangerous powers." },
          { name: "Script Architect", description: "A master designer who builds complex magical systems from interlocking runes." }
        ]
      },
      {
        name: "Runecaller",
        description: "A rune caster who invokes prepared symbols to produce repeatable magical effects.",
        specialties: [
          { name: "Eidolon Binder", description: "A rune master who anchors spirits or magical echoes inside crafted symbols." },
          { name: "Script Architect", description: "A master designer who builds complex magical systems from interlocking runes." }
        ]
      }
    ]
  },
  {
    name: "Tailor",
    description: "An artisan who crafts clothing, disguises, and enchanted garments that alter a character's capabilities.",
    advanced: [
      {
        name: "Weaver",
        description: "A textile artisan who creates garments with subtle enchantments and durable magical patterns.",
        specialties: [
          { name: "The Unraveler", description: "A fabric mystic who unpicks enchantments and exposes the weaknesses in crafted things." },
          { name: "Emblem Artisan", description: "A designer who embroiders symbols that grant identity-linked powers and protections." }
        ]
      },
      {
        name: "Costumer",
        description: "A disguise expert who uses clothing, masks, and presentation to change how others perceive a person.",
        specialties: [
          { name: "Masqueheart", description: "A master of masks who can adopt convincing personas and conceal their true nature." },
          { name: "Emblem Artisan", description: "A designer who embroiders symbols that grant identity-linked powers and protections." }
        ]
      },
      {
        name: "Threadbinder",
        description: "A magical tailor who binds people, objects, or effects together through enchanted thread.",
        specialties: [
          { name: "Masqueheart", description: "A master of masks who can adopt convincing personas and conceal their true nature." },
          { name: "The Unraveler", description: "A fabric mystic who unpicks enchantments and exposes the weaknesses in crafted things." }
        ]
      }
    ]
  },
  {
    name: "Navigator",
    description: "A traversal specialist who guides people across sea, sky, and magical routes between places.",
    advanced: [
      {
        name: "Sailmaster",
        description: "A seasoned mariner who commands vessels, reads conditions, and keeps a crew moving safely.",
        specialties: [
          { name: "Stormpath Herald", description: "A storm navigator who finds and commands routes through dangerous weather." },
          { name: "Driftblade", description: "A roaming fighter who uses momentum and shifting position to attack from unexpected directions." }
        ]
      },
      {
        name: "Skytracker",
        description: "An aerial route-finder who navigates by stars, currents, and distant landmarks.",
        specialties: [
          { name: "Worldpiercer", description: "A pathfinder who can cross vast distances and pierce barriers between far-flung places." },
          { name: "Driftblade", description: "A roaming fighter who uses momentum and shifting position to attack from unexpected directions." }
        ]
      },
      {
        name: "Leywalker",
        description: "A magical navigator who follows hidden currents of power to travel between distant places.",
        specialties: [
          { name: "Stormpath Herald", description: "A storm navigator who finds and commands routes through dangerous weather." },
          { name: "Worldpiercer", description: "A pathfinder who can cross vast distances and pierce barriers between far-flung places." }
        ]
      }
    ]
  },
  {
    name: "Samurai",
    description: "A disciplined duelist who combines precise weapon forms, composure, and decisive counterattacks.",
    advanced: []
  },
  {
    name: "Ninja",
    description: "A covert infiltrator who uses stealth, misdirection, mobility, and sudden strikes.",
    advanced: []
  },
  {
    name: "Gunslinger",
    description: "A firearm specialist who relies on quick aim, careful ammunition use, and decisive ranged attacks.",
    advanced: []
  },
  {
    name: "Pirate",
    description: "A daring raider who thrives on risky maneuvers, close-quarters aggression, and opportunistic plunder.",
    advanced: []
  },
  {
    name: "Herbalist",
    description: "A practical naturalist who prepares remedies, stimulants, antidotes, and harmful compounds from plants.",
    advanced: []
  },
  {
    name: "Oracle",
    description: "A prophetic seer who interprets signs and glimpses possible futures to guide decisions.",
    advanced: []
  },
  {
    name: "Chaplain",
    description: "A battlefield spiritual leader who bolsters morale and offers steady support under pressure.",
    advanced: []
  },
  {
    name: "Soothsayer",
    description: "A diviner who reads omens and manipulates luck to tilt uncertain events toward an outcome.",
    advanced: []
  },
  {
    name: "Caretaker",
    description: "A compassionate support specialist who stabilizes allies and helps a group recover from hardship.",
    advanced: []
  },
  {
    name: "Witch",
    description: "A practitioner of charms, curses, familiars, and old magic that rewards preparation and cunning.",
    advanced: []
  },
  {
    name: "Chanter",
    description: "A sustained-voice performer whose repeated chants maintain auras and reinforce allies over time.",
    advanced: []
  },
  {
    name: "Archivist",
    description: "A record keeper who organizes evidence, preserves histories, and uses careful analysis to uncover patterns.",
    advanced: []
  },
  {
    name: "Mechanist",
    description: "A hands-on mechanical specialist who maintains devices and solves problems through practical engineering.",
    advanced: []
  },
  {
    name: "Folk Companion",
    description: "An extraordinary talking animal or folklore companion whose unusual talents aid a party in surprising ways.",
    advanced: []
  },
  {
    name: "Chronicler",
    description: "A storyteller who records deeds and turns shared experiences into inspiration and insight.",
    advanced: []
  },
  {
    name: "Courier",
    description: "A swift messenger who excels at moving information and small essentials through dangerous territory.",
    advanced: []
  },
  {
    name: "Scrapper",
    description: "A resourceful improviser who turns scavenged materials and rough tactics into practical advantages.",
    advanced: []
  }
];

function Description({ children }) {
  return <p className="ftc-description">{children}</p>;
}

function SpecialtyList({ specialties }) {
  if (!specialties?.length) return null;
  return (
    <ul className="ftc-specialties">
      {specialties.map((specialty) => (
        <li key={specialty.name} className="ftc-specialty">
          <strong>{specialty.name}</strong>
          <Description>{specialty.description}</Description>
        </li>
      ))}
    </ul>
  );
}

export default function ClassExplorer() {
  const [selectedName, setSelectedName] = useState(CLASS_DATA[0]?.name ?? "");
  const [expandedSubclass, setExpandedSubclass] = useState("");

  const selectedClass = useMemo(
    () => CLASS_DATA.find((item) => item.name === selectedName) ?? CLASS_DATA[0],
    [selectedName]
  );

  function handleSelect(event) {
    setSelectedName(event.target.value);
    setExpandedSubclass("");
  }

  return (
    <section className="ftc-class-explorer">
      <style>{`
        .ftc-class-explorer {
          --ftc-border: #d8d8d8;
          --ftc-muted: #666;
          --ftc-panel: #f7f6f2;
          color: inherit;
          font: inherit;
          max-width: 900px;
          margin: 0 auto;
        }
        .ftc-class-explorer * { box-sizing: border-box; }
        .ftc-class-explorer label {
          display: block;
          font-weight: 700;
          margin-bottom: .45rem;
        }
        .ftc-class-explorer select {
          width: 100%;
          padding: .75rem .85rem;
          border: 1px solid var(--ftc-border);
          border-radius: .5rem;
          background: transparent;
          color: inherit;
          font: inherit;
        }
        .ftc-class-summary {
          margin: 1rem 0;
          padding: 1rem;
          border: 1px solid var(--ftc-border);
          border-radius: .65rem;
          background: var(--ftc-panel);
        }
        .ftc-class-summary h2 { margin: 0 0 .35rem; font-size: 1.35rem; }
        .ftc-description {
          margin: .3rem 0 0;
          color: var(--ftc-muted);
          line-height: 1.5;
          font-size: .95rem;
        }
        .ftc-subclass {
          border: 1px solid var(--ftc-border);
          border-radius: .6rem;
          margin: .65rem 0;
          overflow: hidden;
        }
        .ftc-subclass-toggle {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: .85rem 1rem;
          text-align: left;
          border: 0;
          background: transparent;
          color: inherit;
          font: inherit;
          cursor: pointer;
        }
        .ftc-subclass-toggle:hover { background: var(--ftc-panel); }
        .ftc-subclass-toggle strong { display: block; }
        .ftc-subclass-content { padding: 0 1rem 1rem; }
        .ftc-subclass-content h4 { margin: 1rem 0 .35rem; }
        .ftc-specialties { list-style: none; padding: 0; margin: .4rem 0 0; }
        .ftc-specialty { padding: .65rem 0; border-top: 1px solid var(--ftc-border); }
        .ftc-empty { padding: 1rem; border: 1px dashed var(--ftc-border); border-radius: .6rem; }
        .ftc-count { color: var(--ftc-muted); font-size: .85rem; margin-top: .5rem; }
        @media (prefers-color-scheme: dark) {
          .ftc-class-explorer { --ftc-border: #454545; --ftc-muted: #b8b8b8; --ftc-panel: #242424; }
        }
      `}</style>

      <label htmlFor="ftc-class-select">Choose a base class</label>
      <select id="ftc-class-select" value={selectedName} onChange={handleSelect}>
        {CLASS_DATA.map((item) => (
          <option key={item.name} value={item.name}>{item.name}</option>
        ))}
      </select>

      {selectedClass && (
        <>
          <div className="ftc-class-summary">
            <h2>{selectedClass.name}</h2>
            <Description>{selectedClass.description}</Description>
            <div className="ftc-count">
              {selectedClass.advanced.length
                ? `${selectedClass.advanced.length} subclasses`
                : "Subclass tree not yet defined"}
            </div>
          </div>

          {selectedClass.advanced.length ? (
            <div className="ftc-subclasses">
              {selectedClass.advanced.map((subclass) => {
                const isExpanded = expandedSubclass === subclass.name;
                return (
                  <article className="ftc-subclass" key={subclass.name}>
                    <button
                      type="button"
                      className="ftc-subclass-toggle"
                      aria-expanded={isExpanded}
                      onClick={() => setExpandedSubclass(isExpanded ? "" : subclass.name)}
                    >
                      <span>
                        <strong>{subclass.name}</strong>
                        <Description>{subclass.description}</Description>
                      </span>
                      <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
                    </button>
                    {isExpanded && (
                      <div className="ftc-subclass-content">
                        <h4>Prestige specialties</h4>
                        {subclass.specialties?.length ? (
                          <SpecialtyList specialties={subclass.specialties} />
                        ) : (
                          <p className="ftc-description">No prestige specialties have been defined for this subclass yet.</p>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="ftc-empty">
              <strong>Advancement paths coming soon.</strong>
              <Description>
                This base class is included in the roster, but its subclasses and prestige specialties have not been designed yet.
              </Description>
            </div>
          )}
        </>
      )}
    </section>
  );
}
'''

out = Path("/mnt/data/ClassExplorer.jsx")
out.write_text(content, encoding="utf-8")
print(f"Created {out} ({len(content):,} characters, {len(content.splitlines()):,} lines).")
