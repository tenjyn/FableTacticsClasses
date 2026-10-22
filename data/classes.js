
const classData = [
  {
    name: "Knight",
    description: "An armored warrior who protects allies through discipline, defense, and frontline leadership.",
    advanced: [
      { name: "Crusader", description: "A zealous champion who combines martial skill with sacred or ideological conviction.", prestige: [
        { name: "Knight-Errant", description: "A wandering champion who defends the helpless and excels at independent frontline combat." },
        { name: "Iron Saint", description: "An unwavering holy defender whose faith reinforces armor, resolve, and allied protection." }
      ]},
      { name: "Sentinel", description: "A vigilant guardian who intercepts threats and punishes enemies that approach protected allies.", prestige: [
        { name: "Iron Saint", description: "An unwavering holy defender whose faith reinforces armor, resolve, and allied protection." },
        { name: "Gravemark", description: "A grim guardian who anchors the battlefield and makes advancing against them costly." }
      ]},
      { name: "Bulwark", description: "A heavily fortified defender who blocks routes, absorbs punishment, and holds objectives.", prestige: [
        { name: "Knight-Errant", description: "A wandering champion who defends the helpless and excels at independent frontline combat." },
        { name: "Gravemark", description: "A grim guardian who anchors the battlefield and makes advancing against them costly." }
      ]}
    ]
  },
  {
    name: "Magician",
    description: "A versatile spellcaster who manipulates elemental forces, arcane energies, and battlefield conditions.",
    advanced: [
      { name: "Elementalist", description: "A specialist in elemental attacks who exploits enemy weaknesses and reshapes terrain.", prestige: [
        { name: "Pyroveil", description: "A master of destructive elemental magic who cloaks the battlefield in searing, volatile power." },
        { name: "Hexstar", description: "An arcane prodigy who combines elemental mastery with debilitating magical afflictions." }
      ]},
      { name: "Arcanist", description: "A scholar of raw magic who specializes in precision spells, magical control, and complex effects.", prestige: [
        { name: "Archon of the Arcane", description: "A supreme spellcaster who commands overwhelming arcane power with exceptional versatility." },
        { name: "Hexstar", description: "An arcane prodigy who combines elemental mastery with debilitating magical afflictions." }
      ]},
      { name: "Spellblade", description: "A battlemage who channels spells through weapons to strike enemies at close range.", prestige: [
        { name: "Spellheart Duelist", description: "An elegant magical swordsman who blends precise weapon techniques with instantaneous spellcasting." },
        { name: "Pyroveil", description: "A master of destructive elemental magic who cloaks the battlefield in searing, volatile power." },
        { name: "Archon of the Arcane", description: "A supreme spellcaster who commands overwhelming arcane power with exceptional versatility." }
      ]}
    ]
  },
  {
    name: "Warlock",
    description: "A pact-bound caster who uses curses, forbidden powers, and supernatural bargains to weaken enemies.",
    advanced: [
      { name: "Bloodbinder", description: "A blood magician who converts vitality, sacrifice, and life-draining magic into power.", prestige: [
        { name: "Sanguine Tyrant", description: "A ruthless blood sovereign who dominates enemies through life theft and sacrificial magic." },
        { name: "Oathshard", description: "A pact warrior who weaponizes broken promises, binding curses, and the cost of supernatural bargains." }
      ]},
      { name: "Hexblade", description: "A curse-wielding combatant who binds hostile magic to weapons and punishes marked targets.", prestige: [
        { name: "Covenlord", description: "A master of dark pacts who coordinates curses and empowers allies through forbidden covenants." },
        { name: "Oathshard", description: "A pact warrior who weaponizes broken promises, binding curses, and the cost of supernatural bargains." }
      ]},
      { name: "Soulbrand", description: "A soul manipulator who marks enemies and converts spiritual damage into supernatural advantages.", prestige: [
        { name: "Sanguine Tyrant", description: "A ruthless blood sovereign who dominates enemies through life theft and sacrificial magic." },
        { name: "Covenlord", description: "A master of dark pacts who coordinates curses and empowers allies through forbidden covenants." }
      ]}
    ]
  },
  {
    name: "Archer",
    description: "A ranged combatant who specializes in accurate bow attacks, target selection, and battlefield positioning.",
    advanced: [
      { name: "Sharpshooter", description: "A precision marksman who eliminates priority targets with powerful, carefully aimed shots.", prestige: [
        { name: "Farsight Ascendant", description: "A legendary marksman who can strike distant targets with extraordinary precision." },
        { name: "Crimson Notcher", description: "A lethal execution archer who specializes in devastating shots against vulnerable enemies." }
      ]},
      { name: "Hawkeye", description: "A vigilant archer who excels at spotting hidden threats and exploiting long sightlines.", prestige: [
        { name: "Farsight Ascendant", description: "A legendary marksman who can strike distant targets with extraordinary precision." },
        { name: "Rainwielder", description: "A master of sustained ranged attacks who blankets enemy formations with volleys of arrows." }
      ]},
      { name: "Volleymaster", description: "A battlefield archer who attacks groups through rapid volleys and coordinated barrages.", prestige: [
        { name: "Crimson Notcher", description: "A lethal execution archer who specializes in devastating shots against vulnerable enemies." },
        { name: "Rainwielder", description: "A master of sustained ranged attacks who blankets enemy formations with volleys of arrows." }
      ]}
    ]
  },
  {
    name: "Scout",
    description: "A mobile reconnaissance specialist who navigates difficult terrain and exploits enemy positioning.",
    advanced: [
      { name: "Skirmisher", description: "A fast-moving fighter who harasses opponents, strikes opportunistically, and withdraws before retaliation.", prestige: [
        { name: "Pathfinder", description: "An expert guide who finds safe routes, bypasses obstacles, and leads allies through hostile terrain." },
        { name: "Ghostblade", description: "A stealthy hunter who combines sudden ambushes with swift, elusive melee attacks." }
      ]},
      { name: "Tracker", description: "A pursuit specialist who follows enemy movements, reveals trails, and hunts isolated targets.", prestige: [
        { name: "Ghostblade", description: "A stealthy hunter who combines sudden ambushes with swift, elusive melee attacks." },
        { name: "Longshot", description: "A patient hunter who specializes in accurate ranged attacks against distant targets." }
      ]},
      { name: "Pathfinder", description: "A wilderness expert who improves movement, discovers routes, and helps allies cross hazardous ground.", prestige: [
        { name: "Waystalker", description: "A relentless wilderness predator who pursues enemies through terrain others cannot safely cross." },
        { name: "Ghostblade", description: "A stealthy hunter who combines sudden ambushes with swift, elusive melee attacks." }
      ]}
    ]
  },
  {
    name: "Cleric",
    description: "A divine spellcaster who heals allies, strengthens their resolve, and counters supernatural threats.",
    advanced: [
      { name: "Vicar", description: "A spiritual leader who restores allies and reinforces the party through blessings and guidance.", prestige: [
        { name: "Saint of Mercy", description: "A miraculous healer who specializes in restoration, protection, and rescuing the fallen." },
        { name: "Voice of the Dawn", description: "A radiant herald whose blessings inspire allies and weaken creatures of darkness." }
      ]},
      { name: "Exorcist", description: "A supernatural specialist who banishes spirits, breaks curses, and suppresses hostile magic.", prestige: [
        { name: "Lightbinder", description: "A sacred mage who restrains supernatural enemies with radiant wards and binding light." },
        { name: "Witchbane", description: "A relentless hunter of curses and forbidden magic who disrupts enemy spellcasters." }
      ]},
      { name: "Sanctifier", description: "A consecration expert who creates sacred ground and protects allies from corruption.", prestige: [
        { name: "Saint of Mercy", description: "A miraculous healer who specializes in restoration, protection, and rescuing the fallen." },
        { name: "Witchbane", description: "A relentless hunter of curses and forbidden magic who disrupts enemy spellcasters." }
      ]}
    ]
  },
  {
    name: "Druid",
    description: "A nature caster who manipulates terrain, commands living forces, and adapts to the wilderness.",
    advanced: [
      { name: "Wilder", description: "A primal shapeshifter who draws strength from beasts, untamed landscapes, and instinct.", prestige: [
        { name: "Wyrmborn Grovekeeper", description: "A guardian of ancient groves who channels draconic vitality and the power of primordial nature." },
        { name: "Avatar of the Verdant Deep", description: "A living embodiment of wild nature who transforms the battlefield with immense growth and life." }
      ]},
      { name: "Thornweaver", description: "A plant mage who ensnares enemies, creates barriers, and turns vegetation into a weapon.", prestige: [
        { name: "Wyrmborn Grovekeeper", description: "A guardian of ancient groves who channels draconic vitality and the power of primordial nature." },
        { name: "Tempest Rootcaller", description: "A storm-and-root caster who binds enemies while unleashing violent natural forces." }
      ]},
      { name: "Cloudspeaker", description: "A weather shaper who controls wind, rain, fog, and atmospheric battlefield effects.", prestige: [
        { name: "Avatar of the Verdant Deep", description: "A living embodiment of wild nature who transforms the battlefield with immense growth and life." },
        { name: "Tempest Rootcaller", description: "A storm-and-root caster who binds enemies while unleashing violent natural forces." }
      ]}
    ]
  },
  {
    name: "Fighter",
    description: "A versatile weapon specialist who adapts through martial techniques, stances, and equipment choices.",
    advanced: [
      { name: "Weaponmaster", description: "A disciplined combatant who masters weapon techniques and exploits the strengths of different arms.", prestige: [
        { name: "Blade Sage", description: "A peerless weapon scholar who combines perfect technique with tactical anticipation." },
        { name: "Ironstorm", description: "An unstoppable offensive warrior who overwhelms enemies with relentless combinations." }
      ]},
      { name: "Gladiator", description: "A showy arena fighter who thrives on aggression, momentum, and pressure against opponents.", prestige: [
        { name: "Ironstorm", description: "An unstoppable offensive warrior who overwhelms enemies with relentless combinations." },
        { name: "Blood Banner", description: "A battle-hardened champion who turns wounds, victories, and allied courage into fighting power." }
      ]},
      { name: "Blademaster", description: "A dedicated swordsman who balances precise attacks, counters, and disciplined defense.", prestige: [
        { name: "Blade Sage", description: "A peerless weapon scholar who combines perfect technique with tactical anticipation." },
        { name: "Blood Banner", description: "A battle-hardened champion who turns wounds, victories, and allied courage into fighting power." }
      ]}
    ]
  },
  {
    name: "Rogue",
    description: "An opportunistic infiltrator who relies on stealth, traps, deception, and attacks against exposed enemies.",
    advanced: [
      { name: "Assassin", description: "A stealth killer who eliminates high-value targets before they can respond.", prestige: [
        { name: "Umbral Whisper", description: "A shadow specialist who infiltrates enemy lines and delivers nearly undetectable strikes." },
        { name: "Jester-King", description: "A deceptive trickster who turns confusion, misdirection, and enemy mistakes into control." }
      ]},
      { name: "Trickster", description: "A deceptive combatant who uses feints, illusions, and dirty tricks to control engagements.", prestige: [
        { name: "Jester-King", description: "A deceptive trickster who turns confusion, misdirection, and enemy mistakes into control." },
        { name: "Poison Harlequin", description: "A sinister performer who spreads toxins and turns every encounter into a deadly game." }
      ]},
      { name: "Saboteur", description: "A disruption specialist who uses explosives, traps, and sabotage to undermine enemy plans.", prestige: [
        { name: "Umbral Whisper", description: "A shadow specialist who infiltrates enemy lines and delivers nearly undetectable strikes." },
        { name: "Poison Harlequin", description: "A sinister performer who spreads toxins and turns every encounter into a deadly game." }
      ]}
    ]
  },
  {
    name: "Monk",
    description: "A disciplined martial artist who uses unarmed techniques, mobility, and controlled inner energy.",
    advanced: [
      { name: "Fist Sage", description: "A master of unarmed combat who channels focused energy through precise strikes.", prestige: [
        { name: "Lotus Flame", description: "An enlightened striker who combines graceful movement with explosive inner power." },
        { name: "Stone Veil", description: "An immovable martial defender who absorbs attacks and answers with measured counters." }
      ]},
      { name: "Ironwalker", description: "A durable martial combatant who advances steadily through danger and resists displacement.", prestige: [
        { name: "Stone Veil", description: "An immovable martial defender who absorbs attacks and answers with measured counters." },
        { name: "Zenblade", description: "A serene weapon master who unites perfect timing, fluid movement, and decisive strikes." }
      ]},
      { name: "Windstepper", description: "An agile martial artist who uses speed, evasive movement, and hit-and-run attacks.", prestige: [
        { name: "Lotus Flame", description: "An enlightened striker who combines graceful movement with explosive inner power." },
        { name: "Zenblade", description: "A serene weapon master who unites perfect timing, fluid movement, and decisive strikes." }
      ]}
    ]
  },
  {
    name: "Shaman",
    description: "A spirit medium who channels ancestral forces, elemental energies, and supernatural companions.",
    advanced: [
      { name: "Totemist", description: "A ritualist who invokes animal and ancestral spirits through empowering totems.", prestige: [
        { name: "Skydrum Prophet", description: "A storm-touched spiritual leader who channels thunder, wind, and prophetic rhythm." },
        { name: "Ancestor Vessel", description: "A living conduit for ancestral spirits who borrows their powers and collective wisdom." }
      ]},
      { name: "Spirit Caller", description: "A medium who summons spirits to aid allies, hinder enemies, and influence the battlefield.", prestige: [
        { name: "Ancestor Vessel", description: "A living conduit for ancestral spirits who borrows their powers and collective wisdom." },
        { name: "Wraithdrummer", description: "A spectral ritualist who directs restless spirits through haunting rhythms and deathly magic." }
      ]},
      { name: "Stormshaper", description: "An elemental mystic who manipulates weather and unleashes storm-powered attacks.", prestige: [
        { name: "Skydrum Prophet", description: "A storm-touched spiritual leader who channels thunder, wind, and prophetic rhythm." },
        { name: "Wraithdrummer", description: "A spectral ritualist who directs restless spirits through haunting rhythms and deathly magic." }
      ]}
    ]
  },
  {
    name: "Warden",
    description: "A defensive specialist who controls space, protects key positions, and prevents enemies from advancing.",
    advanced: [
      { name: "Ironwall", description: "A steadfast tank who blocks approaches and absorbs attacks meant for nearby allies.", prestige: [
        { name: "Palisade", description: "A living fortress who creates defensive lines and makes protected territory difficult to breach." },
        { name: "Soul Bastion", description: "A spiritual guardian who shields allies through endurance, sacrifice, and supernatural resolve." }
      ]},
      { name: "Battle Shepherd", description: "A protector who guides allies through danger and coordinates defensive formations.", prestige: [
        { name: "Palisade", description: "A living fortress who creates defensive lines and makes protected territory difficult to breach." },
        { name: "Sanctum Keeper", description: "A guardian who establishes safe zones where allies can recover and resist hostile effects." }
      ]},
      { name: "Gravemarcher", description: "A grim battlefield guardian who withstands attrition and holds ground against overwhelming pressure.", prestige: [
        { name: "Soul Bastion", description: "A spiritual guardian who shields allies through endurance, sacrifice, and supernatural resolve." },
        { name: "Sanctum Keeper", description: "A guardian who establishes safe zones where allies can recover and resist hostile effects." }
      ]}
    ]
  },
  {
    name: "Engineer",
    description: "A battlefield inventor who deploys devices, traps, turrets, and mechanical solutions to tactical problems.",
    advanced: [
      { name: "Machinist", description: "A builder of dependable machines who deploys mechanical allies and battlefield equipment.", prestige: [
        { name: "Forge Saint", description: "A master artisan whose extraordinary machines protect allies and reshape engagements." },
        { name: "Brass Juggernaut", description: "A mechanized combat specialist who combines heavy machinery with crushing offensive power." }
      ]},
      { name: "Saboteur", description: "A disruptive inventor who dismantles enemy equipment and uses traps to break formations.", prestige: [
        { name: "Clockcurse Tinker", description: "A temporal gadgeteer who creates unstable mechanisms that disrupt enemy actions and timing." },
        { name: "Brass Juggernaut", description: "A mechanized combat specialist who combines heavy machinery with crushing offensive power." }
      ]},
      { name: "Gearmancer", description: "A technomage who combines magical energy with intricate devices and enchanted mechanisms.", prestige: [
        { name: "Forge Saint", description: "A master artisan whose extraordinary machines protect allies and reshape engagements." },
        { name: "Clockcurse Tinker", description: "A temporal gadgeteer who creates unstable mechanisms that disrupt enemy actions and timing." }
      ]}
    ]
  },
  {
    name: "Necromancer",
    description: "A death mage who raises the fallen, manipulates souls, and weaponizes curses and fear.",
    advanced: [
      { name: "Bonecaller", description: "A skeletal summoner who builds an undead force and uses bone constructs to control the field.", prestige: [
        { name: "Crypt Marshall", description: "An undead commander who organizes legions of the dead into a disciplined fighting force." },
        { name: "Corpse Sovereign", description: "A ruler of the dead who commands powerful undead and turns fallen enemies into resources." }
      ]},
      { name: "Hauntweaver", description: "A spectral caster who manipulates ghosts, hauntings, and lingering spiritual afflictions.", prestige: [
        { name: "Soul Shepherd", description: "A guide of restless souls who redirects spirits toward protection, punishment, or release." },
        { name: "Corpse Sovereign", description: "A ruler of the dead who commands powerful undead and turns fallen enemies into resources." }
      ]},
      { name: "Tomb Herald", description: "A deathly herald who spreads dread, curses enemies, and marks the arrival of the grave.", prestige: [
        { name: "Crypt Marshall", description: "An undead commander who organizes legions of the dead into a disciplined fighting force." },
        { name: "Soul Shepherd", description: "A guide of restless souls who redirects spirits toward protection, punishment, or release." }
      ]}
    ]
  },
  {
    name: "Bard",
    description: "A musical support specialist who inspires allies, disrupts enemies, and shapes morale through performance.",
    advanced: [
      { name: "Virtuoso", description: "A technically brilliant performer whose music produces powerful and precise magical effects.", prestige: [
        { name: "Divine Aria", description: "A transcendent singer whose voice channels miraculous harmonies and restorative power." },
        { name: "Oath Singer", description: "A singer of binding vows whose songs strengthen loyalty and empower allies who keep their word." }
      ]},
      { name: "Balladeer", description: "A storyteller who turns legends, tales, and heroic deeds into battlefield inspiration.", prestige: [
        { name: "Oath Singer", description: "A singer of binding vows whose songs strengthen loyalty and empower allies who keep their word." },
        { name: "Ballad Echo", description: "A magical storyteller whose repeated refrains preserve and amplify the effects of earlier performances." }
      ]},
      { name: "Cantor", description: "A ceremonial vocalist who sustains chants that bolster allies and suppress hostile influences.", prestige: [
        { name: "Divine Aria", description: "A transcendent singer whose voice channels miraculous harmonies and restorative power." },
        { name: "Ballad Echo", description: "A magical storyteller whose repeated refrains preserve and amplify the effects of earlier performances." }
      ]}
    ]
  },
  {
    name: "Dancer",
    description: "A mobile performer who uses rhythm, movement, and precise footwork to enhance allies and evade attacks.",
    advanced: [
      { name: "Bladewaltzer", description: "A weapon dancer who blends graceful choreography with sweeping melee attacks.", prestige: [
        { name: "Rhythmblade", description: "A tempo-driven duelist whose strikes grow stronger through uninterrupted movement and rhythmic chains." },
        { name: "Carnival Wraith", description: "A haunting performer who uses spectacle, misdirection, and elusive movement to disorient enemies." }
      ]},
      { name: "Choreomancer", description: "A spell-dancer who turns choreographed movements into magical effects and team-wide benefits.", prestige: [
        { name: "Stepwitch", description: "An uncanny dance mage who bends positioning and reality through ritualized steps." },
        { name: "Rhythmblade", description: "A tempo-driven duelist whose strikes grow stronger through uninterrupted movement and rhythmic chains." }
      ]},
      { name: "Mirrorstep", description: "An evasive performer who uses reflections, feints, and misdirection to confuse attackers.", prestige: [
        { name: "Stepwitch", description: "An uncanny dance mage who bends positioning and reality through ritualized steps." },
        { name: "Carnival Wraith", description: "A haunting performer who uses spectacle, misdirection, and elusive movement to disorient enemies." }
      ]}
    ]
  },
  {
    name: "Diplomat",
    description: "A social tactician who influences morale, negotiates advantages, and manipulates faction relationships.",
    advanced: [
      { name: "Envoy", description: "A trusted representative who builds alliances and improves cooperation between allied units or factions.", prestige: [
        { name: "Kingmaker", description: "A power broker who determines who rises to leadership and turns political leverage into strategic advantage." },
        { name: "Voice of Accord", description: "A master negotiator whose words resolve conflicts and coordinate otherwise divided allies." }
      ]},
      { name: "Silver Tongue", description: "A persuasive manipulator who distracts, misleads, and undermines opponents through rhetoric.", prestige: [
        { name: "Voice of Accord", description: "A master negotiator whose words resolve conflicts and coordinate otherwise divided allies." },
        { name: "Mirror Accuser", description: "A psychological tactician who reflects an enemy's actions and rhetoric back against them." }
      ]},
      { name: "Herald", description: "A public voice who spreads messages, rallies allies, and shapes how groups interpret events.", prestige: [
        { name: "Kingmaker", description: "A power broker who determines who rises to leadership and turns political leverage into strategic advantage." },
        { name: "Mirror Accuser", description: "A psychological tactician who reflects an enemy's actions and rhetoric back against them." }
      ]}
    ]
  },
  {
    name: "Merchant",
    description: "An economic tactician who exploits trade, valuables, supplies, and battlefield resources.",
    advanced: [
      { name: "Smuggler", description: "A clandestine trader who moves contraband, bypasses restrictions, and obtains scarce supplies.", prestige: [
        { name: "Trade Tyrant", description: "An economic overlord who controls markets and turns resource scarcity into strategic dominance." },
        { name: "Vaultcaller", description: "A treasure specialist who locates hidden valuables and converts wealth into practical advantages." }
      ]},
      { name: "Marketlord", description: "A market strategist who manipulates prices, resources, and supply chains to benefit the party.", prestige: [
        { name: "Trade Tyrant", description: "An economic overlord who controls markets and turns resource scarcity into strategic dominance." },
        { name: "Gilded Broker", description: "A prestigious dealmaker who converts wealth, favors, and valuable connections into powerful opportunities." }
      ]},
      { name: "Appraiser", description: "An expert evaluator who identifies valuable items, hidden properties, and profitable opportunities.", prestige: [
        { name: "Gilded Broker", description: "A prestigious dealmaker who converts wealth, favors, and valuable connections into powerful opportunities." },
        { name: "Vaultcaller", description: "A treasure specialist who locates hidden valuables and converts wealth into practical advantages." }
      ]}
    ]
  },
  {
    name: "Commander",
    description: "A tactical leader who coordinates allies, improves initiative, and creates advantages through formation and orders.",
    advanced: [
      { name: "Warlord", description: "An aggressive battlefield leader who drives allied attacks and breaks enemy formations through force.", prestige: [
        { name: "Crownmarshal", description: "A supreme field commander whose authority unites armies and imposes disciplined battlefield control." },
        { name: "Banner Imperium", description: "A standard-bearer of conquest whose banners amplify allied morale and coordinated assaults." }
      ]},
      { name: "Tactician", description: "A calculating strategist who predicts enemy moves and creates opportunities through positioning and timing.", prestige: [
        { name: "Echo General", description: "A master strategist who anticipates opposing actions and orchestrates powerful sequences of allied maneuvers." },
        { name: "Banner Imperium", description: "A standard-bearer of conquest whose banners amplify allied morale and coordinated assaults." }
      ]},
      { name: "Strategeist", description: "A visionary planner who turns battlefield patterns and enemy behavior into tactical advantages.", prestige: [
        { name: "Echo General", description: "A master strategist who anticipates opposing actions and orchestrates powerful sequences of allied maneuvers." },
        { name: "Crownmarshal", description: "A supreme field commander whose authority unites armies and imposes disciplined battlefield control." }
      ]}
    ]
  },
  {
    name: "Librarian",
    description: "A keeper of knowledge who identifies threats, uncovers hidden information, and applies learned lore to combat.",
    advanced: [
      { name: "Archivist", description: "A meticulous researcher who records information and reveals weaknesses through careful analysis.", prestige: [
        { name: "Scriptweaver", description: "A magical scholar who turns written knowledge into active spells, bindings, and tactical effects." },
        { name: "Chronicle Revenant", description: "A spectral keeper of history who draws power from remembered events and forgotten lives." }
      ]},
      { name: "Codex Warden", description: "A guardian of dangerous texts who seals forbidden knowledge and protects allies from hostile secrets.", prestige: [
        { name: "Chronicle Revenant", description: "A spectral keeper of history who draws power from remembered events and forgotten lives." },
        { name: "Inkwarden", description: "A defender of written magic who creates protective sigils, suppresses hostile scripts, and binds threats." }
      ]},
      { name: "Lorebinder", description: "A scholar who connects stories, symbols, and forgotten truths to restrain enemies or empower allies.", prestige: [
        { name: "Scriptweaver", description: "A magical scholar who turns written knowledge into active spells, bindings, and tactical effects." },
        { name: "Inkwarden", description: "A defender of written magic who creates protective sigils, suppresses hostile scripts, and binds threats." }
      ]}
    ]
  },
  {
    name: "Quartermaster",
    description: "A logistics specialist who manages equipment, supplies, stamina, and battlefield readiness.",
    advanced: [
      { name: "Provisioner", description: "A supply expert who keeps allies equipped, fed, and ready for prolonged engagements.", prestige: [
        { name: "Siege Steward", description: "A master of military provisioning who sustains armies and prepares equipment for long sieges." },
        { name: "Ghost Quarter", description: "A covert logistics expert who moves supplies and equipment through routes enemies cannot easily detect." }
      ]},
      { name: "Logistician", description: "A planner who optimizes movement, resource distribution, and the timing of reinforcements.", prestige: [
        { name: "Caskwright", description: "An ingenious provisions maker who specializes in portable supplies, battlefield mixtures, and resource preservation." },
        { name: "Ghost Quarter", description: "A covert logistics expert who moves supplies and equipment through routes enemies cannot easily detect." }
      ]},
      { name: "Warchest Keeper", description: "A resource manager who safeguards funds and converts stored supplies into tactical opportunities.", prestige: [
        { name: "Siege Steward", description: "A master of military provisioning who sustains armies and prepares equipment for long sieges." },
        { name: "Caskwright", description: "An ingenious provisions maker who specializes in portable supplies, battlefield mixtures, and resource preservation." }
      ]}
    ]
  },
  {
    name: "Beastmaster",
    description: "An animal companion specialist who commands beasts, coordinates pack tactics, and shares power with creatures.",
    advanced: [
      { name: "Packleader", description: "A pack commander who coordinates multiple beasts to surround and overwhelm targets.", prestige: [
        { name: "Moonhowl Alpha", description: "A legendary pack leader whose howl rallies beasts and drives coordinated hunts." },
        { name: "Elder Wildspeaker", description: "An ancient animal speaker who communes with powerful wild creatures and commands their respect." }
      ]},
      { name: "Tamer", description: "A patient trainer who bonds with individual creatures and develops their specialized abilities.", prestige: [
        { name: "Moonhowl Alpha", description: "A legendary pack leader whose howl rallies beasts and drives coordinated hunts." },
        { name: "Chimeric Warden", description: "A guardian of extraordinary beasts who commands creatures with unusual or combined traits." }
      ]},
      { name: "Wyrdbinder", description: "A mystical beast binder who forges unusual bonds with magical and unpredictable creatures.", prestige: [
        { name: "Chimeric Warden", description: "A guardian of extraordinary beasts who commands creatures with unusual or combined traits." },
        { name: "Elder Wildspeaker", description: "An ancient animal speaker who communes with powerful wild creatures and commands their respect." }
      ]}
    ]
  },
  {
    name: "Cartographer",
    description: "A mapping specialist who reveals terrain, improves navigation, and creates advantages through spatial knowledge.",
    advanced: [
      { name: "Wayfinder", description: "A route-finding expert who discovers safe passages and helps allies navigate hostile territory.", prestige: [
        { name: "Wanderking", description: "A legendary explorer who traverses distant lands and guides companions through almost any terrain." },
        { name: "Mirage Cartomancer", description: "A magical mapmaker who manipulates perceived geography through illusions and enchanted charts." }
      ]},
      { name: "Trailblazer", description: "A pioneer who opens routes, overcomes obstacles, and makes difficult terrain easier to cross.", prestige: [
        { name: "Pathsculptor", description: "A terrain shaper who alters routes and battlefield geography to create strategic opportunities." },
        { name: "Wanderking", description: "A legendary explorer who traverses distant lands and guides companions through almost any terrain." }
      ]},
      { name: "Mapseer", description: "A spatial visionary who reads hidden connections and anticipates how terrain affects movement.", prestige: [
        { name: "Pathsculptor", description: "A terrain shaper who alters routes and battlefield geography to create strategic opportunities." },
        { name: "Mirage Cartomancer", description: "A magical mapmaker who manipulates perceived geography through illusions and enchanted charts." }
      ]}
    ]
  },
  {
    name: "Runesmith",
    description: "A magical artisan who inscribes runes to create wards, traps, enhancements, and triggered effects.",
    advanced: [
      { name: "Glyphcrafter", description: "A rune artisan who creates glyphs that trigger when enemies or allies meet specific conditions.", prestige: [
        { name: "Eidolon Binder", description: "A summoning rune master who binds supernatural entities into glyphs, objects, and protective marks." },
        { name: "Sealmourner", description: "A keeper of fading seals who manipulates ancient bindings, broken wards, and sealed-away powers." }
      ]},
      { name: "Sealbreaker", description: "A specialist in dismantling magical wards, dispelling bindings, and opening sealed pathways.", prestige: [
        { name: "Sealmourner", description: "A keeper of fading seals who manipulates ancient bindings, broken wards, and sealed-away powers." },
        { name: "Script Architect", description: "A master rune designer who constructs complex magical systems from interlocking inscriptions." }
      ]},
      { name: "Runecaller", description: "A rune mage who invokes inscribed symbols to unleash elemental and supernatural effects.", prestige: [
        { name: "Eidolon Binder", description: "A summoning rune master who binds supernatural entities into glyphs, objects, and protective marks." },
        { name: "Script Architect", description: "A master rune designer who constructs complex magical systems from interlocking inscriptions." }
      ]}
    ]
  },
  {
    name: "Tailor",
    description: "An enchanted clothing artisan who creates specialized garments, disguises, and wearable magical effects.",
    advanced: [
      { name: "Weaver", description: "A magical textile worker who weaves protective, enhancing, or binding effects into fabric.", prestige: [
        { name: "The Unraveler", description: "A master of unraveling enchantments who dismantles magical constructs and disrupts enemy effects." },
        { name: "Emblem Artisan", description: "An enchanted designer who creates symbols and garments that grant distinctive powers to their wearers." }
      ]},
      { name: "Costumer", description: "A disguise specialist who changes appearances and creates outfits suited to infiltration or performance.", prestige: [
        { name: "Masqueheart", description: "A master of enchanted masks who alters identity, persona, and the way others perceive the wearer." },
        { name: "Emblem Artisan", description: "An enchanted designer who creates symbols and garments that grant distinctive powers to their wearers." }
      ]},
      { name: "Threadbinder", description: "A textile mage who manipulates threads to bind targets, repair equipment, or influence movement.", prestige: [
        { name: "Masqueheart", description: "A master of enchanted masks who alters identity, persona, and the way others perceive the wearer." },
        { name: "The Unraveler", description: "A master of unraveling enchantments who dismantles magical constructs and disrupts enemy effects." }
      ]}
    ]
  },
  {
    name: "Navigator",
    description: "A traversal expert who guides units through dangerous routes, unusual environments, and spatial hazards.",
    advanced: [
      { name: "Sailmaster", description: "A master of seafaring who reads currents, manages vessels, and navigates hazardous waters.", prestige: [
        { name: "Stormpath Herald", description: "A storm navigator who finds passages through violent weather and harnesses its momentum." },
        { name: "Driftblade", description: "A mobile raider who combines expert navigation with swift attacks and evasive repositioning." }
      ]},
      { name: "Skytracker", description: "An aerial route specialist who follows wind currents and navigates elevated or airborne terrain.", prestige: [
        { name: "Worldpiercer", description: "A boundary-crossing navigator who finds routes through distant, sealed, or otherwise inaccessible places." },
        { name: "Driftblade", description: "A mobile raider who combines expert navigation with swift attacks and evasive repositioning." }
      ]},
      { name: "Leywalker", description: "A mystical navigator who follows magical currents and travels along hidden paths of power.", prestige: [
        { name: "Stormpath Herald", description: "A storm navigator who finds passages through violent weather and harnesses its momentum." },
        { name: "Worldpiercer", description: "A boundary-crossing navigator who finds routes through distant, sealed, or otherwise inaccessible places." }
      ]}
    ]
  }
];

// New base classes: descriptions are defined, but their
// advanced and prestige trees remain to be designed.
const newBaseClasses = [
  { name: "Samurai", description: "A disciplined duelist who uses precise strikes, measured stances, and honorable combat." },
  { name: "Ninja", description: "A covert infiltrator who specializes in ambushes, concealment, misdirection, and rapid escapes." },
  { name: "Gunslinger", description: "A ranged specialist who uses firearms, trick shots, quick draws, and careful positioning." },
  { name: "Pirate", description: "A daring raider who excels at boarding attacks, disarming foes, and breaking enemy morale." },
  { name: "Herbalist", description: "A natural remedy expert who brews healing preparations, antidotes, stimulants, and poisons." },
  { name: "Oracle", description: "A prophetic seer who anticipates danger, reveals hidden truths, and guides allies with visions." },
  { name: "Chaplain", description: "A battlefield spiritual leader who bolsters morale, comforts the wounded, and resists fear." },
  { name: "Soothsayer", description: "A diviner who reads omens and alters luck, foretelling outcomes or disrupting enemy plans." },
  { name: "Caretaker", description: "A compassionate support specialist who stabilizes the wounded and protects vulnerable allies and creatures." },
  { name: "Witch", description: "A practitioner of charms, curses, familiars, and uncanny folk magic." },
  { name: "Chanter", description: "A sustained-aura specialist whose repeated chants provide continuing benefits to nearby allies." },
  { name: "Archivist", description: "A record keeper who analyzes enemy behavior, documents battlefield events, and exposes weaknesses." },
  { name: "Mechanist", description: "A mechanical specialist who builds, repairs, and modifies devices to solve tactical problems." },
  { name: "Folk Companion", description: "An extraordinary talking animal or folklore companion who offers unique support and story-driven abilities." },
  { name: "Chronicler", description: "A keeper of stories who turns remembered deeds, recorded events, and legends into allied inspiration." },
  { name: "Courier", description: "A swift messenger who transfers items, relays orders, and connects distant allies across the battlefield." },
  { name: "Scrapper", description: "A resourceful scavenger who salvages wreckage and battlefield debris to improvise useful equipment." }
];

// Combine the trees without duplicating base-class names.
// Original class trees and all their descriptions are preserved.
const existingNames = new Set(
  classData.map(c => c.name.toLowerCase())
);

const mergedClassData = [
  ...classData,
  ...newBaseClasses
    .filter(c => !existingNames.has(c.name.toLowerCase()))
    .map(c => ({
      ...c,
      advanced: []
    }))
];

console.log("Total base classes:", mergedClassData.length);
