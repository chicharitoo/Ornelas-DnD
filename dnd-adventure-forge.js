// ══════════════════════════════════════════════════════════════
// CAMPAIGN FORMATS
// ══════════════════════════════════════════════════════════════
const CAMPAIGNS = [
  { id: 'oneshot', icon: '⚡', label: 'One-Shot', sub: '1 session', pcs: 4, npcs: 2, villains: 1, sidequests: 1, encounters: 2, twists: 1, rewards: 1 },
  { id: 'short', icon: '📜', label: 'Short Arc', sub: '3–5 sessions', pcs: 4, npcs: 3, villains: 1, sidequests: 2, encounters: 3, twists: 2, rewards: 2 },
  { id: 'medium', icon: '📖', label: 'Mid Campaign', sub: '8–12 sessions', pcs: 5, npcs: 4, villains: 2, sidequests: 3, encounters: 4, twists: 3, rewards: 3 },
  { id: 'long', icon: '📚', label: 'Full Campaign', sub: '20+ sessions', pcs: 6, npcs: 6, villains: 2, sidequests: 5, encounters: 6, twists: 4, rewards: 4 },
  { id: 'epic', icon: '🏰', label: 'Epic Saga', sub: '50+ sessions', pcs: 6, npcs: 8, villains: 3, sidequests: 8, encounters: 8, twists: 6, rewards: 6 },
];

// ══════════════════════════════════════════════════════════════
// CHARACTER ATTRIBUTE POOLS
// ══════════════════════════════════════════════════════════════
const RACES = [
  'Human', 'Half-Elf', 'High Elf', 'Wood Elf', 'Drow', 'Dwarf', 'Hill Dwarf', 'Gnome', 'Halfling',
  'Dragonborn (Red)', 'Dragonborn (Gold)', 'Tiefling', 'Aasimar', 'Half-Orc', 'Genasi (Fire)',
  'Genasi (Water)', 'Tabaxi', 'Kenku', 'Triton', 'Firbolg', 'Goliath', 'Yuan-ti Pureblood'
];
const CLASSES = [
  'Fighter (Battle Master)', 'Fighter (Champion)', 'Barbarian (Berserker)', 'Barbarian (Totem Warrior)',
  'Paladin (Devotion)', 'Paladin (Vengeance)', 'Ranger (Gloom Stalker)', 'Ranger (Beast Master)',
  'Rogue (Arcane Trickster)', 'Rogue (Assassin)', 'Monk (Way of Shadow)', 'Monk (Open Hand)',
  'Wizard (Divination)', 'Wizard (Conjuration)', 'Sorcerer (Wild Magic)', 'Sorcerer (Draconic)',
  'Warlock (Great Old One)', 'Warlock (Fiend)', 'Cleric (Life)', 'Cleric (War)', 'Cleric (Trickery)',
  'Druid (Moon)', 'Druid (Spores)', 'Bard (Glamour)', 'Bard (Lore)', 'Blood Hunter (Ghostslayer)',
  'Artificer (Artillerist)', 'Artificer (Battle Smith)',
];
const BACKGROUNDS = [
  'Acolyte', 'Criminal', 'Folk Hero', 'Noble', 'Outlander', 'Sage', 'Soldier', 'Charlatan',
  'Entertainer', 'Hermit', 'Sailor', 'Urchin', 'Haunted One', 'Knight of the Order',
  'Far Traveler', 'Investigator', 'City Watch', 'Clan Crafter', 'Feylost', 'Witchlight Hand',
];
const ALIGNMENTS = [
  'Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral',
  'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil',
];
const PC_TRAITS = [
  'Quotes obscure religious texts at inappropriate moments',
  'Keeps a meticulous journal of every dungeon entered',
  'Deeply suspicious of magic but uses it anyway',
  'Collects a trophy from every enemy defeated',
  'Cannot pass a locked door without trying to pick it',
  'Speaks to their weapon as if it were alive',
  'Gambles on absolutely everything',
  'Has a paralyzing fear of undead despite being a fighter',
  'Gives every significant NPC a nickname',
  'Refuses to leave until every room is explored',
  'Excessively dramatic, narrates their own actions',
  'Keeps secrets even from the party, for their own good',
  'Compulsively tidies and organizes camp each night',
  'Obsessed with learning the true name of every creature',
  'Makes a point of learning a phrase in every language encountered',
];
const PC_FLAWS = [
  'Believes any problem can be solved with fire',
  'Immediately hostile to anyone who outranks them',
  'Will not retreat — ever — regardless of odds',
  'Greedy: takes a cut of everything, always',
  'Hates a particular race with irrational intensity',
  'Compulsively lies, even when truth would be easier',
  'Haunted by a past failure they haven\'t told the party about',
  'Addicted to a substance or magical sensation',
  'Convinced they are destined for greatness, acts accordingly',
  'Disrespects authority — especially helpful authority',
  'Cannot resist showing off in front of crowds',
  'Prone to sudden, unpredictable acts of mercy',
];
const PC_BONDS = [
  'Searching for a sibling sold into slavery years ago',
  'Owes a life-debt to a stranger they\'ve never met',
  'Was once framed for a murder they didn\'t commit',
  'Carries the ashes of their destroyed hometown',
  'Vowed to destroy the cult that killed their order',
  'Adopted by a dragon as a hatchling — and doesn\'t know why',
  'Has a prophecy tattooed on their back in a language they cannot read',
  'The last surviving member of a secret organization',
  'In love with someone who works for the enemy',
  'Protecting a magical artifact they don\'t understand',
];
const STAT_SPREAD = () => {
  const stats = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
  const vals = [8, 10, 12, 13, 14, 15].sort(() => Math.random() - 0.5);
  return stats.map((s, i) => ({ s, v: vals[i] }));
};

// ══════════════════════════════════════════════════════════════
// DECKS
// ══════════════════════════════════════════════════════════════
const DECKS = {
  realm: {
    label: 'Realm', icon: '🌍', color: '#1a5a3d', bg: 'linear-gradient(135deg,#081a10,#0f2d1a)', textColor: '#7addb0',
    cards: [
      { t: 'The Shattered Isles\nA volcanic archipelago where tides run backwards', i: '🏝️' },
      { t: 'Umbral Hollows\nA sunless underworld kingdom lit by bioluminescent fungi', i: '🌑' },
      { t: 'The Ashen Wastes\nPost-apocalyptic plains ruled by undead warlords', i: '💀' },
      { t: 'Celestara\nA floating city-state above the clouds, neutral in all wars', i: '☁️' },
      { t: 'The Thornwood\nAn ancient forest that rearranges itself to trap intruders', i: '🌲' },
      { t: 'Ironspire Dominion\nA militaristic empire where every citizen owes 10 years service', i: '⚔️' },
      { t: 'The Drowned Coast\nA swampy delta ruled by pirate councils and sea witch covens', i: '🌊' },
      { t: 'The Frostreach\nFrozen tundra where ancient giants sleep beneath glaciers', i: '❄️' },
      { t: 'Khalbarath\nA desert kingdom built inside the bones of a dead god', i: '🏜️' },
      { t: 'The Mirrormarshes\nA wetland where reflections show alternate futures', i: '🪞' },
      { t: 'Verdant Spire\nA living megastructure grown by a now-extinct druid circle', i: '🌿' },
      { t: 'The Pale Court\nA fey realm where emotions have physical weight', i: '🌸' },
      { t: 'Cinderhold\nAn active volcano city powered by trapped fire elementals', i: '🌋' },
      { t: 'The Obsidian Reaches\nA plane of endless night patrolled by shadow dragons', i: '🐉' },
    ]
  },
  settlement: {
    label: 'Settlement', icon: '🏘️', color: '#7b4f1a', bg: 'linear-gradient(135deg,#2a1a08,#3d2a0f)', textColor: '#e8c87a',
    cards: [
      { t: 'A crossroads tavern that exists in four planes simultaneously', i: '🍺' },
      { t: 'A walled city under perpetual siege — nobody knows who is attacking', i: '🏯' },
      { t: 'An underground market city carved into a dead purple worm', i: '🪱' },
      { t: 'A village that moves on mechanical legs across the plains', i: '⚙️' },
      { t: 'A monastery perched on an unreachable cliff — reached only by ritual', i: '⛰️' },
      { t: 'A thieves\' guild headquarters disguised as an orphanage', i: '🏠' },
      { t: 'A necromancer\'s tower that is also a functioning lighthouse', i: '🗼' },
      { t: 'A goblin city built entirely inside an enchanted shipwreck', i: '⛵' },
      { t: 'A druid commune hidden inside a hollow ancient tree', i: '🌳' },
      { t: 'A dwarven forge-city where the mines haven\'t been opened in 60 years', i: '⚒️' },
      { t: 'A planar waystation frequented by extraplanar merchants', i: '🌀' },
      { t: 'A cursed city where everyone wears masks — the curse prevents removal', i: '🎭' },
      { t: 'An elven archive city where silence is enforced by magical law', i: '📚' },
      { t: 'A fishing village built over a kraken that is very much still alive', i: '🦑' },
    ]
  },
  mainquest: {
    label: 'Main Quest', icon: '🗺️', color: '#8b1a1a', bg: 'linear-gradient(135deg,#1a0808,#2a1010)', textColor: '#e87a7a',
    cards: [
      { t: 'Stop the ritual that will merge the material plane with the Nine Hells', i: '😈' },
      { t: 'Recover three shards of a divine weapon before a rival faction does', i: '⚔️' },
      { t: 'Prevent a sleeping elder god from being awakened by its cult', i: '👁️' },
      { t: 'Uncover who assassinated the king — before the wrong person is executed', i: '👑' },
      { t: 'Close a spreading planar rift before it consumes an entire nation', i: '🌀' },
      { t: 'Escort the last heir to the throne through territory that wants them dead', i: '🛡️' },
      { t: 'Break the curse on an entire kingdom before the next new moon', i: '🌑' },
      { t: 'Steal the Book of True Names from a lich\'s personal library', i: '📖' },
      { t: 'Navigate the politics of four factions to prevent a continent-wide war', i: '⚖️' },
      { t: 'Survive long enough to deliver a message that changes history', i: '✉️' },
      { t: 'Destroy an artifact before its wielder destroys a civilization', i: '🏺' },
      { t: 'Rescue a god imprisoned in mortal form without letting them die', i: '✨' },
      { t: 'Find and seal the source of a plague that kills only the good-aligned', i: '💀' },
      { t: 'Reclaim a fallen fortress that stands between two warring planes', i: '🏰' },
    ]
  },
  sidequest: {
    label: 'Side Quest', icon: '📌', color: '#c94a1a', bg: 'linear-gradient(135deg,#1a0d08,#2a1508)', textColor: '#f0a07a',
    cards: [
      { t: 'A farmer\'s scarecrow has started walking at night — and it\'s killing things', i: '🌾' },
      { t: 'Retrieve a wedding ring from a dungeon — the groom went in a week ago', i: '💍' },
      { t: 'A child claims their imaginary friend has started giving real prophecies', i: '🧒' },
      { t: 'The town clock tower chimes thirteen at midnight — investigate why', i: '🕰️' },
      { t: 'A painting in the inn\'s common room changes every night', i: '🖼️' },
      { t: 'Deliver a sealed letter — three different people will try to steal it', i: '📬' },
      { t: 'The local apothecary has gone missing, their shop rearranges itself', i: '⚗️' },
      { t: 'An NPC hires the party to protect them from their own future self', i: '⏳' },
      { t: 'A ghost won\'t leave the inn until someone reads their unfinished manuscript', i: '👻' },
      { t: 'Retrieve an heirloom from a ruin — but the ruin is someone\'s home now', i: '🏚️' },
      { t: 'Settle a dispute between two werewolf packs before the full moon', i: '🐺' },
      { t: 'A bard is being sued for defamation by the villain they sang about', i: '🎶' },
      { t: 'Infiltrate a secret society — turns out the party is already members', i: '🎭' },
      { t: 'Protect a gnome inventor\'s first successful flight — everyone wants it grounded', i: '✈️' },
    ]
  },
  dungeon: {
    label: 'Dungeon', icon: '⛏️', color: '#3060a8', bg: 'linear-gradient(135deg,#080f1a,#101828)', textColor: '#80b0e8',
    cards: [
      { t: 'A living dungeon that reshuffles its rooms every 6 hours', i: '🔀' },
      { t: 'An undead wizard\'s tower, still running its creator\'s original experiments', i: '🧪' },
      { t: 'An aboleth\'s sunken temple, half-flooded, full of dominated thralls', i: '🌊' },
      { t: 'A githyanki crèche floating on an astral sea, guarded by mind flayers', i: '🧠' },
      { t: 'The digestive tract of a planet-sized living creature', i: '🦠' },
      { t: 'A demiplane pocket prison for entities too dangerous to kill', i: '🔒' },
      { t: 'An ancient vault where each lock requires a moral sacrifice to open', i: '⚖️' },
      { t: 'A dungeon that exists only in the dreams of a sleeping tarrasque', i: '💤' },
      { t: 'A maze built by a sphinx — the answers are the players, not riddles', i: '🦁' },
      { t: 'The ruins of a gnomish mega-machine still partially operational', i: '⚙️' },
      { t: 'A dungeon that mimics another dungeon the party hasn\'t been to yet', i: '🪞' },
      { t: 'A tomb where the undead guards believe the dungeon is a living shrine', i: '💀' },
      { t: 'A planar crossroads dungeon that leads to six different planes', i: '🌀' },
      { t: 'An elven observatory-dungeon charting the positions of dead stars', i: '🌟' },
    ]
  },
  villain: {
    label: 'Villain', icon: '💀', color: '#5a1878', bg: 'linear-gradient(135deg,#14081a,#200f2a)', textColor: '#c080e0',
    cards: [
      { t: 'A lich who was once the party\'s most beloved quest-giver', i: '💀' },
      { t: 'A paladin of a lawful good god doing truly monstrous things for the right reasons', i: '⚖️' },
      { t: 'A dragon who collects only living people — and keeps them perfectly safe', i: '🐉' },
      { t: 'A revolutionary whose cause is righteous but whose methods are atrocities', i: '✊' },
      { t: 'A god of mercy who decided mortals must be freed from suffering — permanently', i: '✨' },
      { t: 'The party\'s patron, revealed to have orchestrated everything from session one', i: '🎭' },
      { t: 'A shapeshifter who has replaced key NPCs throughout the campaign', i: '🔄' },
      { t: 'A child prodigy archmage who hasn\'t learned consequences yet', i: '🧒' },
      { t: 'A time traveler preventing the party from causing a future catastrophe', i: '⏳' },
      { t: 'The last surviving member of a civilization the world wrongly destroyed', i: '😔' },
      { t: 'A mind flayer colony that achieved enlightenment — and found it wanting', i: '🧠' },
      { t: 'A war hero who won by making a deal the world must now pay for', i: '💰' },
      { t: 'A bard who has been writing the party\'s story from the start', i: '🪕' },
      { t: 'An ancient construct built to protect the world from itself', i: '🤖' },
    ]
  },
  npc: {
    label: 'Key NPC', icon: '🧙', color: '#208060', bg: 'linear-gradient(135deg,#081a12,#0f2a1a)', textColor: '#70d0a0',
    cards: [
      { t: 'A retired adventurer running a tavern who knows far more than they say', i: '🍺' },
      { t: 'A spy pretending to be a helpless prisoner', i: '🔍' },
      { t: 'A child oracle who only speaks in rhyme', i: '🧒' },
      { t: 'A merchant who\'s been dead for a week but hasn\'t noticed', i: '👻' },
      { t: 'A disgraced noble who is secretly funding the resistance', i: '👑' },
      { t: 'A healer who charges in secrets, not gold', i: '💊' },
      { t: 'An ancient dragon in human form, bored and meddling', i: '🐉' },
      { t: 'A celestial being on a mortal sabbatical who has forgotten what they are', i: '😇' },
      { t: 'The villain\'s estranged child who wants to stop them', i: '😢' },
      { t: 'A rival adventuring party that keeps arriving just after the party leaves', i: '⚔️' },
      { t: 'A scholar who knows the answer to everything except what they need most', i: '📚' },
      { t: 'A reformed cultist who can\'t quite leave their old habits behind', i: '🌀' },
      { t: 'The last guardian of a dead god\'s tomb, still loyal after 1,000 years', i: '🛡️' },
      { t: 'A talking weapon with a stronger personality than its wielder', i: '🗡️' },
    ]
  },
  complication: {
    label: 'Complication', icon: '⚠️', color: '#b8860b', bg: 'linear-gradient(135deg,#1a1508,#2a1f08)', textColor: '#e8d07a',
    cards: [
      { t: 'One party member has been charmed — they don\'t know it yet', i: '💜' },
      { t: 'The macguffin turns out to be a living creature that doesn\'t want to be retrieved', i: '🐣' },
      { t: 'The patron is also the villain\'s patron — and plays both sides deliberately', i: '🎭' },
      { t: 'A natural disaster strikes mid-dungeon', i: '⚡' },
      { t: 'A party member\'s past comes back — literally, in the form of a bounty hunter', i: '🏹' },
      { t: 'The map is 200 years out of date — the dungeon has changed considerably', i: '🗺️' },
      { t: 'The reward was counterfeit — someone doesn\'t want them compensated', i: '💰' },
      { t: 'They\'ve been solving the wrong mystery the entire time', i: '🔍' },
      { t: 'The village that hired them no longer exists when they return', i: '💨' },
      { t: 'An ancient pact obligates the party to help the very enemy they were fighting', i: '📜' },
      { t: 'One of the party\'s allies is prophesied to betray them before quest\'s end', i: '🗡️' },
      { t: 'The artifact they need can only be used at the cost of a party member\'s power', i: '⚗️' },
      { t: 'A faction the party wronged in session 1 resurfaces with a grudge', i: '😤' },
      { t: 'The dungeon\'s main prize has already been taken — just recently', i: '📦' },
    ]
  },
  reward: {
    label: 'Reward', icon: '💎', color: '#1a4a5a', bg: 'linear-gradient(135deg,#08121a,#0f2030)', textColor: '#7ac8e0',
    cards: [
      { t: 'A sentient weapon that refuses to be wielded by the wrong person', i: '⚔️' },
      { t: 'A deed to a stronghold in hostile territory', i: '🏰' },
      { t: 'The true name of a powerful extraplanar being', i: '📜' },
      { t: 'A ring that reveals the wearer\'s deepest fear to all who look at them', i: '💍' },
      { t: 'A portal stone that opens to any place the user has wept', i: '🪨' },
      { t: 'A cloak woven from the feathers of a dying phoenix', i: '🔥' },
      { t: 'A map to something everyone thought was a myth', i: '🗺️' },
      { t: 'A bottle containing the last breath of a dead god', i: '🫙' },
      { t: 'The gratitude of a dragon — expressed as a favour to be named later', i: '🐉' },
      { t: 'An amulet that records everything the wearer sees', i: '👁️' },
      { t: 'A spellbook belonging to the most notorious archmage in history', i: '📖' },
      { t: 'Immunity from prosecution — from every government in the known world', i: '📜' },
      { t: 'A silver key that opens any lock, but only once per lock', i: '🗝️' },
      { t: 'A pouch that always contains exactly what the party needs — but nothing else', i: '👜' },
    ]
  },
  twist: {
    label: 'Campaign Twist', icon: '🌀', color: '#1a1a6b', bg: 'linear-gradient(135deg,#08081a,#10102a)', textColor: '#8888e8',
    cards: [
      { t: 'The quest giver was the villain\'s spy all along', i: '🎭' },
      { t: 'The party is trapped in a prophetic loop they triggered in session one', i: '🔄' },
      { t: 'The dungeon they just cleared belonged to the world\'s last line of defence', i: '💀' },
      { t: 'Two party members are actually the same person from different timelines', i: '⏳' },
      { t: 'The entire campaign has been a divine test — and one PC just failed it', i: '😇' },
      { t: 'The big bad has already won — everything since was a distraction', i: '💀' },
      { t: 'A long-dead NPC has been sending messages through found objects for 10 sessions', i: '📬' },
      { t: 'The realm they\'ve been protecting chose to end itself', i: '🌍' },
      { t: 'The artefact is sentient and has been manipulating the entire party', i: '🏺' },
      { t: 'The villain and the patron are the same entity playing both roles', i: '😈' },
      { t: 'The party are the descendants of the adventurers who created the original problem', i: '🩸' },
      { t: 'The prophesied hero is the villain — and always was', i: '👑' },
      { t: 'One party member has been replaced by a doppelganger since session 3', i: '🔄' },
      { t: 'The gods are dead — the divine power the cleric uses belongs to something else', i: '⛪' },
    ]
  },
  encounter: {
    label: 'Encounter', icon: '⚔️', color: '#6b1a3d', bg: 'linear-gradient(135deg,#1a0810,#2a0f1f)', textColor: '#e070a8',
    cards: [
      { t: 'Three factions arrive simultaneously and are all hostile to each other', i: '⚔️' },
      { t: 'A combat encounter where killing the enemy kills one of the party', i: '💀' },
      { t: 'The villain offers the party a better deal than their patron', i: '😈' },
      { t: 'A negotiation with a creature that communicates only through telepathic visions', i: '🧠' },
      { t: 'Every round, an environmental hazard switches which side it is helping', i: '🌪️' },
      { t: 'The enemy asks the party for help mid-battle — against something worse', i: '😱' },
      { t: 'A trial before an extraplanar court where the party are the defendants', i: '⚖️' },
      { t: 'A chase through a city where the map keeps changing', i: '🏃' },
      { t: 'A puzzle combat where damaging enemies makes them stronger', i: '🔒' },
      { t: 'An encounter that can only be won by retreating', i: '🏳️' },
      { t: 'Combat inside a dream — but deaths here are real', i: '💤' },
      { t: 'An escort mission where the escortee is actively trying to die', i: '😤' },
      { t: 'Stealth mission through a banquet attended by the entire antagonist faction', i: '🎉' },
      { t: 'Final boss encounter reveals: the party caused this. Directly.', i: '😨' },
    ]
  },
  lore: {
    label: 'Lore Hook', icon: '📖', color: '#205878', bg: 'linear-gradient(135deg,#08101a,#0f1f30)', textColor: '#70a8d0',
    cards: [
      { t: 'The gods are not divine — they are the survivors of a previous civilization', i: '⛪' },
      { t: 'Magic is the leaking energy of a dying plane overlapping this one', i: '✨' },
      { t: 'The current calendar begins at Year 0 — nobody knows what Year 0 was', i: '📅' },
      { t: 'All humanoid races are modifications of a single original species', i: '🧬' },
      { t: 'The world\'s most powerful nation was built on the systematic murder of dragons', i: '🐉' },
      { t: 'Prophecy is a virus — knowing it causes the events it describes', i: '📜' },
      { t: 'The undead were the original inhabitants; the living are the invaders', i: '💀' },
      { t: 'The nine planes of existence are the thoughts of a still-living entity', i: '🌌' },
      { t: 'Every map is wrong — someone rewrites geography to hide a location', i: '🗺️' },
      { t: 'The common tongue was invented by someone who wanted to be understood by everyone — for a reason', i: '💬' },
      { t: 'Death is not the end — it is a different realm with its own politics', i: '☠️' },
      { t: 'The world\'s greatest hero was erased from history — by the world\'s greatest villain', i: '📚' },
      { t: 'Music is the most powerful magic — bards are the most dangerous people alive', i: '🎵' },
      { t: 'The dungeon delving tradition started because someone needed to hide something enormous', i: '⛏️' },
    ]
  },
};

const DECK_KEYS = Object.keys(DECKS);

// ══════════════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════════════
let activeTab = 'realm';
let flippedCards = {};
let adventureSpread = null;
let selectedCamp = 'short';
let pcCount = 4;
let npcCount = 3;
let sideqCount = 2;

// ══════════════════════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════════════════════
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pickN(arr, n) { return shuffle(arr).slice(0, Math.min(n, arr.length)); }
function rollStat() { return [1, 2, 3, 4].map(() => Math.ceil(Math.random() * 6)).sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b, 0); }

function buildPC() {
  return {
    race: pick(RACES),
    cls: pick(CLASSES),
    background: pick(BACKGROUNDS),
    alignment: pick(ALIGNMENTS),
    trait: pick(PC_TRAITS),
    flaw: pick(PC_FLAWS),
    bond: pick(PC_BONDS),
    stats: STAT_SPREAD(),
  };
}

function buildNPC() {
  const d = DECKS.npc;
  return {
    archetype: pick(d.cards),
    race: pick(RACES),
    alignment: pick(ALIGNMENTS),
    trait: pick(PC_TRAITS),
    secret: pick(PC_FLAWS),
  };
}

// ══════════════════════════════════════════════════════════════
// RENDER: FLIPABLE CARD
// ══════════════════════════════════════════════════════════════
function cardHTML(key, card, idx) {
  const d = DECKS[key], id = `${key}-${idx}`, fl = !!flippedCards[id];
  return `<button class="story-card ${fl ? 'flipped' : ''}" data-id="${id}" onclick="toggleCard('${id}')" aria-pressed="${fl ? 'true' : 'false'}">
    <div class="card-inner">
      <div class="card-face card-back" style="border-color:${d.color}44">
        <div class="card-back-inner">${d.icon}</div>
      </div>
      <div class="card-face card-front" style="background:${d.bg};border-color:${d.color}88;color:${d.textColor}">
        <div class="card-cat" style="color:${d.color}">${d.label}</div>
        <div class="card-icon" aria-hidden="true">${card.i}</div>
        <div class="card-text">${card.t}</div>
        <div class="card-num">${d.label} #${idx + 1}</div>
      </div>
    </div>
  </button>`;
}

// ══════════════════════════════════════════════════════════════
// RENDER: PLAIN SPREAD CARD
// ══════════════════════════════════════════════════════════════
function plainSpread(key, card, delay = 0) {
  const d = DECKS[key];
  return `<div class="spread-plain" style="background:${d.bg};border-color:${d.color}77;color:${d.textColor};animation-delay:${delay}s">
    <div class="sp-cat" style="color:${d.color}">${d.label}</div>
    <div class="sp-icon">${card.i}</div>
    <div class="sp-text">${card.t}</div>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
// RENDER: PC CARD
// ══════════════════════════════════════════════════════════════
function pcCard(pc, idx, delay = 0) {
  const d = DECKS.mainquest; // just for color ref — use custom
  const col = '#c8a020', tc = '#e8c87a', bg = 'linear-gradient(135deg,#1a1408,#2a200a)';
  const statsHTML = pc.stats.map(s => `<div class="stat-cell">
    <div class="stat-name" style="color:${col}">${s.s}</div>
    <div class="stat-val" style="color:${tc}">${s.v}</div>
  </div>`).join('');
  return `<div class="char-forge-card" style="border-color:${col}55;animation-delay:${delay}s">
    <div class="char-forge-header" style="background:${bg};color:${tc};border-color:${col}33">
      🎲 Player Character ${idx + 1}
    </div>
    <div class="char-attrs">
      <div class="char-row"><span class="char-lbl" style="color:${col}">Race</span><span class="char-val" style="color:${tc}">${pc.race}</span></div>
      <div class="char-row"><span class="char-lbl" style="color:${col}">Class</span><span class="char-val" style="color:${tc}">${pc.cls}</span></div>
      <div class="char-row"><span class="char-lbl" style="color:${col}">Background</span><span class="char-val dim">${pc.background}</span></div>
      <div class="char-row"><span class="char-lbl" style="color:${col}">Alignment</span><span class="char-val dim">${pc.alignment}</span></div>
      <div class="char-row"><span class="char-lbl" style="color:${col}">Trait</span><span class="char-val dim">${pc.trait}</span></div>
      <div class="char-row"><span class="char-lbl" style="color:${col}">Flaw</span><span class="char-val dim">${pc.flaw}</span></div>
      <div class="char-row"><span class="char-lbl" style="color:${col}">Bond</span><span class="char-val dim">${pc.bond}</span></div>
    </div>
    <div class="stat-block">${statsHTML}</div>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
// RENDER: NPC CARD
// ══════════════════════════════════════════════════════════════
function npcCard(npc, idx, delay = 0) {
  const d = DECKS.npc, col = d.color, tc = d.textColor, bg = d.bg;
  return `<div class="char-forge-card" style="border-color:${col}55;animation-delay:${delay}s">
    <div class="char-forge-header" style="background:${bg};color:${tc};border-color:${col}33">
      🧙 Key NPC ${idx + 1}
    </div>
    <div class="char-attrs">
      <div class="char-row"><span class="char-lbl" style="color:${col}">Archetype</span><span class="char-val" style="color:${tc}">${npc.archetype.i} ${npc.archetype.t}</span></div>
      <div class="char-row"><span class="char-lbl" style="color:${col}">Race</span><span class="char-val dim">${npc.race}</span></div>
      <div class="char-row"><span class="char-lbl" style="color:${col}">Alignment</span><span class="char-val dim">${npc.alignment}</span></div>
      <div class="char-row"><span class="char-lbl" style="color:${col}">Manner</span><span class="char-val dim">${npc.trait}</span></div>
      <div class="char-row"><span class="char-lbl" style="color:${col}">Secret</span><span class="char-val dim">${npc.secret}</span></div>
    </div>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
// RENDER: DECK PANEL
// ══════════════════════════════════════════════════════════════
function renderDeckPanel(key) {
  const d = DECKS[key];
  const shuffledCards = shuffle(d.cards);
  return `<div class="deck-panel ${key === activeTab ? 'active' : ''}" id="panel-${key}">
    <div class="panel-inner" style="background:${d.bg}55;border-color:${d.color}33">
      <div class="panel-header">
        <div>
          <div class="panel-title" style="color:${d.textColor}"><div class="stack-deck-icon" aria-hidden="true" style="color:${d.textColor}">${d.icon}</div> ${d.label} Cards</div>
          <div class="deck-count">${d.cards.length} cards · shuffled every view</div>
        </div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
          <button class="btn-panel" style="border-color:${d.color};color:${d.textColor}" onclick="flipAll('${key}')">Reveal All</button>
          <button class="btn-panel" style="border-color:${d.color};color:${d.textColor}" onclick="hideAll('${key}')">Hide All</button>
        </div>
      </div>
      <div class="cards-grid">${shuffledCards.map((c, i) => cardHTML(key, c, i)).join('')}</div>
      <div class="draw-section">
        <div class="draw-title" style="color:${d.textColor}">⚔ Draw a Card ⚔</div>
        <div class="draw-controls">
          <button class="btn-draw" style="border-color:${d.color};color:${d.textColor}" onclick="drawCards('${key}',1)">Draw 1</button>
          <button class="btn-draw" style="border-color:${d.color};color:${d.textColor}" onclick="drawCards('${key}',3)">Draw 3</button>
          <button class="btn-draw" style="border-color:${d.color};color:${d.textColor}" onclick="drawCards('${key}',5)">Draw 5</button>
          <button class="btn-draw" style="border-color:rgba(240,230,200,0.25);color:rgba(240,230,200,0.45)" onclick="clearDrawn('${key}')">Clear</button>
        </div>
        <div class="drawn-hand" id="drawn-${key}"><div class="no-draw-msg">Draw cards to reveal them here…</div></div>
      </div>
    </div>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
// RENDER: ADVENTURE FORGE (SPREAD)
// ══════════════════════════════════════════════════════════════
function renderForge() {
  const camp = CAMPAIGNS.find(c => c.id === selectedCamp);

  if (!adventureSpread) {
    return `<div class="forge-outer"><div class="forge-box">
      <h2>⚔ The Adventure Forge ⚔</h2>
      <p class="sub">Choose your campaign scale, set your party, and forge your adventure</p>
      <div class="campaign-picker">
        ${CAMPAIGNS.map(c => `<button class="camp-btn ${c.id === selectedCamp ? 'active' : ''}" onclick="setCamp('${c.id}')" aria-pressed="${c.id === selectedCamp ? 'true' : 'false'}">
          <span class="ci">${c.icon}</span><span>${c.label}</span><span class="cs">${c.sub}</span>
        </button>`).join('')}
      </div>
      <div class="char-count-row">
        <span style="font-family:'Cinzel',serif;font-size:0.58rem;color:rgba(240,230,200,0.38);letter-spacing:0.1em;text-transform:uppercase">Party:</span>
        ${[['pc', 'Player Characters', pcCount], ['npc', 'Key NPCs', npcCount], ['sideq', 'Side Quests', sideqCount]].map(([t, l, v]) => `
          <div class="char-group">
            <div class="char-group-title">${l}</div>
            <div class="counter-ctrl">
              <button class="counter-btn" onclick="adj('${t}',-1)">−</button>
              <span class="counter-val" id="cnt-${t}">${v}</span>
              <button class="counter-btn" onclick="adj('${t}',1)">+</button>
            </div>
          </div>`).join('')}
      </div>
      <div class="forge-btns"><button class="btn-forge" onclick="buildAdventure()">⚔ Forge the Adventure</button></div>
      <p style="text-align:center;font-style:italic;color:rgba(240,230,200,0.22);font-size:0.9rem">Your campaign will be forged here…</p>
    </div></div>`;
  }

  const sp = adventureSpread;
  const co = CAMPAIGNS.find(c => c.id === sp.camp);

  const section = (title, html) => `<div class="forge-section">
    <div class="forge-section-title">${title}</div>
    <div class="forge-grid">${html}</div>
  </div>`;

  return `<div class="forge-outer"><div class="forge-box">
    <h2>⚔ The Adventure Forge ⚔</h2>
    <p class="sub">Your adventure awaits — let the dice decide your fate</p>
    <div style="display:flex;justify-content:center;margin-bottom:1.8rem">
      <div class="camp-badge">${co.icon} ${co.label} · ${co.sub}</div>
    </div>
    <div class="forge-btns">
      <button class="btn-forge" onclick="buildAdventure()">⚔ Re-Forge</button>
      <button class="btn-forge-ghost" onclick="clearAdventure()">Edit Settings</button>
    </div>

    ${section('🌍 Realm & Setting (' + 2 + ')',
    ['realm', 'settlement'].map((k, i) => plainSpread(k, sp.world[i], i * 0.07)).join('')
  )}

    ${section('📖 Main Quest',
    plainSpread('mainquest', sp.mainQuest, 0)
  )}

    ${section(`🎲 Player Characters (${sp.pcs.length})`,
    sp.pcs.map((p, i) => pcCard(p, i, i * 0.08)).join('')
  )}

    ${section(`🧙 Key NPCs (${sp.npcs.length})`,
    sp.npcs.map((n, i) => npcCard(n, i, i * 0.07)).join('')
  )}

    ${sp.villain ? section('💀 The Villain',
    plainSpread('villain', sp.villain, 0)
  ) : ''}

    ${section(`⛏️ Dungeon`,
    plainSpread('dungeon', sp.dungeon, 0)
  )}

    ${sp.sidequests.length ? section(`📌 Side Quests (${sp.sidequests.length})`,
    sp.sidequests.map((q, i) => plainSpread('sidequest', q, i * 0.06)).join('')
  ) : ''}

    ${section(`⚔️ Encounters (${sp.encounters.length})`,
    sp.encounters.map((e, i) => plainSpread('encounter', e, i * 0.06)).join('')
  )}

    ${section(`⚠️ Complications (${sp.complications.length})`,
    sp.complications.map((c, i) => plainSpread('complication', c, i * 0.06)).join('')
  )}

    ${section(`💎 Rewards (${sp.rewards.length})`,
    sp.rewards.map((r, i) => plainSpread('reward', r, i * 0.07)).join('')
  )}

    ${section(`🌀 Campaign Twists (${sp.twists.length})`,
    sp.twists.map((t, i) => plainSpread('twist', t, i * 0.07)).join('')
  )}

    ${section(`📖 Lore Hooks (${sp.lore.length})`,
    sp.lore.map((l, i) => plainSpread('lore', l, i * 0.07)).join('')
  )}
  </div></div>`;
}

// ══════════════════════════════════════════════════════════════
// MAIN RENDER
// ══════════════════════════════════════════════════════════════
function render() {
  // Assuming renderSpreadPanel is defined elsewhere or is a placeholder for future functionality
  const renderSpreadPanel = () => `<div class="no-spread-msg">No spread to render.</div>`; // Placeholder

  const tabs = DECK_KEYS.map(key => {
    const d = DECKS[key], active = key === activeTab;
    return `<button role="tab" aria-selected="${active}" aria-controls="panel-${key}" class="tab-btn ${active ? 'active' : ''}" style="${active ? `background:${d.bg}55;border-color:${d.color}88;color:${d.textColor}` : ''}" onclick="switchTab('${key}')"><span aria-hidden="true">${d.icon}</span> ${d.label}</button>`;
  }).join('') + `<button role="tab" aria-selected="${activeTab === 'forge'}" aria-controls="panel-forge" class="tab-btn ${activeTab === 'forge' ? 'active' : ''}" style="${activeTab === 'forge' ? 'background:rgba(200,160,32,0.12);border-color:rgba(200,160,32,0.5);color:#e8c040' : ''}" onclick="switchTab('forge')">⚔ Adventure Forge</button>`;

  document.getElementById('app').innerHTML = `
    <div class="tabs-container"><div class="tabs-scroll" role="tablist">${tabs}</div></div>
    ${DECK_KEYS.map(k => renderDeckPanel(k)).join('')}
    <div class="deck-panel ${activeTab === 'forge' ? 'active' : ''}" id="panel-forge">
      <div class="panel-inner" style="border:none;padding:0;background:transparent">${renderForge()}</div>
    </div>`;
}

// ══════════════════════════════════════════════════════════════
// ACTIONS
// ══════════════════════════════════════════════════════════════
function switchTab(key) { activeTab = key; render(); }

function toggleCard(id) {
  flippedCards[id] = !flippedCards[id];
  const el = document.querySelector(`[data-id="${id}"]`);
  if (el) el.classList.toggle('flipped');
}

function flipAll(key) { DECKS[key].cards.forEach((_, i) => { flippedCards[`${key}-${i}`] = true; }); render(); }
function hideAll(key) { DECKS[key].cards.forEach((_, i) => { flippedCards[`${key}-${i}`] = false; }); render(); }

function drawCards(key, n) {
  const d = DECKS[key], drawn = shuffle(d.cards).slice(0, n), c = document.getElementById(`drawn-${key}`);
  if (!c) return;
  c.innerHTML = drawn.map((card, i) => `
    <div class="drawn-card" style="background:${d.bg};border-color:${d.color}88;color:${d.textColor};animation-delay:${i * 0.1}s">
      <div class="card-cat" style="color:${d.color}">${d.label}</div>
      <div class="card-icon">${card.i}</div>
      <div class="card-text" style="font-size:0.75rem">${card.t}</div>
    </div>`).join('');
}

function clearDrawn(key) {
  const c = document.getElementById(`drawn-${key}`);
  if (c) c.innerHTML = '<div class="no-draw-msg">Draw cards to reveal them here…</div>';
}

function setCamp(id) {
  selectedCamp = id;
  const c = CAMPAIGNS.find(x => x.id === id);
  pcCount = c.pcs; npcCount = c.npcs; sideqCount = c.sidequests;
  adventureSpread = null; render();
}

function adj(type, delta) {
  if (type === 'pc') pcCount = Math.max(1, Math.min(8, pcCount + delta));
  if (type === 'npc') npcCount = Math.max(0, Math.min(12, npcCount + delta));
  if (type === 'sideq') sideqCount = Math.max(0, Math.min(12, sideqCount + delta));
  const map = { pc: pcCount, npc: npcCount, sideq: sideqCount };
  Object.entries(map).forEach(([k, v]) => { const el = document.getElementById(`cnt-${k}`); if (el) el.textContent = v; });
}

function buildAdventure() {
  const c = CAMPAIGNS.find(x => x.id === selectedCamp);
  adventureSpread = {
    camp: selectedCamp,
    world: [pick(shuffle(DECKS.realm.cards)), pick(shuffle(DECKS.settlement.cards))],
    mainQuest: pick(shuffle(DECKS.mainquest.cards)),
    villain: pick(shuffle(DECKS.villain.cards)),
    dungeon: pick(shuffle(DECKS.dungeon.cards)),
    pcs: Array.from({ length: pcCount }, () => buildPC()),
    npcs: Array.from({ length: npcCount }, () => buildNPC()),
    sidequests: pickN(DECKS.sidequest.cards, sideqCount),
    encounters: pickN(DECKS.encounter.cards, c.encounters),
    complications: pickN(DECKS.complication.cards, Math.max(1, Math.floor(c.encounters / 2))),
    rewards: pickN(DECKS.reward.cards, c.rewards),
    twists: pickN(DECKS.twist.cards, c.twists),
    lore: pickN(DECKS.lore.cards, Math.max(1, Math.floor(c.encounters / 2))),
  };
  activeTab = 'forge'; render();
}

function clearAdventure() { adventureSpread = null; render(); }

render();
