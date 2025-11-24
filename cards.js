// cards.js - Din Database Fil

const RAW_DATA_TWI = `
"Malevolence, Grievous's Secret Weapon",TWI,039,Normal,Rare,3,False
A Fine Addition,TWI,040,Normal,Rare,3,False
Lethal Crackdown,TWI,041,Normal,Uncommon,3,False
"Barriss Offee, Unassuming Apprentice",TWI,042,Normal,Rare,3,False
Outspoken Representative,TWI,043,Normal,Common,3,False
Kashyyyk Defender,TWI,044,Normal,Uncommon,3,False
41st Elite Corps,TWI,045,Normal,Common,3,False
"Captain Typho, Protecting the Senator",TWI,046,Normal,Uncommon,3,False
"Satine Kryze, Committed to Peace",TWI,047,Normal,Legendary,3,False
"Obi-Wan's Aethersprite, This Is Why I Hate Flying",TWI,048,Normal,Uncommon,3,False
Knight of the Republic,TWI,049,Normal,Common,3,False
"Luminara Unduli, Soft-Spoken Master",TWI,050,Normal,Rare,3,False
For the Republic,TWI,051,Normal,Rare,3,False
Hello There,TWI,052,Normal,Uncommon,3,False
"Finn, On the Run",TWI,053,Normal,Rare,3,False
Duchess's Champion,TWI,054,Normal,Uncommon,3,False
Equalize,TWI,055,Normal,Rare,3,False
Compassionate Senator,TWI,056,Normal,Uncommon,3,False
Warrior Drone,TWI,057,Normal,Common,3,False
Padawan Starfighter,TWI,058,Normal,Common,3,False
Royal Guard Attaché,TWI,059,Normal,Common,3,False
Trade Federation Shuttle,TWI,060,Normal,Common,3,False
Infantry of the 212th,TWI,061,Normal,Common,3,False
Daughter of Dathomir,TWI,062,Normal,Common,3,False
Vulture Interceptor Wing,TWI,063,Normal,Uncommon,3,False
"Ki-Adi-Mundi, Composed and Confident",TWI,064,Normal,Legendary,3,False
Falchion Ion Tank,TWI,065,Normal,Common,3,False
Multi-Troop Transport,TWI,066,Normal,Common,3,False
"The Zillo Beast, Awoken from the Depths",TWI,067,Normal,Rare,3,False
Foresight,TWI,068,Normal,Rare,3,False
Roger Roger,TWI,069,Normal,Rare,3,False
Perilous Position,TWI,070,Normal,Common,3,False
Unshakeable Will,TWI,071,Normal,Uncommon,3,False
I Have the High Ground,TWI,072,Normal,Rare,3,False
Grievous Reassembly,TWI,073,Normal,Common,3,False
Guarding the Way,TWI,074,Normal,Common,3,False
Disruptive Burst,TWI,075,Normal,Uncommon,3,False
Death by Droids,TWI,076,Normal,Uncommon,3,False
Vanquish,TWI,077,Normal,Common,3,False
The Invasion of Christophsis,TWI,078,Normal,Legendary,3,False
Confederate Courier,TWI,079,Normal,Common,3,False
"Poggle the Lesser, Archduke of the Stalgasin Hive",TWI,080,Normal,Rare,3,False
Droid Commando,TWI,081,Normal,Common,3,False
MagnaGuard Wing Leader,TWI,082,Normal,Uncommon,3,False
General's Guardian,TWI,083,Normal,Special,3,False
"Kraken, Confederate Tactician",TWI,084,Normal,Uncommon,3,False
"Kalani, Analytical General",TWI,085,Normal,Rare,3,False
"Admiral Trench, Holding the Line",TWI,086,Normal,Uncommon,3,False
Separatist Super Tank,TWI,087,Normal,Common,3,False
Reprocess,TWI,088,Normal,Uncommon,3,False
Consolidation of Power,TWI,089,Normal,Rare,3,False
"Echo, Valiant ARC Trooper",TWI,090,Normal,Uncommon,3,False
Republic Tactical Officer,TWI,091,Normal,Common,3,False
"Admiral Yularen, Advising Caution",TWI,092,Normal,Rare,3,False
Advanced Recon Commando,TWI,093,Normal,Common,3,False
"Shaak Ti, Unity Wins Wars",TWI,094,Normal,Uncommon,3,False
Pelta Supply Frigate,TWI,095,Normal,Common,3,False
"Aayla Secura, Master of the Blade",TWI,096,Normal,Legendary,3,False
"Captain Rex, Lead by Example",TWI,097,Normal,Special,3,False
Republic Defense Carrier,TWI,098,Normal,Uncommon,3,False
Synchronized Strike,TWI,099,Normal,Uncommon,3,False
Petition the Senate,TWI,100,Normal,Rare,3,False
"Mas Amedda, Vice Chair",TWI,101,Normal,Rare,3,False
Manufactured Soldiers,TWI,102,Normal,Uncommon,3,False
Pyrrhic Assault,TWI,103,Normal,Legendary,3,False
Obedient Vanguard,TWI,104,Normal,Common,3,False
Steadfast Senator,TWI,105,Normal,Uncommon,3,False
Coruscant Guard,TWI,106,Normal,Common,3,False
Patrolling V-Wing,TWI,107,Normal,Special,3,False
Ryloth Militia,TWI,108,Normal,Common,3,False
501st Liberator,TWI,109,Normal,Common,3,False
"Huyang, Enduring Instructor",TWI,110,Normal,Rare,3,False
Republic ARC-170,TWI,111,Normal,Common,3,False
Subjugating Starfighter,TWI,112,Normal,Common,3,False
B2 Legionnaires,TWI,113,Normal,Common,3,False
"Clone Commander Cody, Commanding the 212th",TWI,114,Normal,Uncommon,3,False
"Osi Sobeck, Warden of the Citadel",TWI,115,Normal,Uncommon,3,False
Clone,TWI,116,Normal,Legendary,3,False
Baktoid Spider Droid,TWI,117,Normal,Common,3,False
"Gor, Grievous's Pet",TWI,118,Normal,Legendary,3,False
Nameless Valor,TWI,119,Normal,Uncommon,3,False
Strategic Acumen,TWI,120,Normal,Common,3,False
General's Blade,TWI,121,Normal,Rare,3,False
Squad Support,TWI,122,Normal,Uncommon,3,False
Outflank,TWI,123,Normal,Special,3,False
Tactical Advantage,TWI,124,Normal,Special,3,False
The Clone Wars,TWI,125,Normal,Rare,3,False
Encouraging Leadership,TWI,126,Normal,Common,3,False
Resupply,TWI,127,Normal,Common,3,False
Take Captive,TWI,128,Normal,Common,3,False
In Defense of Kamino,TWI,129,Normal,Rare,3,False
"Bo-Katan Kryze, Death Watch Lieutenant",TWI,130,Normal,Rare,3,False
OOM-Series Officer,TWI,131,Normal,Common,3,False
Confederate Tri-Fighter,TWI,132,Normal,Uncommon,3,False
B1 Attack Platform,TWI,133,Normal,Common,3,False
"Asajj Ventress, Count Dooku's Assassin",TWI,134,Normal,Uncommon,3,False
"Darth Maul, Revenge At Last",TWI,135,Normal,Legendary,3,False
Squadron of Vultures,TWI,136,Normal,Common,3,False
"Savage Opress, Monster",TWI,137,Normal,Uncommon,3,False
"Count Dooku, Fallen Jedi",TWI,138,Normal,Rare,3,False
Corner the Prey,TWI,139,Normal,Rare,3,False
Self-Destruct,TWI,140,Normal,Uncommon,3,False
Soldier of the 501st,TWI,141,Normal,Common,3,False
"Anakin's Interceptor, Where the Fun Begins",TWI,142,Normal,Uncommon,3,False
"Jyn Erso, Stardust",TWI,143,Normal,Rare,3,False
Batch Brothers,TWI,144,Normal,Common,3,False
"Jesse, Hard-Fighting Patriot",TWI,145,Normal,Uncommon,3,False
"Steela Gerrera, Beloved Tactician",TWI,146,Normal,Rare,3,False
"Anakin Skywalker, Maverick Mentor",TWI,147,Normal,Special,3,False
Senatorial Corvette,TWI,148,Normal,Common,3,False
Low Altitude Gunship,TWI,149,Normal,Uncommon,3,False
"Saw Gerrera, Resistance Is Not Terrorism",TWI,150,Normal,Rare,3,False
"Resolute, Under Anakin's Command",TWI,151,Normal,Legendary,3,False
Mace Windu's Lightsaber,TWI,152,Normal,Rare,3,False
Bold Resistance,TWI,153,Normal,Uncommon,3,False
"Mister Bones, I Performed Violence",TWI,154,Normal,Rare,3,False
Twice the Pride,TWI,155,Normal,Uncommon,3,False
Unlimited Power,TWI,156,Normal,Legendary,3,False
Disaffected Senator,TWI,157,Normal,Uncommon,3,False
Clone Heavy Gunner,TWI,158,Normal,Common,3,False
Dendup's Loyalist,TWI,159,Normal,Common,3,False
Vanguard Droid Bomber,TWI,160,Normal,Common,3,False
Bold Recon Commando,TWI,161,Normal,Common,3,False
Reckless Torrent,TWI,162,Normal,Common,3,False
Relentless Rocket Droid,TWI,163,Normal,Common,3,False
"Hevy, Staunch Martyr",TWI,164,Normal,Uncommon,3,False
"Kit Fisto, The Smiling Jedi",TWI,165,Normal,Rare,3,False
"Aurra Sing, Crackshot Sniper",TWI,166,Normal,Uncommon,3,False
Heavy Persuader Tank,TWI,167,Normal,Common,3,False
Old Access Codes,TWI,168,Normal,Common,3,False
Clone Cohort,TWI,169,Normal,Uncommon,3,False
Daring Raid,TWI,170,Normal,Common,3,False
Grenade Strike,TWI,171,Normal,Common,3,False
Grim Resolve,TWI,172,Normal,Common,3,False
Blood Sport,TWI,173,Normal,Uncommon,3,False
Open Fire,TWI,174,Normal,Special,3,False
Strategic Analysis,TWI,175,Normal,Common,3,False
Caught in the Crossfire,TWI,176,Normal,Rare,3,False
Guerilla Insurgency,TWI,177,Normal,Rare,3,False
Planetary Invasion,TWI,178,Normal,Legendary,3,False
"Soulless One, Customized for Grievous",TWI,179,Normal,Uncommon,3,False
Separatist Commando,TWI,180,Normal,Special,3,False
Elite P-38 Starfighter,TWI,181,Normal,Common,3,False
Infiltrating Demolisher,TWI,182,Normal,Common,3,False
"Rush Clovis, Banking Clan Scion",TWI,183,Normal,Rare,3,False
Tactical Droid Commander,TWI,184,Normal,Uncommon,3,False
"Ziro the Hutt, Colorful Schemer",TWI,185,Normal,Uncommon,3,False
"San Hill, Chairman of the Banking Clan",TWI,186,Normal,Rare,3,False
"Cad Bane, Hostage Taker",TWI,187,Normal,Legendary,3,False
Wartime Profiteering,TWI,188,Normal,Uncommon,3,False
Unnatural Life,TWI,189,Normal,Rare,3,False
On the Doorstep,TWI,190,Normal,Common,3,False
Wolf Pack Escort,TWI,191,Normal,Common,3,False
"Padmé Amidala, Pursuing Peace",TWI,192,Normal,Uncommon,3,False
"R2-D2, Full of Solutions",TWI,193,Normal,Uncommon,3,False
"Ahsoka Tano, Always Ready for Trouble",TWI,194,Normal,Legendary,3,False
"Sabine Wren, You Can Count On Me",TWI,195,Normal,Rare,3,False
"Plo Koon, Koh-to-yah!",TWI,196,Normal,Uncommon,3,False
Republic Attack Pod,TWI,197,Normal,Common,3,False
"Enfys Nest, Champion of Justice",TWI,198,Normal,Rare,3,False
Clear the Field,TWI,199,Normal,Uncommon,3,False
Creative Thinking,TWI,200,Normal,Common,3,False
Aid from the Innocent,TWI,201,Normal,Rare,3,False
"Jar Jar Binks, Foolish Gungan",TWI,202,Normal,Uncommon,3,False
"Chancellor Palpatine, Wartime Chancellor",TWI,203,Normal,Legendary,3,False
Impropriety Among Thieves,TWI,204,Normal,Rare,3,False
Clone Dive Trooper,TWI,205,Normal,Common,3,False
Independent Senator,TWI,206,Normal,Uncommon,3,False
B1 Security Team,TWI,207,Normal,Common,3,False
Favorable Delegate,TWI,208,Normal,Common,3,False
Hotshot V-Wing,TWI,209,Normal,Common,3,False
"Lux Bonteri, Renegade Separatist",TWI,210,Normal,Uncommon,3,False
"Sly Moore, Secretive Advisor",TWI,211,Normal,Rare,3,False
Freelance Assassin,TWI,212,Normal,Common,3,False
Sanctioner's Shuttle,TWI,213,Normal,Uncommon,3,False
Hidden Sharpshooter,TWI,214,Normal,Common,3,False
Geonosis Patrol Fighter,TWI,215,Normal,Common,3,False
"Fives, In Search of Truth",TWI,216,Normal,Rare,3,False
Tri-Droid Suppressor,TWI,217,Normal,Common,3,False
Droid Cohort,TWI,218,Normal,Common,3,False
On Top of Things,TWI,219,Normal,Uncommon,3,False
Shadowed Intentions,TWI,220,Normal,Rare,3,False
In Pursuit,TWI,221,Normal,Common,3,False
Political Pressure,TWI,222,Normal,Common,3,False
Unmasking the Conspiracy,TWI,223,Normal,Rare,3,False
Breaking In,TWI,224,Normal,Common,3,False
Now There Are Two of Them,TWI,225,Normal,Legendary,3,False
Waylay,TWI,226,Normal,Special,3,False
Prisoner of War,TWI,227,Normal,Uncommon,3,False
Droid Starfighter,TWI,228,Normal,Common,3,False
Battle Droid Escort,TWI,229,Normal,Special,3,False
Super Battle Droid,TWI,230,Normal,Common,3,False
Dwarf Spider Droid,TWI,231,Normal,Common,3,False
Patrolling AAT,TWI,232,Normal,Common,3,False
Hailfire Tank,TWI,233,Normal,Common,3,False
"The Invisible Hand, Imposing Flagship",TWI,234,Normal,Rare,3,False
Battle Droid Legion,TWI,235,Normal,Uncommon,3,False
Grievous's Wheel Bike,TWI,236,Normal,Special,3,False
Droid Deployment,TWI,237,Normal,Common,3,False
Merciless Contest,TWI,238,Normal,Common,3,False
Execute Order 66,TWI,239,Normal,Rare,3,False
332nd Stalwart,TWI,240,Normal,Special,3,False
Phase I Clone Trooper,TWI,241,Normal,Common,3,False
Phase II Clone Trooper,TWI,242,Normal,Common,3,False
Republic Commando,TWI,243,Normal,Common,3,False
Eta-2 Light Interceptor,TWI,244,Normal,Common,3,False
Armored Saber Tank,TWI,245,Normal,Common,3,False
"Tranquility, Inspiring Flagship",TWI,246,Normal,Rare,3,False
AT-TE Vanguard,TWI,247,Normal,Uncommon,3,False
Ahsoka's Padawan Lightsaber,TWI,248,Normal,Special,3,False
Heroes on Both Sides,TWI,249,Normal,Common,3,False
Sword and Shield Maneuver,TWI,250,Normal,Uncommon,3,False
Drop In,TWI,251,Normal,Common,3,False
Aggrieved Parliamentarian,TWI,252,Normal,Common,3,False
Headhunter Squadron,TWI,253,Normal,Common,3,False
Volunteer Soldier,TWI,254,Normal,Common,3,False
Brain Invaders,TWI,255,Normal,Rare,3,False
Hold-Out Blaster,TWI,256,Normal,Common,3,False
Private Manufacturing,TWI,257,Normal,Uncommon,3,False
`;

// Funktion til at gøre data klar
function loadCards() {
    const lines = RAW_DATA_TWI.trim().split('\n');
    const processed = { leaders: [], bases: [], deck: [] };
    const aspects = ["Aggression", "Command", "Cunning", "Vigilance", "Villainy", "Heroism"];

    lines.forEach(line => {
        // Avanceret regex for at splitte ved kommaer, men ignorere kommaer inde i "gåseøjne"
        const parts = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
        if(!parts || parts.length < 6) return;

        const name = parts[0].replace(/^"|"$/g, '');
        const set = parts[1];
        const id = parts[2];
        const rarity = parts[4];
        const cost = parts[5];
        const idInt = parseInt(id);

        // Bestem type (Leader/Base/Unit)
        let type = "Unit";
        if (idInt <= 18) type = "Leader";
        else if (idInt >= 19 && idInt <= 30) type = "Base";

        // Bestem Aspect (Farve) - Simuleret rækkefølge
        let aspect = "Villainy";
        if(type === "Leader" || type === "Base") aspect = aspects[idInt % 4];
        else aspect = aspects[idInt % 6];

        const card = {
            id: id,
            set: set,
            name: name,
            type: type,
            cost: cost,
            aspect: aspect,
            rarity: rarity,
            img: `https://swudb.com/cdn-cgi/image/quality=95/images/cards/${set}/${id}.png`,
            back: `https://swudb.com/cdn-cgi/image/quality=95/images/cards/${set}/${id}-back.png`
        };

        if (type === 'Leader') processed.leaders.push(card);
        else if (type === 'Base') processed.bases.push(card);
        else processed.deck.push(card);
    });

    return processed;
}

// Global variabel vi kan bruge i main scriptet
const GLOBAL_CARD_DATABASE = {
    "TWI": loadCards() // Vi loader TWI med det samme
    // (Her kan vi tilføje SOR og SHD senere på samme måde)
};