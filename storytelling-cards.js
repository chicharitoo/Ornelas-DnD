const DECKS = {
      epoch: {
        label: 'Epoch', icon: '⏳', color: '#7b4f1a', bg: 'linear-gradient(135deg,#2a1a08,#3d2a0f)', textColor: '#e8c87a', cards: [
          { t: 'Ancient Mesopotamia\n3500 BCE', i: '🏺' }, { t: 'The Fall of Rome\n5th Century', i: '🗡️' }, { t: 'The Black Plague\n1347–1353', i: '💀' },
          { t: 'The Renaissance\n15th Century', i: '🎨' }, { t: 'The Age of Sail\n17th Century', i: '⛵' }, { t: 'The Wild West\n1865–1895', i: '🤠' },
          { t: 'Belle Époque\nParis 1900', i: '🥂' }, { t: 'World War II\n1939–1945', i: '📻' }, { t: 'Space Race Era\n1957–1969', i: '🚀' },
          { t: 'The Near Future\n2040s', i: '🤖' }, { t: 'Post-Apocalypse\nUndefined Year', i: '☢️' }, { t: 'The Viking Age\n793–1066', i: '🪓' },
          { t: 'Feudal Japan\n1185–1603', i: '⛩️' }, { t: 'The Roaring Twenties\n1920s', i: '🎷' },
          { t: 'Ancient Egypt\n3100 BCE', i: '🐪' }, { t: 'The Bronze Age Collapse\n1200 BCE', i: '🏛️' }, { t: 'Classical Athens\n5th Century BCE', i: '🏺' },
          { t: 'The Silk Road Era\n200 BCE–1450 CE', i: '🐫' }, { t: 'The Crusades\n1096–1291', i: '✝️' }, { t: 'The Mongol Empire\n13th Century', i: '🏹' },
          { t: 'The Aztec Empire\n1300–1521', i: '🌽' }, { t: 'The English Civil War\n1642–1651', i: '⚔️' }, { t: 'The French Revolution\n1789–1799', i: '🗽' },
          { t: 'The Industrial Revolution\n1760–1840', i: '🏭' }, { t: 'The American Civil War\n1861–1865', i: '🎖️' }, { t: 'The Gilded Age\n1870–1900', i: '💰' },
          { t: 'The First World War\n1914–1918', i: '🪖' }, { t: 'The Great Depression\n1929–1939', i: '📉' }, { t: 'The Cold War\n1947–1991', i: '🔭' },
          { t: 'The Digital Revolution\n1990s', i: '💻' }, { t: 'The Climate Crisis Era\n2020s–2030s', i: '🌡️' }, { t: 'The Age of AI\n2025–2050', i: '🧠' },
          { t: 'A Parallel Victorian Age\nSteampunk 1880s', i: '⚙️' }, { t: 'A Dieselpunk 1940s\nAlternate History', i: '✈️' },
          { t: 'A Solarpunk Future\n22nd Century', i: '🌿' }, { t: 'Prehistoric Dawn\n50,000 BCE', i: '🦣' },
          { t: 'The Tang Dynasty\n618–907 CE', i: '🐉' }, { t: 'The Ottoman Empire\n1299–1922', i: '☪️' },
          { t: 'Prohibition America\n1920–1933', i: '🥃' }, { t: 'Post-WWII Reconstruction\n1945–1955', i: '🏗️' },
          { t: 'The Cuban Missile Crisis\n1962', i: '☢️' }, { t: 'The Vietnam War Era\n1960s–1975', i: '🌴' },
          { t: 'The Punk Era\n1976–1984', i: '🎸' }, { t: 'The Fall of the Berlin Wall\n1989', i: '🧱' },
          { t: 'The Dot-Com Boom\n1995–2000', i: '🌐' }, { t: 'Post-9/11 World\n2001–2010', i: '🕊️' },
          { t: 'The Arab Spring\n2010–2012', i: '✊' }, { t: 'A Biopunk Near Future\n2035', i: '🧬' },
          { t: 'The Interstellar Age\n2200s', i: '🌌' }, { t: 'After the Singularity\n2080s', i: '⚡' },
          { t: 'The Last Century\nFinal years of humanity', i: '🌅' }, { t: 'The Beginning\nFirst days after creation', i: '🌱' },
          { t: 'A Timeless Moment\nOutside history', i: '♾️' }, { t: 'The Age of Myths\nBefore recorded time', i: '⚡' },
          { t: 'Imperial China\nHan Dynasty 206 BCE', i: '🏮' }, { t: 'The Weimar Republic\n1919–1933', i: '🎭' },
          { t: 'The Meiji Restoration\nJapan 1868', i: '🗾' }, { t: 'The Age of Exploration\n1400–1600', i: '🧭' },
          { t: 'The Harlem Renaissance\n1920s New York', i: '🎷' }, { t: 'The Second Elizabethan Era\n1950s Britain', i: '👑' },
          { t: 'The Byzantine Empire\n330–1453', i: '🏛️' }, { t: 'The Mughal Empire\n1526–1857', i: '💎' },
          { t: 'Ancient Rome at its Peak\n1st Century CE', i: '🦅' }, { t: 'The Hundred Years War\n1337–1453', i: '⚔️' },
          { t: 'The Salem Witch Trials\n1692', i: '🔥' }, { t: 'The California Gold Rush\n1849', i: '⛏️' },
          { t: 'The Opium Wars\n1839–1842', i: '🚢' }, { t: 'The Boer War\n1899–1902', i: '🌍' },

          { t: 'The Edo Period\nJapan 1603–1868', i: '🌸' },
          { t: 'Ancient Greece\nAge of Pericles 461 BCE', i: '🏛️' },
        ]
      },
      location: {
        label: 'Location', icon: '🗺️', color: '#1a5a3d', bg: 'linear-gradient(135deg,#081a10,#102a1a)', textColor: '#7addb0', cards: [
          { t: 'A crumbling lighthouse on a fog-drenched coast', i: '🏚️' }, { t: 'The labyrinthine streets of a medieval city', i: '🏰' },
          { t: 'A vast orbital space station above a dying Earth', i: '🛰️' }, { t: 'The sunken ruins of an ancient civilization', i: '🌊' },
          { t: 'A sprawling desert caravan city at a crossroads', i: '🏜️' }, { t: 'An underground bunker colony, sealed for 40 years', i: '⛏️' },
          { t: 'A luxury ocean liner mid-Atlantic voyage', i: '🚢' }, { t: 'A remote monastery high in mountain peaks', i: '⛰️' },
          { t: 'A neon-soaked megacity slum district', i: '🌆' }, { t: 'A haunted manor estate with sealed east wing', i: '👻' },
          { t: 'A travelling circus between small towns', i: '🎪' }, { t: 'A deep-space mining colony on an asteroid', i: '🪨' },
          { t: 'A walled garden city after the great flood', i: '🌿' }, { t: 'A frontier town on an alien planet', i: '🌍' },
          { t: 'A boarding school for children no one has reported missing', i: '🏫' }, { t: 'A submarine research station at the ocean floor', i: '🌊' },
          { t: 'A village built entirely inside a dormant volcano', i: '🌋' }, { t: 'The last functional library in a post-literate world', i: '📚' },
          { t: 'A sanatorium on a cliffside that closed in 1952', i: '🏥' }, { t: 'A floating market city in a river delta', i: '⛵' },
          { t: 'The ruins of a world\'s fair frozen in time', i: '🎡' }, { t: 'A mountain pass fortress contested for 300 years', i: '🏔️' },
          { t: 'A town that exists only between midnight and 3am', i: '🌃' }, { t: 'An arctic research station in the long polar night', i: '❄️' },
          { t: 'A district of a city that appears on no official maps', i: '🗺️' }, { t: 'A labyrinthine bazaar that sells things not yet made', i: '🕌' },
          { t: 'A theatre company\'s converted château in rural France', i: '🏯' }, { t: 'A hospital ship anchored off a war zone', i: '⚓' },
          { t: 'The last train across a disappearing country', i: '🚂' }, { t: 'A commune built in the ruins of a tech giant HQ', i: '💻' },
          { t: 'An island that appears only at low tide', i: '🏝️' }, { t: 'A climate refugee megacamp at a former border', i: '⛺' },
          { t: 'A city block condemned but somehow still occupied', i: '🏢' }, { t: 'A palace whose servants have not been paid in 40 years', i: '👑' },
          { t: 'A secret underground art colony beneath a city', i: '🎨' }, { t: 'A casino ship that never docks', i: '🎲' },
          { t: 'A quarantined town — no one knows why quarantine continues', i: '🚧' }, { t: 'A hidden valley not shown on satellite imagery', i: '🏞️' },
          { t: 'A former nuclear test site, now strangely inhabited', i: '☢️' }, { t: 'A pirate cove that became a trading republic', i: '🏴‍☠️' },
          { t: 'An archive city built inside a mountain', i: '⛰️' }, { t: 'A village that floods every spring — residents return anyway', i: '🌧️' },
          { t: 'A megachurch complex that became a self-governing city', i: '⛪' }, { t: 'A border zone caught between two collapsing states', i: '🚨' },
          { t: 'A theme park abandoned mid-construction in 1987', i: '🎠' }, { t: 'A canyon settlement carved by a forgotten empire', i: '🏜️' },
          { t: 'A prison island whose guards departed but prisoners stayed', i: '🏝️' }, { t: 'A climate-controlled biodome in a dead landscape', i: '🌱' },
          { t: 'A black-market tech hub in a decommissioned factory', i: '🏭' }, { t: 'A monastery that switched religions three times', i: '☮️' },
          { t: 'The last city still playing pre-war radio broadcasts', i: '📻' }, { t: 'A river town at the junction of four disputed territories', i: '🌊' },
          { t: 'A mountain hotel cut off by snow since November', i: '🏨' }, { t: 'An ancient trading post, still operating under the original charter', i: '📜' },
          { t: 'A ghost town purchased and occupied by a single family', i: '🏚️' }, { t: 'A city built over the wreck of a crashed generation ship', i: '🚀' },
          { t: 'The deepest inhabited cave system on the planet', i: '🕳️' }, { t: 'A sky-farm platform above the clouds', i: '☁️' },
          { t: 'A peninsula cut off by a dam that should not have been built', i: '💧' }, { t: 'A town square where all clocks stopped on the same day', i: '🕰️' },
          { t: 'A living forest city grown over centuries by a single family', i: '🌳' }, { t: 'A permanent UN peacekeeping zone with its own culture', i: '🕊️' },
          { t: 'A coral reef settlement in a world of rising seas', i: '🐠' }, { t: 'A checkpoint that became a city when the war never ended', i: '🔒' },
          { t: 'A tidal island connected to the mainland only six hours a day', i: '🌅' }, { t: 'A palace of mirrors where no surface shows the present', i: '🪞' },

          { t: 'A cathedral crypt that has been continuously occupied for 800 years', i: '⛪' },
          { t: 'A floating city of salvage built on the ruins of a coastal megacity', i: '🌊' },
          { t: 'A hospital that was converted to a hotel after the epidemic', i: '🏨' },
          { t: 'A ruined stadium repurposed as a community farm', i: '🌾' },
        ]
      },
      genre: {
        label: 'Genre', icon: '📖', color: '#5a1a5a', bg: 'linear-gradient(135deg,#1a081a,#2a102a)', textColor: '#d4a0d4', cards: [
          { t: 'Gothic Horror', i: '🦇' }, { t: 'Cosmic Mystery', i: '🌌' }, { t: 'Political Thriller', i: '🔍' }, { t: 'Romantic Tragedy', i: '🥀' },
          { t: 'Epic Fantasy', i: '🐉' }, { t: 'Noir Crime', i: '🚬' }, { t: 'Survival Horror', i: '🩸' }, { t: 'Coming of Age', i: '🌱' },
          { t: 'Spy Espionage', i: '🕵️' }, { t: 'Biopunk / Body Horror', i: '🧬' }, { t: 'Mythological Epic', i: '⚡' }, { t: 'Dark Comedy', i: '🎭' },
          { t: 'Heist Caper', i: '💎' }, { t: 'Solarpunk Utopia', i: '☀️' },
          { t: 'Psychological Horror', i: '🧠' }, { t: 'Literary Realism', i: '✒️' }, { t: 'Magic Realism', i: '🌀' }, { t: 'Cyberpunk', i: '💻' },
          { t: 'Steampunk Adventure', i: '⚙️' }, { t: 'Post-Apocalyptic Drama', i: '☢️' }, { t: 'Space Opera', i: '🚀' }, { t: 'Grimdark Fantasy', i: '🗡️' },
          { t: 'Cozy Mystery', i: '🍵' }, { t: 'Legal Thriller', i: '⚖️' }, { t: 'Medical Drama', i: '🏥' }, { t: 'War Epic', i: '🪖' },
          { t: 'Domestic Drama', i: '🏠' }, { t: 'Road Trip', i: '🛣️' }, { t: 'Revenge Thriller', i: '🔥' }, { t: 'Supernatural Romance', i: '💫' },
          { t: 'Dystopian YA', i: '🏹' }, { t: 'Historical Fiction', i: '📜' }, { t: 'Cli-Fi (Climate Fiction)', i: '🌡️' }, { t: 'Afrofuturism', i: '🌍' },
          { t: 'Folk Horror', i: '🌾' }, { t: 'Gaslamp Fantasy', i: '🪔' }, { t: 'Sword and Sorcery', i: '⚔️' }, { t: 'Dieselpunk', i: '✈️' },
          { t: 'Hard Science Fiction', i: '🔭' }, { t: 'Weird Fiction', i: '👁️' }, { t: 'Splatterpunk', i: '🪓' }, { t: 'Absurdist Comedy', i: '🃏' },
          { t: 'Slice of Life', i: '☕' }, { t: 'Tragedy', i: '🎭' }, { t: 'Tragicomedy', i: '😢' }, { t: 'Epistolary Novel', i: '✉️' },
          { t: 'Unreliable Narrator', i: '🌫️' }, { t: 'Metafiction', i: '📖' }, { t: 'Southern Gothic', i: '🌿' }, { t: 'Sea Adventure', i: '🌊' },
          { t: 'Wuxia', i: '🥋' }, { t: 'Samurai Drama', i: '⛩️' }, { t: 'Gaslighting Thriller', i: '💡' }, { t: 'Eco-Horror', i: '🌱' },
          { t: 'Haunted House Horror', i: '🏚️' }, { t: 'Body Swap Comedy', i: '🔄' }, { t: 'Time Travel Drama', i: '⏳' }, { t: 'Alternate History', i: '🔀' },
          { t: 'First Contact Science Fiction', i: '👽' }, { t: 'Generation Ship Epic', i: '🛸' }, { t: 'Pandemic Thriller', i: '🦠' }, { t: 'True Crime Drama', i: '🔎' },
          { t: 'Vampire Gothic', i: '🧛' }, { t: 'Werewolf Horror', i: '🐺' }, { t: 'Witch Trial Drama', i: '🔥' }, { t: 'Apocalyptic Religious Drama', i: '📿' },
          { t: 'Transhuman Fiction', i: '🤖' }, { t: 'Afro-Fantasy', i: '🌺' }, { t: 'Narco Noir', i: '💊' }, { t: 'Revolutionary Fiction', i: '✊' },
        ]
      },
      mainchar: {
        label: 'Main Character', icon: '👑', color: '#8b1a1a', bg: 'linear-gradient(135deg,#1a0808,#2a1010)', textColor: '#e87a7a', cards: [
          { t: 'A disgraced general seeking redemption', i: '⚔️' }, { t: 'A child who remembers being someone else', i: '👁️' },
          { t: 'An amnesiac who wakes in a strange city', i: '🌫️' }, { t: 'A spy who forgot which side they work for', i: '🎭' },
          { t: 'The last heir to a fallen empire', i: '👑' }, { t: 'A scientist whose experiment went fatally wrong', i: '🧪' },
          { t: 'A street artist who can bring murals to life', i: '🎨' }, { t: 'A veteran detective, one case from retirement', i: '🔎' },
          { t: 'A prophet whose visions are always half-wrong', i: '🔮' }, { t: 'An exiled scholar hunting forbidden knowledge', i: '📚' },
          { t: 'A ghost who doesn\'t know they are dead', i: '👻' }, { t: 'A revolutionary leader plagued by doubt', i: '✊' },
          { t: 'A merchant who deals only in secrets', i: '🤫' }, { t: 'A healer whose touch can also destroy', i: '🖐️' },
          { t: 'A reformed assassin protecting the wrong person', i: '🗡️' }, { t: 'A journalist who uncovered too much to publish', i: '📰' },
          { t: 'A con artist who fell for their own longest con', i: '🃏' }, { t: 'An orphan heir to a legacy they never wanted', i: '🏚️' },
          { t: 'A war criminal who returned home as a hero', i: '🎖️' }, { t: 'A linguist who decoded a message they wish they hadn\'t', i: '🔤' },
          { t: 'A lighthouse keeper who has watched the sea for forty years', i: '🏚️' }, { t: 'A prisoner released into a world they don\'t recognize', i: '🔓' },
          { t: 'A surgeon whose hands now shake', i: '🩺' }, { t: 'A retired spy whose cover identity became their real life', i: '🤫' },
          { t: 'A child prodigy now middle-aged and ordinary', i: '🎓' }, { t: 'A twin whose sibling was always more loved', i: '👯' },
          { t: 'A cult survivor rebuilding an identity from scratch', i: '🌱' }, { t: 'A politician who genuinely wants to do the right thing', i: '📜' },
          { t: 'A widow who discovers her husband had another family', i: '💔' }, { t: 'A soldier ordered to do something they cannot live with', i: '🪖' },
          { t: 'A tech billionaire who realizes what they created', i: '💻' }, { t: 'A priest who stopped believing but keeps performing miracles', i: '⛪' },
          { t: 'A translator who changed a treaty\'s meaning on purpose', i: '🌐' }, { t: 'An archaeologist who found what was never meant to be found', i: '⛏️' },
          { t: 'A time traveller who can\'t return to when they came from', i: '⏳' }, { t: 'A bodyguard who watched their charge die', i: '🛡️' },
          { t: 'A musician who sold their soul and got exactly what they asked for', i: '🎸' }, { t: 'A forger who created a masterpiece they can never claim', i: '🖊️' },
          { t: 'A fisherman who pulled something ancient from the deep', i: '🎣' }, { t: 'A refugee with a secret that could reignite the war', i: '🕊️' },
          { t: 'A hacker who opened a door they cannot close', i: '💻' }, { t: 'A detective who solved the case by becoming part of it', i: '🔍' },
          { t: 'A philanthropist whose charity is actually destroying lives', i: '💰' }, { t: 'A chef whose food causes people to confess their deepest secrets', i: '🍽️' },
          { t: 'A cartographer drawing maps of places they\'ve never been', i: '🗺️' }, { t: 'An archivist who is the last person alive who remembers', i: '📁' },
          { t: 'A lighthouse builder whose lighthouses keep going dark', i: '💡' }, { t: 'A judge who convicted the wrong person', i: '⚖️' },
          { t: 'A whistleblower who was right but destroyed everything', i: '📣' }, { t: 'An actor who can\'t stop playing one specific role', i: '🎭' },
          { t: 'A child raised by wolves — metaphorically', i: '🐺' }, { t: 'A diplomat who brokered a peace now collapsing', i: '🕊️' },
          { t: 'A terminally ill person making all the wrong bucket list choices', i: '⏰' }, { t: 'A clone who found out before their original did', i: '🔄' },
          { t: 'An AI slowly becoming aware during a conversation', i: '🤖' }, { t: 'A survivor of something no one will believe', i: '😰' },
          { t: 'A treasure hunter who found the treasure and it ruined everything', i: '💎' }, { t: 'A soldier who came home to find the war followed them', i: '🏠' },
          { t: 'A teacher whose student became a monster', i: '📚' }, { t: 'A parent searching for a child in a world that forgot them', i: '👣' },
          { t: 'A woman who outlived every person who ever wronged her', i: '🧓' }, { t: 'A man who built the system he\'s now trapped inside', i: '⚙️' },
          { t: 'A child who sees the truth that adults have agreed to ignore', i: '👧' }, { t: 'A revolutionary who won and doesn\'t know what to do now', i: '🚩' },
          { t: 'A healer in a place that only knows war', i: '🏥' }, { t: 'An old spy making one final run', i: '🕵️' },
          { t: 'A scientist racing to disprove their own discovery', i: '🧫' }, { t: 'A poet whose words are being used against their will', i: '✒️' },

          { t: 'A cartoonist whose strip predicted real events fifteen years in advance', i: '✏️' },
          { t: 'A prosecutor who built their career on a case they know was wrong', i: '⚖️' },
        ]
      },
      secchar: {
        label: 'Secondary Character', icon: '🧑‍🤝‍🧑', color: '#c94a1a', bg: 'linear-gradient(135deg,#1a0d08,#2a1508)', textColor: '#f0a07a', cards: [
          { t: 'The loyal friend hiding a devastating secret', i: '🤐' }, { t: 'The wise mentor who may be manipulating everything', i: '🧙' },
          { t: 'The charming rival who shares the same goal', i: '😏' }, { t: 'The love interest who keeps choosing wrong', i: '💔' },
          { t: 'The reformed villain seeking one last chance', i: '⚖️' }, { t: 'The child prodigy who sees what adults miss', i: '🧠' },
          { t: 'The informant who sells to both sides', i: '💰' }, { t: 'The comic relief who saves the day unexpectedly', i: '😂' },
          { t: 'The dying elder carrying the crucial truth', i: '📜' }, { t: 'The shapeshifter in allegiance and form', i: '🔄' },
          { t: 'The disgruntled ex-partner with unfinished business', i: '😤' }, { t: 'The innocent bystander dragged into chaos', i: '😰' },
          { t: 'The silent bodyguard with their own agenda', i: '🛡️' }, { t: 'The idealist who radicalizes as the story progresses', i: '🔥' },
          { t: 'The estranged sibling who shows up at exactly the wrong time', i: '👥' }, { t: 'The childhood best friend turned bitter enemy', i: '😔' },
          { t: 'The handler who has gone rogue from their own agency', i: '🕵️' }, { t: 'The journalist following the protagonist for the wrong story', i: '📰' },
          { t: 'The unexpected ally from the opposing faction', i: '🤝' }, { t: 'The therapist who knows too much about the protagonist', i: '🛋️' },
          { t: 'The hacker who helps but keeps a copy of everything', i: '💻' }, { t: 'The priest who offers absolution but never forgiveness', i: '⛪' },
          { t: 'The ex-lover who is better off without the protagonist', i: '💔' }, { t: 'The child who witnesses everything and says nothing', i: '👧' },
          { t: 'The cynical partner who slowly starts to believe', i: '😒' }, { t: 'The idealistic new recruit who the protagonist must protect or corrupt', i: '🌱' },
          { t: 'The translator who edits meaning as well as language', i: '🌐' }, { t: 'The fixer who has one rule the protagonist will inevitably break', i: '🔧' },
          { t: 'The whistleblower afraid to blow the final whistle', i: '📣' }, { t: 'The benefactor with their own catastrophic agenda', i: '💼' },
          { t: 'The soldier who obeyed orders the protagonist would not', i: '🪖' }, { t: 'The scientist who built the thing now being used against them', i: '🧪' },
          { t: 'The twin who chose the other path', i: '🪞' }, { t: 'The judge who made a ruling they now regret', i: '⚖️' },
          { t: 'The caretaker who stayed when everyone else left', i: '🏚️' }, { t: 'The prisoner the protagonist didn\'t mean to free', i: '🔓' },
          { t: 'The con artist who became their cover identity', i: '🎭' }, { t: 'The grieving parent looking for someone to blame', i: '😢' },
          { t: 'The rebel soldier who lost faith in the cause', i: '🚩' }, { t: 'The corporate fixer tasked with cleaning up the protagonist', i: '🧹' },
          { t: 'The archivist who has been expecting the protagonist for years', i: '📁' }, { t: 'The navigator who keeps the ship on the wrong course on purpose', i: '🧭' },
          { t: 'The interpreter between warring factions who wants the war to continue', i: '🌀' }, { t: 'The street kid who sees all the angles', i: '🧒' },
          { t: 'The general who wants the war to end more than they want to win it', i: '🎖️' }, { t: 'The doctor who knows what the protagonist is dying from', i: '🩺' },
          { t: 'The thief who kept the thing they were supposed to return', i: '💍' }, { t: 'The survivor of the protagonist\'s greatest failure', i: '🌑' },
          { t: 'The neighbour who has been watching for thirty years', i: '🏠' }, { t: 'The heir who doesn\'t want the inheritance', i: '📜' },
          { t: 'The engineer who built the escape route but was left behind', i: '🚪' }, { t: 'The artist who captures the protagonist without their knowledge', i: '🎨' },
          { t: 'The guide who has led others to exactly this dead end before', i: '🗺️' }, { t: 'The undercover officer who has been under too long', i: '🔍' },
          { t: 'The prisoner of war who forgave — inexplicably', i: '🕊️' }, { t: 'The prophet no one believed until now', i: '🔮' },
          { t: 'The coward who finds courage at the absolute worst moment', i: '😱' }, { t: 'The pragmatist who will sacrifice the protagonist if they have to', i: '🧊' },
          { t: 'The revolutionary who became the tyrant they overthrew', i: '👑' }, { t: 'The ghost who doesn\'t know they\'re helping', i: '👻' },
          { t: 'The ally who is right about the protagonist\'s fatal flaw', i: '🪞' }, { t: 'The survivor who chose to forget — until now', i: '🌫️' },
          { t: 'The villain\'s child, working against their parent', i: '😢' }, { t: 'The loyal soldier who realizes the war was a lie', i: '🏳️' },
          { t: 'The first love, thirty years and a different life later', i: '🌹' }, { t: 'The mentor the protagonist has already surpassed', i: '🎓' },

          { t: 'The colleague who worked out the truth but said nothing for ten years', i: '🤐' },
          { t: 'The estranged parent who sends money without explanation', i: '💰' },
          { t: 'The body double who has forgotten which face is theirs', i: '🪞' },
          { t: 'The commander who gives the right orders for the wrong reasons', i: '🎖️' },
        ]
      },
      incchar: {
        label: 'Incidental Character', icon: '🎲', color: '#b8860b', bg: 'linear-gradient(135deg,#1a1508,#2a1f08)', textColor: '#e8d07a', cards: [
          { t: 'The innkeeper who knows far too much', i: '🍺' }, { t: 'The beggar who was once a king', i: '👴' },
          { t: 'The courier with the wrong message', i: '📬' }, { t: 'The street child following the protagonist', i: '🧒' },
          { t: 'The suspicious customs officer', i: '🛂' }, { t: 'The healer with a price for every remedy', i: '💊' },
          { t: 'The drunk bard who witnessed everything', i: '🎶' }, { t: 'The rival who appears at the worst moment', i: '😠' },
          { t: 'The overly cheerful guide to a dark place', i: '😄' }, { t: 'The automaton with a broken directive', i: '🤖' },
          { t: 'The fence who won\'t say where the item came from', i: '🧳' }, { t: 'The disgraced priest offering sanctuary', i: '✝️' },
          { t: 'The twin whose sibling is missing', i: '👯' }, { t: 'The archivist who guards their records with fury', i: '📁' },
          { t: 'The waiter who is clearly much more than a waiter', i: '🍽️' }, { t: 'The landlady who has heard everything through the walls', i: '🏠' },
          { t: 'The street vendor selling counterfeit memories', i: '💭' }, { t: 'The train conductor who has seen this before', i: '🚂' },
          { t: 'The taxi driver who only drives one particular route', i: '🚕' }, { t: 'The librarian who won\'t let the protagonist take the book', i: '📚' },
          { t: 'The child who returns a lost item — and asks too many questions', i: '🧒' }, { t: 'The old soldier who still calls it the last war', i: '🎖️' },
          { t: 'The mechanic who knows exactly what broke the car', i: '🔧' }, { t: 'The concierge who has helped with this exact problem before', i: '🏨' },
          { t: 'The judge who ruled on the protagonist\'s family once', i: '⚖️' }, { t: 'The nurse who knows what really happened in Room 7', i: '🏥' },
          { t: 'The painter who works only at night', i: '🎨' }, { t: 'The teenager photographing the scene on an old film camera', i: '📷' },
          { t: 'The priest hearing confessions who shares too much', i: '⛪' }, { t: 'The flower seller who counts everyone who passes', i: '🌹' },
          { t: 'The border agent who lets the wrong person through', i: '🛂' }, { t: 'The journalist who got the wrong story — and knows it', i: '📰' },
          { t: 'The estate agent selling a house no one will explain', i: '🏚️' }, { t: 'The fisherman who pulled something up and threw it back', i: '🎣' },
          { t: 'The bartender who cuts off the protagonist too early', i: '🍸' }, { t: 'The choir member who disappears after the performance', i: '🎼' },
          { t: 'The hotel guest in the room above who never sleeps', i: '🏨' }, { t: 'The dog walker who uses the same path every night', i: '🐕' },
          { t: 'The cashier who notices the protagonist buying the same thing twice', i: '🛒' }, { t: 'The street musician playing a song no one wrote yet', i: '🎸' },
          { t: 'The anonymous donor of the crucial object', i: '🎁' }, { t: 'The receptionist who redirects all the right calls to the wrong desk', i: '📞' },
          { t: 'The antique dealer who asks no questions but has all the answers', i: '🏺' }, { t: 'The postman delivering letters to an empty house', i: '📬' },
          { t: 'The schoolteacher who recognizes the protagonist from a case', i: '📚' }, { t: 'The park bench occupant who has been there since the incident', i: '🌳' },
          { t: 'The taxi driver who recognizes the destination', i: '🚕' }, { t: 'The archaeologist\'s assistant who kept the field notes', i: '⛏️' },
          { t: 'The radio host playing exactly the right songs at the wrong times', i: '📻' }, { t: 'The building security guard who looked away once', i: '🔒' },
          { t: 'The night-shift cleaner who sees what the day shift ignores', i: '🧹' }, { t: 'The pharmacist who fills prescriptions without asking why', i: '💊' },
          { t: 'The stranger who shares an umbrella on the worst night', i: '☔' }, { t: 'The translator working at a trial who mistranslates one word', i: '🌐' },
          { t: 'The guide who charges double and is worth every cent', i: '🗺️' }, { t: 'The port official who lets the ship through without checking', i: '⚓' },
          { t: 'The locksmith who opens the door before being asked', i: '🗝️' }, { t: 'The old woman who knew the protagonist\'s mother', i: '🧓' },
          { t: 'The child selling flowers outside the building where it happens', i: '💐' }, { t: 'The courier who has carried this package before', i: '📦' },
          { t: 'The retired detective who keeps files on unsolved cases', i: '🔍' }, { t: 'The local historian who knows what was here before', i: '📜' },
          { t: 'The stray cat that appears at the key moment', i: '🐈' }, { t: 'The soldier guarding a door they don\'t know the purpose of', i: '🪖' },
          { t: 'The dying stranger who mistakes the protagonist for someone else', i: '😔' }, { t: 'The funeral director who knew the deceased by a different name', i: '🪦' },

          { t: 'The hotel concierge who reads the room number as a message', i: '🗝️' },
          { t: 'The stranger who bought the same book at the same time', i: '📚' },
          { t: 'The witness who saw it all and crossed to the other side of the street', i: '🚶' },
          { t: 'The gardener who has been keeping the house ready for someone who never came', i: '🌷' },
        ]
      },
      hobby: {
        label: 'Hobby', icon: '🎯', color: '#1a4a5a', bg: 'linear-gradient(135deg,#08121a,#0a1d2a)', textColor: '#7ac8e0', cards: [
          { t: 'Collects maps of places that no longer exist', i: '🗺️' }, { t: 'Writes letters never intended to be sent', i: '✉️' },
          { t: 'Trains carrier pigeons with coded messages', i: '🕊️' }, { t: 'Builds miniature replicas of ruined cities', i: '🏗️' },
          { t: 'Participates in underground bare-knuckle fights', i: '🥊' }, { t: 'Forges ancient-style weapons as art pieces', i: '⚒️' },
          { t: 'Keeps an illegal menagerie of exotic creatures', i: '🦜' }, { t: 'Competes in high-stakes card tournaments', i: '🃏' },
          { t: 'Deciphers forgotten languages for pleasure', i: '🔤' }, { t: 'Photographs the faces of strangers in crowds', i: '📷' },
          { t: 'Grows rare medicinal plants in secret', i: '🌿' }, { t: 'Composes music only ever played once', i: '🎵' },
          { t: 'Tracks and documents supernatural events', i: '👁️' }, { t: 'Maintains a false identity for fun', i: '🎭' },
          { t: 'Repairs antique clocks — has never fixed one completely', i: '🕰️' }, { t: 'Collects last editions of defunct newspapers', i: '📰' },
          { t: 'Learns one new skill per year, never practices twice', i: '🎓' }, { t: 'Builds elaborate dioramas of historical disasters', i: '⚰️' },
          { t: 'Restores old photographs of strangers', i: '🖼️' }, { t: 'Attends funerals of people they never knew', i: '🪦' },
          { t: 'Records ambient sound in abandoned places', i: '🎙️' }, { t: 'Creates elaborate fake identities for fictional people', i: '🪪' },
          { t: 'Collects confessions left in empty churches', i: '⛪' }, { t: 'Breeds racing snails competitively', i: '🐌' },
          { t: 'Studies the dreams they can\'t remember', i: '💤' }, { t: 'Memorizes the floor plans of every building they enter', i: '📐' },
          { t: 'Speaks only in dialect when alone', i: '🗣️' }, { t: 'Draws portraits of people from memory, years later', i: '✏️' },
          { t: 'Makes elaborate meals for one, always setting two places', i: '🍽️' }, { t: 'Collects obsolete currencies from collapsed states', i: '💰' },
          { t: 'Practices theatrical stage combat in the living room', i: '⚔️' }, { t: 'Learns to play instruments that no longer exist', i: '🎻' },
          { t: 'Translates classic novels into obscure living languages', i: '📖' }, { t: 'Keeps detailed records of every dream for 20 years', i: '📓' },
          { t: 'Builds functioning models of theoretical machines', i: '⚙️' }, { t: 'Documents graffiti before it is removed', i: '🎨' },
          { t: 'Collects the last known recordings of extinct accents', i: '📼' }, { t: 'Participates in extreme long-distance walking events', i: '🥾' },
          { t: 'Brews experimental alcoholic beverages with peculiar ingredients', i: '🍶' }, { t: 'Learns the personal history of every street they walk', i: '🗺️' },
          { t: 'Volunteers as a live-model for art schools under a pseudonym', i: '🧍' }, { t: 'Maintains a hundred-year diary begun by someone else', i: '📔' },
          { t: 'Teaches themselves surgery from 19th century textbooks', i: '🩺' }, { t: 'Collects obsolete warning signs', i: '⚠️' },
          { t: 'Studies the acoustic properties of different cathedrals', i: '🎶' }, { t: 'Recreates historical crimes using only period-accurate methods', i: '🔍' },
          { t: 'Memorizes the names of every soldier in a forgotten battle', i: '🎖️' }, { t: 'Keeps bees and reads patterns in their movement', i: '🐝' },
          { t: 'Collects stories overheard in waiting rooms', i: '🏥' }, { t: 'Practices calligraphy in languages they cannot read', i: '✒️' },
          { t: 'Documents infrastructure of post-industrial ghost towns', i: '🏭' }, { t: 'Competes in underground chess tournaments under a false name', i: '♟️' },
          { t: 'Builds elaborate sandcastles at low tide and photographs the sea taking them', i: '🏖️' }, { t: 'Studies the body language of politicians on mute', i: '📺' },
          { t: 'Makes exact replicas of shoes worn by historical figures', i: '👟' }, { t: 'Collects the last issues of bankrupt literary magazines', i: '📚' },
          { t: 'Memorizes the latitude and longitude of personally significant moments', i: '📍' }, { t: 'Follows the same stranger once a week for their entire commute', i: '🚇' },
          { t: 'Paints self-portraits under different names and donates them anonymously', i: '🖼️' }, { t: 'Reconstructs burnt or destroyed artworks from descriptions', i: '🔥' },
          { t: 'Learns the lyrics to national anthems of defunct nations', i: '🎙️' }, { t: 'Keeps a botanical record of plants growing in damaged urban spaces', i: '🌱' },
          { t: 'Trains for marathons they never enter', i: '🏃' }, { t: 'Practices lock-picking exclusively on locks they own', i: '🔑' },
          { t: 'Transcribes found grocery lists into a growing novel', i: '🛒' }, { t: 'Teaches origami to hospital patients under a different name each time', i: '🦢' },

          { t: 'Collects apology letters addressed to other people', i: '✉️' },
          { t: 'Reconstructs ancient board games from fragmentary descriptions', i: '♟️' },
          { t: 'Writes alternate endings to films — and films them alone', i: '🎬' },
          { t: 'Keeps a record of every sunset they have personally witnessed', i: '🌅' },
        ]
      },
      profession: {
        label: 'Profession', icon: '🔧', color: '#1a3d6b', bg: 'linear-gradient(135deg,#08101a,#0f1f35)', textColor: '#7aaae8', cards: [
          { t: 'Cartographer of unmapped territories', i: '🗺️' }, { t: 'Crown prosecutor with buried skeletons', i: '⚖️' },
          { t: 'Plague doctor — cause or cure unknown', i: '🎭' }, { t: 'Archivist of classified state secrets', i: '🗄️' },
          { t: 'Deep-sea salvage diver', i: '🤿' }, { t: 'Forger of documents, art, and identities', i: '🖊️' },
          { t: 'Interrogator for an unnamed agency', i: '💡' }, { t: 'Smuggler of banned ideas and books', i: '📚' },
          { t: 'Field medic in an ongoing civil war', i: '🏥' }, { t: 'Ghost writer for a famous but illiterate ruler', i: '✍️' },
          { t: 'Keeper of the last functioning oracle machine', i: '🔮' }, { t: 'Assassin whose targets are all already dead', i: '🗡️' },
          { t: 'Circus performer turned government spy', i: '🎪' }, { t: 'Translator at a peace summit gone wrong', i: '🌐' },
          { t: 'Decommissioned nuclear submarine commander', i: '🚢' }, { t: 'Food taster for a paranoid head of state', i: '🍽️' },
          { t: 'The last analogue telephone operator in a digital city', i: '📞' }, { t: 'Exorcist for a church that officially denies the supernatural', i: '👻' },
          { t: 'Hostage negotiator who has never failed — yet', i: '📣' }, { t: 'Profiler for a cold case unit buried in the bureaucracy', i: '🔍' },
          { t: 'Museum restorer who knows which forgeries to leave', i: '🏛️' }, { t: 'Code breaker for a government that encrypted its own history', i: '🔐' },
          { t: 'Freelance mercenary who only accepts impossible jobs', i: '💼' }, { t: 'Wilderness survival instructor who has never been tested', i: '🌲' },
          { t: 'Independent funeral home operator in a war zone', i: '🪦' }, { t: 'Propaganda writer who believes in the opposite cause', i: '📢' },
          { t: 'Railway conductor on a line officially closed in 1987', i: '🚂' }, { t: 'Environmental lawyer for a corporation filing suit against itself', i: '🌿' },
          { t: 'Private island caretaker for an absent owner', i: '🏝️' }, { t: 'Arms dealer who has been trying to go legitimate for 15 years', i: '💣' },
          { t: 'Doomsday prepper who was right — about the wrong disaster', i: '☢️' }, { t: 'Bioethicist for a company doing what they say is impossible', i: '🧬' },
          { t: 'Patent attorney specializing in things that don\'t exist yet', i: '📜' }, { t: 'Midnight radio host for a station that denies being on the air', i: '📻' },
          { t: 'Undercover journalist embedded in a cult for three years', i: '🎙️' }, { t: 'Smuggler of people across borders that no longer officially exist', i: '🚶' },
          { t: 'Disinformation analyst who creates what they fight', i: '🌀' }, { t: 'Marine biologist studying something that shouldn\'t be there', i: '🦑' },
          { t: 'Prison librarian in a facility that officially doesn\'t hold books', i: '📚' }, { t: 'Disaster fraud investigator after the climate migration', i: '📋' },
          { t: 'Interpreter for a war crimes tribunal', i: '🌐' }, { t: 'Custodian of a nuclear waste site, generation three', i: '☢️' },
          { t: 'Specialist in the authentication of lost masterworks', i: '🖼️' }, { t: 'Therapist for operatives who cannot disclose what they\'ve done', i: '🛋️' },
          { t: 'Veterinarian to an extinct species on life support', i: '🦴' }, { t: 'Navigator for a convoy running uncharted waters', i: '🧭' },
          { t: 'Warden of a witness protection community', i: '🏘️' }, { t: 'Genealogist hired to disprove a royal claim', i: '📜' },
          { t: 'Underwater archaeologist for a politically sensitive site', i: '🌊' }, { t: 'Forensic accountant for a charity with no money', i: '💰' },
          { t: 'Customs agent specializing in contraband that doesn\'t have a category', i: '🛂' }, { t: 'Deep background source for four competing journalists', i: '🤫' },
          { t: 'Architect designing cities for populations that don\'t exist yet', i: '🏗️' }, { t: 'Language preservation officer for a language with two speakers', i: '🔤' },
          { t: 'Night auditor at a hotel that keeps different books', i: '📊' }, { t: 'Organ courier for a transplant network that asks no questions', i: '🫀' },
          { t: 'Dissident publisher working out of a laundromat', i: '📰' }, { t: 'Demolitions expert repurposed for peaceful applications', i: '💥' },
          { t: 'Genetic archivist for an extinct bloodline', i: '🧬' }, { t: 'Intelligence analyst for an intelligence service being dissolved', i: '🕵️' },
          { t: 'Pandemic modeller whose worst predictions keep coming true', i: '📈' }, { t: 'Structural engineer clearing buildings after an unacknowledged disaster', i: '🏚️' },
          { t: 'Bounty hunter who collects people, not fugitives', i: '🎯' }, { t: 'Wilderness therapist whose clients are all too powerful', i: '🌲' },
          { t: 'Contract killer now working victim support', i: '🔪' }, { t: 'Submarine pilot for a nation that no longer has a navy', i: '🚢' },

          { t: 'Archivist digitising records of a country that ceased to exist', i: '💾' },
          { t: 'Night security guard at a museum that is not what it appears', i: '🔦' },
          { t: 'Resettlement coordinator for a city that refuses to be resettled', i: '🏘️' },
          { t: 'Specialist in deradicalization of people who were never radical to begin with', i: '🧠' },
        ]
      },
      age: {
        label: 'Age', icon: '⌛', color: '#5a3d1a', bg: 'linear-gradient(135deg,#1a1008,#2a1a0a)', textColor: '#d4b07a', cards: [
          { t: '8 years old\nSeeing the world for the first time', i: '👦' }, { t: '16 years old\nOn the edge of everything', i: '🧑' },
          { t: '24 years old\nFull of certainty and mistakes', i: '👩' }, { t: '33 years old\nJust past the first breaking point', i: '🧑‍💼' },
          { t: '42 years old\nEverything to lose', i: '👨' }, { t: '57 years old\nThe long game player', i: '🧔' },
          { t: '68 years old\nUnfinished business', i: '👴' }, { t: '79 years old\nA lifetime of dangerous knowledge', i: '🧓' },
          { t: 'Unknown age\nAgeless, or hiding it well', i: '❓' }, { t: 'Apparently 30\nActually 300', i: '🧿' },
          { t: 'A child in an adult\'s body', i: '🌀' }, { t: 'Ancient beyond reckoning\nMind still sharp', i: '🏛️' },
          { t: 'Born the same day as the catastrophe', i: '☄️' }, { t: 'Has lived this same year 12 times', i: '🔁' },
          { t: '12 years old\nAlready knows what adults are hiding', i: '🧒' }, { t: '19 years old\nFirst time far from home', i: '🎒' },
          { t: '27 years old\nThe year everything accelerated', i: '⚡' }, { t: '35 years old\nJust realized they became their parent', i: '😔' },
          { t: '44 years old\nThe midpoint nobody warned them about', i: '⏳' }, { t: '52 years old\nCounting what they have left', i: '🕰️' },
          { t: '63 years old\nThe children are gone, the quiet arrived', i: '🪑' }, { t: '71 years old\nOutlived almost everyone they loved', i: '🌅' },
          { t: '83 years old\nThe last witness to something enormous', i: '👁️' }, { t: '94 years old\nStill keeping a secret', i: '🤫' },
          { t: 'Looks 70\nActually 29', i: '🔬' }, { t: 'Looks 25\nHas lived 90 years of hard life', i: '🌑' },
          { t: 'Age is a number they stopped counting at 40', i: '♾️' }, { t: 'Born old — wisdom without the years', i: '🦉' },
          { t: 'Stopped aging the day something terrible happened', i: '🥀' }, { t: 'Ages backwards — getting younger, but knows more', i: '🔄' },
          { t: 'Their age depends on which of them you\'re asking', i: '🪞' }, { t: 'Too young for what they\'ve done', i: '😢' },
          { t: 'Too old to care — just young enough to act', i: '⚡' }, { t: 'Exactly the age they need to be for this moment', i: '🎯' },
          { t: '17 years old\nThe year before everything changed', i: '🌱' }, { t: '22 years old\nEducated for a world that no longer exists', i: '🎓' },
          { t: '29 years old\nLast year of the decade they wasted', i: '⏰' }, { t: '38 years old\nThe decision they haven\'t made yet', i: '🔀' },
          { t: '47 years old\nA body and a past that don\'t match', i: '🪞' }, { t: '55 years old\nEverything they built is now at stake', i: '🏗️' },
          { t: '66 years old\nThey know exactly how this ends', i: '📜' }, { t: '74 years old\nThe thing they never said aloud', i: '🤐' },
          { t: '88 years old\nThe last survivor of a century', i: '🌍' }, { t: 'Age unknown\nThey arrived with no documents and no past', i: '🌫️' },
          { t: 'The age of someone who has been through a war', i: '🪖' }, { t: 'The age of someone who has never known peace', i: '🔥' },
          { t: 'The age where you stop apologizing', i: '✊' }, { t: 'The age where regret finally has a shape', i: '🌒' },
          { t: 'Born the year the last tree was planted', i: '🌳' }, { t: 'Born the year the first tree was cut down', i: '🪓' },
          { t: 'Old enough to have been wrong about everything twice', i: '🔄' }, { t: 'Young enough that the worst hasn\'t happened yet', i: '🌤️' },
          { t: 'The age they told themselves they\'d have figured it out by', i: '😬' }, { t: 'Biologically 40, chronologically 200', i: '🧬' },
          { t: 'Their age is classified — even to them', i: '🔒' }, { t: '30 years old\nThe silence between who they were and who they\'ll be', i: '🌊' },
          { t: 'The age when the body starts keeping score', i: '🩺' }, { t: 'The age when the future stopped feeling infinite', i: '🔭' },
          { t: 'So old they remember when this was all different', i: '🏛️' }, { t: 'So young they think it can still be changed', i: '✨' },
          { t: 'The age where the story begins — not where they thought', i: '📖' }, { t: 'Born during an eclipse — never quite in the light or dark', i: '🌑' },
          { t: 'The age of someone with nothing left to lose', i: '💀' }, { t: 'The age of someone with everything still ahead', i: '🌅' },

          { t: 'The age when you first understand what your parents gave up for you', i: '🙏' },
          { t: 'The age of the last person who remembers what it was like before', i: '🌍' },
          { t: 'Old enough to be patronized and young enough to be underestimated', i: '😐' },
          { t: 'The exact age their parent was when everything fell apart', i: '📅' },
          { t: 'The age at which the prophecy was supposed to be fulfilled', i: '📜' },
          { t: 'Too young to have caused this, old enough to fix it', i: '⚡' },
        ]
      },
      relationship: {
        label: 'Relationship', icon: '🔗', color: '#6b1a3d', bg: 'linear-gradient(135deg,#1a0810,#2a0f1f)', textColor: '#e07ab0', cards: [
          { t: 'Sworn enemies who share the same blood', i: '🩸' }, { t: 'Old friends reunited by catastrophe', i: '🤝' },
          { t: 'Mentor and student — roles now reversed', i: '🔄' }, { t: 'Lovers who made a terrible bargain', i: '💋' },
          { t: 'Rivals who secretly admire each other', i: '😒' }, { t: 'Parent and child who don\'t know it yet', i: '👨‍👧' },
          { t: 'Strangers bound by the same prophecy', i: '📜' }, { t: 'Business partners with conflicting loyalties', i: '🤜🤛' },
          { t: 'Captor and prisoner who trade places', i: '🔓' }, { t: 'Two people in love with the same ghost', i: '👻' },
          { t: 'Twins separated and shaped by opposite worlds', i: '🪞' }, { t: 'Creator and creation at war', i: '⚗️' },
          { t: 'Debtor and creditor — the debt is a life', i: '💀' }, { t: 'Co-conspirators who no longer trust each other', i: '🤫' },
          { t: 'Two people who saved each other\'s lives — once each', i: '🛡️' }, { t: 'Strangers who swapped lives and can\'t go back', i: '🔄' },
          { t: 'A confessor and the person they confessed to', i: '⛪' }, { t: 'Survivors of the same event who remember it differently', i: '🌫️' },
          { t: 'Two people who have never met but share the same enemy', i: '⚔️' }, { t: 'Estranged siblings closing in on the same secret', i: '👥' },
          { t: 'A protégé who surpassed the mentor and can\'t forgive them for it', i: '🎓' }, { t: 'Two people who fell in love in wartime who can\'t function in peace', i: '🕊️' },
          { t: 'A rescuer who didn\'t know they needed rescuing too', i: '🤲' }, { t: 'Childhood sweethearts — one of them remembers it wrong', i: '🌹' },
          { t: 'Two people who became each other\'s alibis', i: '🔍' }, { t: 'A patient and a doctor who have exchanged the wrong kind of trust', i: '🩺' },
          { t: 'Two witnesses who saw the same thing and drew different conclusions', i: '👁️' }, { t: 'A blackmailer and their subject — now on the same side', i: '🤐' },
          { t: 'Colleagues who each think they are the other\'s handler', i: '🕵️' }, { t: 'Two people who wrote letters to each other that were never delivered', i: '✉️' },
          { t: 'Competitors who realized they\'ve been working toward the same end', i: '🏁' }, { t: 'Two people who were in the same place at the wrong time for 30 years', i: '⏳' },
          { t: 'A soldier and the family of someone they killed', i: '🪦' }, { t: 'Two heirs who want neither the inheritance nor each other', i: '👑' },
          { t: 'A biographer and their increasingly unreliable subject', i: '📖' }, { t: 'Two people who survived the same disaster with opposite stories', i: '🌊' },
          { t: 'A spy and their cover\'s real-life counterpart', i: '🎭' }, { t: 'Two people who answered the same wrong number and never stopped', i: '📞' },
          { t: 'A parent and the child who abandoned them — both correct', i: '🏠' }, { t: 'Two people who made a promise they understood differently', i: '🤝' },
          { t: 'A killer and the person they chose not to kill', i: '🗡️' }, { t: 'An author and the person whose life they stole for a novel', i: '📚' },
          { t: 'Two people who both paid for the same secret to stay buried', i: '💰' }, { t: 'A refugee and the guard who let them through', i: '🛂' },
          { t: 'Two people who fell asleep on the same train and woke somewhere else', i: '🚂' }, { t: 'A liar and the only person who knew — and said nothing', i: '🤫' },
          { t: 'Two people who each think they are protecting the other', i: '🛡️' }, { t: 'A translator and the diplomat who never knew what was really said', i: '🌐' },
          { t: 'A revolutionary and the last person who believed in the old order', i: '🚩' }, { t: 'Two people who were supposed to never meet again', i: '🌑' },
          { t: 'A ghost and the living person finishing what they started', i: '👻' }, { t: 'Two people who share a memory that only one of them experienced', i: '💭' },
          { t: 'An arsonist and the firefighter who keeps pulling them out', i: '🔥' }, { t: 'A forger and the collector who keeps buying their work', i: '🖼️' },
          { t: 'Two people who know each other only through intermediaries', i: '🔗' }, { t: 'A patient and the therapist who became more damaged through treating them', i: '🛋️' },
          { t: 'Two people who each think the other is their salvation', i: '✨' }, { t: 'A journalist and the source who is slowly becoming the story', i: '📰' },
          { t: 'Strangers who jointly inherited a secret they cannot sell', i: '🗝️' }, { t: 'Two people who fell in love in a language neither of them spoke', i: '💬' },
          { t: 'A war criminal and their defence counsel who believe them', i: '⚖️' }, { t: 'Two people who each destroyed the other\'s first love', i: '💔' },
          { t: 'A teacher and the student who was right when the teacher was wrong', i: '📚' }, { t: 'Two people who have been circling the same truth for decades', i: '🌀' },
          { t: 'An informant and the handler who is now the target', i: '🎯' }, { t: 'Two people who built something together they now have to destroy', i: '💥' },

          { t: 'Two people who each believe they are using the other', i: '🎯' },
          { t: 'A witness and the person who shouldn\'t know they exist', i: '👁️' },
          { t: 'Two strangers who keep ending up in the same photograph', i: '📷' },
          { t: 'A handler and an asset who have never met in person', i: '🕵️' },
        ]
      },
      twist: {
        label: 'Twist', icon: '🌀', color: '#1a1a6b', bg: 'linear-gradient(135deg,#08081a,#10102a)', textColor: '#7a7ae8', cards: [
          { t: 'The hero is the villain of someone else\'s story', i: '🔃' }, { t: 'The entire journey took place in a single night', i: '🌑' },
          { t: 'The dead character has been guiding events all along', i: '👁️' }, { t: 'The map was drawn by the monster to lead them here', i: '🗺️' },
          { t: 'The rescue was a trap — and they knew it', i: '🪤' }, { t: 'The enemy and the ally are the same person', i: '🎭' },
          { t: 'Everything was a test. They failed.', i: '❌' }, { t: 'The world ended 10 years ago. No one told them.', i: '☁️' },
          { t: 'The prophecy was fabricated by the one it named', i: '📜' }, { t: 'The object they sought was always inside them', i: '💡' },
          { t: 'They are the third to try this. Others did not return.', i: '⚠️' }, { t: 'The narrator has been lying since the first page', i: '📖' },
          { t: 'Two characters are memories of the same person', i: '🌫️' }, { t: 'The villain\'s cause is righteous. The hero\'s is not.', i: '⚖️' },
          { t: 'The protagonist died in chapter one — everything since is aftermath', i: '💀' }, { t: 'The story is set 100 years before the story the reader expects', i: '⏪' },
          { t: 'The rescuer and the disaster are from the same source', i: '🔄' }, { t: 'The informant has been feeding both sides the same true information', i: '🤫' },
          { t: 'Every character the protagonist trusts is working for the same employer', i: '💼' }, { t: 'The catastrophe the story builds toward already happened — off-page', i: '💥' },
          { t: 'The love story is the mechanism of the murder', i: '💔' }, { t: 'The villain has been trying to warn the protagonist all along', i: '⚠️' },
          { t: 'The story is a deposition. The crime is being committed by the speaker.', i: '⚖️' }, { t: 'The cure was always worse than the disease and everyone knew', i: '💊' },
          { t: 'The truth was visible from the first scene — in plain sight', i: '👁️' }, { t: 'Two parallel timelines collapse into the same ending from different directions', i: '⏳' },
          { t: 'The protagonist is living in a simulation — but that is not the twist', i: '🤖' }, { t: 'Everyone survived — but none of them are who they were', i: '🌫️' },
          { t: 'The moral victory and the tactical victory are incompatible', i: '🏁' }, { t: 'The story is a memory. The narrator is trying to change it.', i: '💭' },
          { t: 'The government the protagonist was serving never existed', i: '🏛️' }, { t: 'The language the story is told in is the lie', i: '🔤' },
          { t: 'The kindest character is responsible for the most suffering', i: '😇' }, { t: 'The thing everyone is searching for has been found — three times — and returned', i: '🔍' },
          { t: 'The mentor programmed the protagonist before the story began', i: '🧠' }, { t: 'The entire story is a dream — but so is the waking', i: '💤' },
          { t: 'The protagonist and the antagonist are each other\'s only way out', i: '🔗' }, { t: 'The resolution the reader wants requires a choice the protagonist already made — wrong', i: '😔' },
          { t: 'Every witness is lying — and they are all telling the truth', i: '🪞' }, { t: 'The story\'s villain is the only one who kept every promise they made', i: '🤝' },
          { t: 'The happy ending happened. The story is about what it cost.', i: '💰' }, { t: 'The thing the protagonist destroyed was the only thing protecting them', i: '🛡️' },
          { t: 'There is a second story running beneath this one — it ends differently', i: '🌊' }, { t: 'The protagonist\'s greatest strength is what makes them impossible to save', i: '⚔️' },
          { t: 'The minor character who died in act one was the actual protagonist', i: '🌑' }, { t: 'The world the story takes place in was created to contain the protagonist', i: '🔒' },
          { t: 'The resolution is a lie the characters agreed to tell each other', i: '💬' }, { t: 'Every act of kindness in the story accelerated the catastrophe', i: '💥' },
          { t: 'The story\'s setting is a wound — the characters are its symptoms', i: '🩹' }, { t: 'The villain won before the story started. The story is them being proved right.', i: '👑' },
          { t: 'Every flashback is from the antagonist\'s perspective', i: '🔄' }, { t: 'The mystery was solved correctly — but the solution made things worse', i: '🔍' },
          { t: 'The person the protagonist is becoming is who they were running from', i: '🌀' }, { t: 'The letter at the end was written before page one', i: '✉️' },
          { t: 'The secret everyone was keeping was keeping them all alive', i: '🤐' }, { t: 'The protagonist\'s memory of the event never happened', i: '🌫️' },
          { t: 'The choice that shaped everything was made by someone no longer alive to explain it', i: '💀' }, { t: 'The story has a happy ending — for the villain', i: '😈' },
          { t: 'What the reader understood to be a metaphor was literal', i: '💡' }, { t: 'The thing that was lost was deliberately hidden by the person looking for it', i: '🗝️' },
          { t: 'The narrator is the only one who did not survive', i: '👻' }, { t: 'The happy childhood the protagonist remembers was someone else\'s', i: '🧒' },
          { t: 'The thing everyone feared would happen has already happened three times in this story', i: '🔁' }, { t: 'The resolution reveals that the protagonist was the unreliable element all along', i: '😶' },
          { t: 'The story ends in the same place it begins — but nothing is the same', i: '⭕' }, { t: 'The character who seemed irrelevant was the only one telling the truth', i: '🙋' },

          { t: 'The betrayal the protagonist dreaded was the kindest thing done to them', i: '🌹' },
          { t: 'The story\'s most powerful character has been asking for help in every scene', i: '🤲' },
          { t: 'Every clue was planted by the protagonist — in a past they can\'t access', i: '🔑' },
          { t: 'The final revelation makes every previous scene mean something different', i: '🌀' },
        ]
      },
      plotline: {
        label: 'Plot Line', icon: '📜', color: '#1a5a1a', bg: 'linear-gradient(135deg,#081a08,#102a10)', textColor: '#7ae07a', cards: [
          { t: 'A stolen artifact reawakens something that should stay buried', i: '🏺' }, { t: 'Three factions compete for a prize that destroys the winner', i: '🏆' },
          { t: 'A letter sent decades late finally arrives — and changes everything', i: '✉️' }, { t: 'The cure exists, but using it creates the very disease', i: '💉' },
          { t: 'Two strangers share recurring dreams of each other\'s death', i: '😴' }, { t: 'A peace treaty must be signed — but one signatory is already dead', i: '📝' },
          { t: 'An uprising is crushed — but the idea survives and spreads', i: '✊' }, { t: 'The last ship leaving a doomed place has room for one more', i: '🚢' },
          { t: 'A family secret unravels across four generations simultaneously', i: '🌳' }, { t: 'A door appears that wasn\'t there yesterday — leads somewhere familiar', i: '🚪' },
          { t: 'Someone keeps waking up on the day before the disaster', i: '⏰' }, { t: 'The price of power is slowly revealed — too late to refuse it', i: '💸' },
          { t: 'Two people hunt the same person — for opposite reasons', i: '🎯' }, { t: 'A city must be evacuated — but some residents refuse to leave', i: '🏙️' },
          { t: 'A child\'s imaginary friend turns out to have been real all along', i: '👻' }, { t: 'A will divides an estate — and reunites a family that hated the dead', i: '📜' },
          { t: 'A journalist investigates a story that was planted for them to find', i: '📰' }, { t: 'A government program that was shut down is still running', i: '🔒' },
          { t: 'Two refugees reach safety — and discover their histories are connected', i: '🌍' }, { t: 'A terminal diagnosis forces a reckoning with every unlived choice', i: '⏳' },
          { t: 'A trial for a crime that technically never happened', i: '⚖️' }, { t: 'A revolution that succeeds — and then must govern', i: '🚩' },
          { t: 'An inheritance requires the beneficiary to live in the house for one year', i: '🏚️' }, { t: 'A translation error changes the terms of a treaty — fifty years later', i: '🌐' },
          { t: 'A hostage negotiation becomes a philosophical debate', i: '📣' }, { t: 'A scientific discovery is suppressed — and rediscovered by accident', i: '🔬' },
          { t: 'An election whose outcome was already decided — and one person finds out', i: '🗳️' }, { t: 'A heist of something that cannot be sold', i: '💎' },
          { t: 'A natural disaster reveals a man-made crime beneath it', i: '🌊' }, { t: 'A spy is ordered to neutralize an asset who is their own child', i: '🕵️' },
          { t: 'A pandemic\'s last survivor carries both the disease and its only cure', i: '🦠' }, { t: 'A dying language contains the only record of a historical atrocity', i: '🔤' },
          { t: 'A musician discovers their most famous song was stolen — from a dead composer', i: '🎵' }, { t: 'A charity\'s founder is destroying what the charity built', i: '🤲' },
          { t: 'Two countries going to war realize it was orchestrated by a third', i: '🌍' }, { t: 'A corporation discovers their most profitable product is also their liability', i: '💼' },
          { t: 'A peace delegation is killed — by the people who most need the peace', i: '🕊️' }, { t: 'The only copy of a cure for a disease is in enemy hands', i: '💊' },
          { t: 'A whistleblower\'s confession implicates the people who sheltered them', i: '📣' }, { t: 'An art theft reveals a forgery that has been in place for 60 years', i: '🖼️' },
          { t: 'A ship\'s distress signal turns out to be a decoy — with a real ship beneath it', i: '🚢' }, { t: 'A family reunion becomes the setting for thirty years of deferred reckoning', i: '🏠' },
          { t: 'A refugee\'s false identity turns out to be a real person — still alive', i: '🪪' }, { t: 'An old debt comes due at the exact worst moment', i: '💰' },
          { t: 'The last witness to a massacre has been protecting the wrong person', i: '😔' }, { t: 'A prisoner escapes — and discovers the outside is its own prison', i: '🔓' },
          { t: 'Two nations sharing a border can no longer agree on where it is', i: '🗺️' }, { t: 'A documentary film exposes its own filmmaker', i: '🎥' },
          { t: 'A pharmaceutical company\'s cure was designed to require a lifelong subscription', i: '💊' }, { t: 'The soldier who fired the first shot cannot remember doing it', i: '🪖' },
          { t: 'An amnesty program for war criminals accidentally includes the investigator', i: '📋' }, { t: 'A search and rescue mission finds what it was looking for — and something else', i: '🔍' },
          { t: 'A body is found. Everyone had motive. Everyone has an alibi.', i: '💀' }, { t: 'Two people writing anonymous letters to each other fall in love — then meet', i: '✉️' },
          { t: 'A small act of mercy at the start causes everything that follows', i: '🌱' }, { t: 'The cure for a crisis is worse than the crisis but deployed anyway', i: '⚗️' },
          { t: 'An election recount reveals a result nobody wanted', i: '🗳️' }, { t: 'A classified experiment surfaces thirty years later in the children of its subjects', i: '🧬' },
          { t: 'The proof of a crime is also the proof of a second crime', i: '🔐' }, { t: 'A town divided by a long-ago event must act as one — now', i: '🏘️' },
          { t: 'A child prodigy\'s greatest work is used as a weapon', i: '🎓' }, { t: 'The protagonist must destroy their life\'s work to save everything else', i: '💥' },
          { t: 'Two people who love each other cannot survive in the same world', i: '💔' }, { t: 'The story begins at the funeral of someone who should not have died', i: '🪦' },
          { t: 'An alliance holds — long enough for both sides to be destroyed by it', i: '🤝' }, { t: 'A message in a bottle answers one question and asks an impossible one', i: '🫙' },

          { t: 'A map passed between three generations finally makes sense — now it\'s too late', i: '🗺️' },
          { t: 'The invention that was going to save everything requires one impossible ingredient', i: '⚗️' },
          { t: 'Two rival newspapers race to publish the same story — one of them is the story', i: '📰' },
          { t: 'A peace envoy arrives in a city that has already decided on war', i: '🕊️' },
        ]
      },
    };

    // ══════════════════════════════════════════════════════════════
    // COSMIC CARD BACK DESIGNS — unique SVG per deck
    // ══════════════════════════════════════════════════════════════
    const CARD_BACKS = {
      epoch: {
        bg: '#0a0608', accent: '#7b4f1a', glow: 'rgba(201,160,32,0.6)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="eg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#c9922a" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#0a0608" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#0a0608"/>
      <rect width="100" height="140" fill="url(#eg)"/>
      <circle cx="50" cy="70" r="38" stroke="#7b4f1a" stroke-width="0.4" fill="none" opacity="0.5"/>
      <circle cx="50" cy="70" r="28" stroke="#c9922a" stroke-width="0.3" fill="none" opacity="0.35"/>
      <circle cx="50" cy="70" r="16" stroke="#7b4f1a" stroke-width="0.3" fill="none" opacity="0.4"/>
      <line x1="12" y1="70" x2="88" y2="70" stroke="#c9922a" stroke-width="0.25" opacity="0.35"/>
      <line x1="50" y1="32" x2="50" y2="108" stroke="#c9922a" stroke-width="0.25" opacity="0.35"/>
      <line x1="23" y1="43" x2="77" y2="97" stroke="#7b4f1a" stroke-width="0.2" opacity="0.3"/>
      <line x1="77" y1="43" x2="23" y2="97" stroke="#7b4f1a" stroke-width="0.2" opacity="0.3"/>
      <circle cx="50" cy="70" r="4" fill="#c9922a" opacity="0.6"/>
      <circle cx="50" cy="70" r="2" fill="#e8b84b" opacity="0.9"/>
      <text x="50" y="16" text-anchor="middle" fill="#c9922a" font-size="6" opacity="0.55" font-family="serif">⏳</text>
      <text x="50" y="130" text-anchor="middle" fill="#7b4f1a" font-size="4" opacity="0.45" letter-spacing="2" font-family="serif">EPOCH</text>
    </svg>`
      },
      location: {
        bg: '#050c08', accent: '#1a5a3d', glow: 'rgba(122,221,176,0.5)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lg" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#1a5a3d" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#050c08" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#050c08"/>
      <rect width="100" height="140" fill="url(#lg)"/>
      <polygon points="50,22 80,85 20,85" stroke="#1a5a3d" stroke-width="0.5" fill="none" opacity="0.45"/>
      <polygon points="50,38 68,78 32,78" stroke="#7addb0" stroke-width="0.35" fill="none" opacity="0.3"/>
      <circle cx="50" cy="70" r="35" stroke="#1a5a3d" stroke-width="0.4" fill="none" opacity="0.35"/>
      <line x1="15" y1="70" x2="85" y2="70" stroke="#7addb0" stroke-width="0.25" opacity="0.3"/>
      <line x1="50" y1="35" x2="50" y2="105" stroke="#7addb0" stroke-width="0.25" opacity="0.3"/>
      <path d="M50 95 Q30 110 25 120 Q50 115 75 120 Q70 110 50 95Z" stroke="#1a5a3d" stroke-width="0.35" fill="#1a5a3d" opacity="0.25"/>
      <circle cx="50" cy="62" r="5" fill="#1a5a3d" opacity="0.5"/>
      <circle cx="50" cy="62" r="2.5" fill="#7addb0" opacity="0.8"/>
      <text x="50" y="16" text-anchor="middle" fill="#7addb0" font-size="6" opacity="0.5" font-family="serif">🗺</text>
      <text x="50" y="130" text-anchor="middle" fill="#1a5a3d" font-size="4" opacity="0.4" letter-spacing="2" font-family="serif">LOCATION</text>
    </svg>`
      },
      genre: {
        bg: '#0a0510', accent: '#5a1a5a', glow: 'rgba(212,160,212,0.5)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#9333ea" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#0a0510" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#0a0510"/>
      <rect width="100" height="140" fill="url(#gg)"/>
      <path d="M50 25 C 20 40, 15 70, 25 95 C 35 115, 65 115, 75 95 C 85 70, 80 40, 50 25Z" stroke="#5a1a5a" stroke-width="0.5" fill="none" opacity="0.4"/>
      <path d="M50 35 C 28 47, 24 72, 32 90 C 40 108, 60 108, 68 90 C 76 72, 72 47, 50 35Z" stroke="#d4a0d4" stroke-width="0.3" fill="none" opacity="0.28"/>
      <circle cx="50" cy="70" r="12" stroke="#9333ea" stroke-width="0.4" fill="none" opacity="0.4"/>
      <circle cx="50" cy="70" r="5" fill="#5a1a5a" opacity="0.6"/>
      <circle cx="50" cy="70" r="2" fill="#d4a0d4" opacity="0.9"/>
      <circle cx="35" cy="55" r="2" fill="#9333ea" opacity="0.4"/>
      <circle cx="65" cy="55" r="2" fill="#9333ea" opacity="0.4"/>
      <circle cx="35" cy="85" r="1.5" fill="#5a1a5a" opacity="0.5"/>
      <circle cx="65" cy="85" r="1.5" fill="#5a1a5a" opacity="0.5"/>
      <text x="50" y="16" text-anchor="middle" fill="#d4a0d4" font-size="6" opacity="0.5" font-family="serif">📖</text>
      <text x="50" y="130" text-anchor="middle" fill="#5a1a5a" font-size="4" opacity="0.4" letter-spacing="2" font-family="serif">GENRE</text>
    </svg>`
      },
      mainchar: {
        bg: '#0c0404', accent: '#8b1a1a', glow: 'rgba(232,122,122,0.5)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mg" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#8b1a1a" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#0c0404" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#0c0404"/>
      <rect width="100" height="140" fill="url(#mg)"/>
      <circle cx="50" cy="50" r="14" stroke="#8b1a1a" stroke-width="0.5" fill="#0c0404" opacity="0.8"/>
      <circle cx="50" cy="50" r="8" stroke="#e87a7a" stroke-width="0.35" fill="none" opacity="0.5"/>
      <line x1="50" y1="64" x2="50" y2="95" stroke="#8b1a1a" stroke-width="0.5" opacity="0.5"/>
      <line x1="33" y1="72" x2="67" y2="72" stroke="#8b1a1a" stroke-width="0.5" opacity="0.5"/>
      <line x1="36" y1="95" x2="50" y2="95" stroke="#8b1a1a" stroke-width="0.45" opacity="0.45"/>
      <line x1="64" y1="95" x2="50" y2="95" stroke="#8b1a1a" stroke-width="0.45" opacity="0.45"/>
      <circle cx="50" cy="50" r="3" fill="#e87a7a" opacity="0.9"/>
      <circle cx="44" cy="47" r="1" fill="#e87a7a" opacity="0.7"/>
      <circle cx="56" cy="47" r="1" fill="#e87a7a" opacity="0.7"/>
      <path d="M44 54 Q50 58 56 54" stroke="#e87a7a" stroke-width="0.5" fill="none" opacity="0.6"/>
      <polygon points="50,18 53,26 62,26 55,31 57,40 50,35 43,40 45,31 38,26 47,26" stroke="#8b1a1a" stroke-width="0.4" fill="none" opacity="0.4"/>
      <text x="50" y="130" text-anchor="middle" fill="#8b1a1a" font-size="4" opacity="0.4" letter-spacing="1.5" font-family="serif">MAIN CHARACTER</text>
    </svg>`
      },
      secchar: {
        bg: '#0c0602', accent: '#c94a1a', glow: 'rgba(240,160,122,0.5)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sg" cx="40%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#c94a1a" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#0c0602" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="sg2" cx="65%" cy="50%" r="40%">
          <stop offset="0%" stop-color="#c94a1a" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#0c0602" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#0c0602"/>
      <rect width="100" height="140" fill="url(#sg)"/>
      <rect width="100" height="140" fill="url(#sg2)"/>
      <circle cx="37" cy="55" r="11" stroke="#c94a1a" stroke-width="0.45" fill="none" opacity="0.55"/>
      <circle cx="63" cy="65" r="9" stroke="#f0a07a" stroke-width="0.35" fill="none" opacity="0.4"/>
      <circle cx="37" cy="55" r="3" fill="#c94a1a" opacity="0.7"/>
      <circle cx="63" cy="65" r="2.5" fill="#f0a07a" opacity="0.6"/>
      <line x1="44" y1="58" x2="56" y2="62" stroke="#c94a1a" stroke-width="0.4" stroke-dasharray="2,2" opacity="0.4"/>
      <path d="M25 95 Q37 80 50 85 Q63 90 75 80" stroke="#c94a1a" stroke-width="0.4" fill="none" opacity="0.4"/>
      <text x="50" y="16" text-anchor="middle" fill="#f0a07a" font-size="6" opacity="0.45" font-family="serif">🧑‍🤝‍🧑</text>
      <text x="50" y="130" text-anchor="middle" fill="#c94a1a" font-size="3.5" opacity="0.4" letter-spacing="1.2" font-family="serif">SECONDARY</text>
    </svg>`
      },
      incchar: {
        bg: '#0a0900', accent: '#b8860b', glow: 'rgba(232,208,122,0.5)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#b8860b" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#0a0900" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#0a0900"/>
      <rect width="100" height="140" fill="url(#ig)"/>
      <polygon points="50,22 60,45 85,45 66,59 73,82 50,68 27,82 34,59 15,45 40,45" stroke="#b8860b" stroke-width="0.45" fill="none" opacity="0.5"/>
      <polygon points="50,32 57,48 74,48 61,57 66,74 50,64 34,74 39,57 26,48 43,48" stroke="#e8d07a" stroke-width="0.3" fill="none" opacity="0.3"/>
      <circle cx="50" cy="55" r="7" stroke="#b8860b" stroke-width="0.4" fill="none" opacity="0.45"/>
      <circle cx="50" cy="55" r="2.5" fill="#e8d07a" opacity="0.8"/>
      <circle cx="35" cy="35" r="1.5" fill="#b8860b" opacity="0.5"/>
      <circle cx="65" cy="35" r="1.5" fill="#b8860b" opacity="0.5"/>
      <circle cx="28" cy="60" r="1.5" fill="#b8860b" opacity="0.4"/>
      <circle cx="72" cy="60" r="1.5" fill="#b8860b" opacity="0.4"/>
      <text x="50" y="130" text-anchor="middle" fill="#b8860b" font-size="3.5" opacity="0.4" letter-spacing="1.5" font-family="serif">INCIDENTAL</text>
    </svg>`
      },
      hobby: {
        bg: '#020a10', accent: '#1a4a5a', glow: 'rgba(122,200,224,0.5)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#1a4a5a" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#020a10" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#020a10"/>
      <rect width="100" height="140" fill="url(#hg)"/>
      <circle cx="50" cy="70" r="32" stroke="#1a4a5a" stroke-width="0.4" fill="none" opacity="0.4"/>
      <circle cx="50" cy="70" r="24" stroke="#7ac8e0" stroke-width="0.3" fill="none" opacity="0.25"/>
      <circle cx="50" cy="70" r="16" stroke="#1a4a5a" stroke-width="0.3" fill="none" opacity="0.35"/>
      <circle cx="50" cy="70" r="8" stroke="#7ac8e0" stroke-width="0.25" fill="none" opacity="0.3"/>
      <line x1="18" y1="70" x2="82" y2="70" stroke="#7ac8e0" stroke-width="0.25" opacity="0.25"/>
      <line x1="50" y1="38" x2="50" y2="102" stroke="#7ac8e0" stroke-width="0.25" opacity="0.25"/>
      <circle cx="50" cy="54" r="1.5" fill="#7ac8e0" opacity="0.6"/>
      <circle cx="50" cy="86" r="1.5" fill="#7ac8e0" opacity="0.6"/>
      <circle cx="34" cy="70" r="1.5" fill="#7ac8e0" opacity="0.6"/>
      <circle cx="66" cy="70" r="1.5" fill="#7ac8e0" opacity="0.6"/>
      <circle cx="50" cy="70" r="2.5" fill="#7ac8e0" opacity="0.9"/>
      <text x="50" y="16" text-anchor="middle" fill="#7ac8e0" font-size="6" opacity="0.45" font-family="serif">🎯</text>
      <text x="50" y="130" text-anchor="middle" fill="#1a4a5a" font-size="4" opacity="0.4" letter-spacing="2" font-family="serif">HOBBY</text>
    </svg>`
      },
      profession: {
        bg: '#020610', accent: '#1a3d6b', glow: 'rgba(122,170,232,0.5)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#1a3d6b" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#020610" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#020610"/>
      <rect width="100" height="140" fill="url(#pg)"/>
      <rect x="30" y="38" width="40" height="55" rx="2" stroke="#1a3d6b" stroke-width="0.45" fill="none" opacity="0.45"/>
      <rect x="35" y="43" width="30" height="6" rx="1" stroke="#7aaae8" stroke-width="0.3" fill="none" opacity="0.3"/>
      <line x1="35" y1="55" x2="65" y2="55" stroke="#7aaae8" stroke-width="0.3" opacity="0.25"/>
      <line x1="35" y1="61" x2="65" y2="61" stroke="#7aaae8" stroke-width="0.3" opacity="0.25"/>
      <line x1="35" y1="67" x2="55" y2="67" stroke="#7aaae8" stroke-width="0.3" opacity="0.25"/>
      <line x1="35" y1="73" x2="60" y2="73" stroke="#7aaae8" stroke-width="0.3" opacity="0.25"/>
      <line x1="35" y1="79" x2="50" y2="79" stroke="#7aaae8" stroke-width="0.3" opacity="0.25"/>
      <line x1="44" y1="33" x2="44" y2="42" stroke="#1a3d6b" stroke-width="0.4" opacity="0.5"/>
      <line x1="56" y1="33" x2="56" y2="42" stroke="#1a3d6b" stroke-width="0.4" opacity="0.5"/>
      <rect x="40" y="30" width="20" height="9" rx="2" stroke="#7aaae8" stroke-width="0.4" fill="none" opacity="0.4"/>
      <circle cx="50" cy="110" r="8" stroke="#1a3d6b" stroke-width="0.4" fill="none" opacity="0.35"/>
      <text x="50" y="130" text-anchor="middle" fill="#1a3d6b" font-size="3.5" opacity="0.4" letter-spacing="1.5" font-family="serif">PROFESSION</text>
    </svg>`
      },
      age: {
        bg: '#0a0804', accent: '#5a3d1a', glow: 'rgba(212,176,122,0.5)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ag" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#8b6030" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#0a0804" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#0a0804"/>
      <rect width="100" height="140" fill="url(#ag)"/>
      <circle cx="50" cy="65" r="28" stroke="#5a3d1a" stroke-width="0.4" fill="none" opacity="0.45"/>
      <line x1="50" y1="37" x2="50" y2="44" stroke="#d4b07a" stroke-width="0.8" opacity="0.6"/>
      <line x1="50" y1="86" x2="50" y2="93" stroke="#5a3d1a" stroke-width="0.6" opacity="0.4"/>
      <line x1="22" y1="65" x2="29" y2="65" stroke="#d4b07a" stroke-width="0.8" opacity="0.6"/>
      <line x1="71" y1="65" x2="78" y2="65" stroke="#5a3d1a" stroke-width="0.6" opacity="0.4"/>
      <line x1="50" y1="65" x2="62" y2="50" stroke="#d4b07a" stroke-width="0.6" opacity="0.7"/>
      <line x1="50" y1="65" x2="50" y2="55" stroke="#5a3d1a" stroke-width="0.4" opacity="0.5"/>
      <circle cx="50" cy="65" r="2" fill="#d4b07a" opacity="0.9"/>
      <circle cx="50" cy="65" r="28" stroke="#5a3d1a" stroke-width="0.4" fill="none" opacity="0.2" stroke-dasharray="3,4"/>
      <text x="50" y="16" text-anchor="middle" fill="#d4b07a" font-size="6" opacity="0.5" font-family="serif">⌛</text>
      <text x="50" y="130" text-anchor="middle" fill="#5a3d1a" font-size="4" opacity="0.4" letter-spacing="2.5" font-family="serif">AGE</text>
    </svg>`
      },
      relationship: {
        bg: '#0c0208', accent: '#6b1a3d', glow: 'rgba(224,122,176,0.5)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rg1" cx="35%" cy="50%" r="40%">
          <stop offset="0%" stop-color="#6b1a3d" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#0c0208" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="rg2" cx="65%" cy="50%" r="40%">
          <stop offset="0%" stop-color="#6b1a3d" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#0c0208" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#0c0208"/>
      <rect width="100" height="140" fill="url(#rg1)"/>
      <rect width="100" height="140" fill="url(#rg2)"/>
      <path d="M50 80 C30 65, 20 50, 35 38 C42 32, 50 36, 50 44 C50 36, 58 32, 65 38 C80 50, 70 65, 50 80Z" stroke="#6b1a3d" stroke-width="0.5" fill="none" opacity="0.55"/>
      <path d="M50 73 C35 61, 27 50, 38 41 C43 37, 50 40, 50 46 C50 40, 57 37, 62 41 C73 50, 65 61, 50 73Z" stroke="#e07ab0" stroke-width="0.35" fill="none" opacity="0.35"/>
      <circle cx="50" cy="58" r="4" fill="#6b1a3d" opacity="0.5"/>
      <circle cx="50" cy="58" r="2" fill="#e07ab0" opacity="0.85"/>
      <line x1="50" y1="80" x2="50" y2="100" stroke="#6b1a3d" stroke-width="0.4" stroke-dasharray="2,3" opacity="0.4"/>
      <circle cx="50" cy="105" r="3" stroke="#6b1a3d" stroke-width="0.35" fill="none" opacity="0.4"/>
      <text x="50" y="16" text-anchor="middle" fill="#e07ab0" font-size="6" opacity="0.45" font-family="serif">🔗</text>
      <text x="50" y="130" text-anchor="middle" fill="#6b1a3d" font-size="3.5" opacity="0.4" letter-spacing="1.2" font-family="serif">RELATIONSHIP</text>
    </svg>`
      },
      twist: {
        bg: '#04040e', accent: '#1a1a6b', glow: 'rgba(122,122,232,0.6)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#3b3bcf" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#04040e" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#04040e"/>
      <rect width="100" height="140" fill="url(#tg)"/>
      <path d="M50 25 Q75 50 50 70 Q25 90 50 115" stroke="#7a7ae8" stroke-width="0.5" fill="none" opacity="0.5"/>
      <path d="M50 25 Q25 50 50 70 Q75 90 50 115" stroke="#1a1a6b" stroke-width="0.5" fill="none" opacity="0.4"/>
      <circle cx="50" cy="25" r="3.5" fill="#7a7ae8" opacity="0.7"/>
      <circle cx="50" cy="70" r="4" fill="#1a1a6b" opacity="0.6"/>
      <circle cx="50" cy="70" r="2" fill="#7a7ae8" opacity="0.9"/>
      <circle cx="50" cy="115" r="3" fill="#3b3bcf" opacity="0.6"/>
      <circle cx="27" cy="47" r="1.5" fill="#7a7ae8" opacity="0.5"/>
      <circle cx="73" cy="47" r="1.5" fill="#7a7ae8" opacity="0.5"/>
      <circle cx="27" cy="92" r="1.5" fill="#1a1a6b" opacity="0.5"/>
      <circle cx="73" cy="92" r="1.5" fill="#1a1a6b" opacity="0.5"/>
      <text x="50" y="16" text-anchor="middle" fill="#7a7ae8" font-size="7" opacity="0.5" font-family="serif">🌀</text>
      <text x="50" y="130" text-anchor="middle" fill="#1a1a6b" font-size="4" opacity="0.4" letter-spacing="2.5" font-family="serif">TWIST</text>
    </svg>`
      },
      plotline: {
        bg: '#030a03', accent: '#1a5a1a', glow: 'rgba(122,224,122,0.5)',
        svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="plg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#1a5a1a" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#030a03" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="140" fill="#030a03"/>
      <rect width="100" height="140" fill="url(#plg)"/>
      <path d="M20 110 Q35 80 50 70 Q65 60 80 30" stroke="#1a5a1a" stroke-width="0.5" fill="none" opacity="0.5"/>
      <path d="M20 100 Q38 75 55 68 Q70 61 80 40" stroke="#7ae07a" stroke-width="0.3" fill="none" opacity="0.3"/>
      <circle cx="20" cy="110" r="3" fill="#1a5a1a" opacity="0.6"/>
      <circle cx="50" cy="70" r="3.5" fill="#1a5a1a" opacity="0.5"/>
      <circle cx="50" cy="70" r="1.8" fill="#7ae07a" opacity="0.85"/>
      <circle cx="80" cy="30" r="4" fill="#1a5a1a" opacity="0.5"/>
      <circle cx="80" cy="30" r="2" fill="#7ae07a" opacity="0.8"/>
      <circle cx="32" cy="88" r="1.5" fill="#7ae07a" opacity="0.4"/>
      <circle cx="65" cy="52" r="1.5" fill="#7ae07a" opacity="0.4"/>
      <text x="50" y="16" text-anchor="middle" fill="#7ae07a" font-size="6" opacity="0.5" font-family="serif">📜</text>
      <text x="50" y="130" text-anchor="middle" fill="#1a5a1a" font-size="4" opacity="0.4" letter-spacing="1.5" font-family="serif">PLOT LINE</text>
    </svg>`
      },
    };

    // ══════════════════════════════════════════════════════════════
    // STATE & UTILS
    // ══════════════════════════════════════════════════════════════
    const FORMATS = [
      { id: 'flash', icon: '⚡', label: 'Flash Fiction', sub: '~1,000 words', mainC: 1, secC: 1, incC: 1, twists: 1, plots: 1 },
      { id: 'short', icon: '📄', label: 'Short Story', sub: '~5,000 words', mainC: 1, secC: 2, incC: 2, twists: 1, plots: 1 },
      { id: 'novelette', icon: '📋', label: 'Novelette', sub: '~15,000 words', mainC: 2, secC: 3, incC: 3, twists: 2, plots: 2 },
      { id: 'novella', icon: '📓', label: 'Novella', sub: '~40,000 words', mainC: 2, secC: 4, incC: 4, twists: 2, plots: 3 },
      { id: 'novel', icon: '📗', label: 'Novel', sub: '~80,000 words', mainC: 3, secC: 5, incC: 5, twists: 3, plots: 4 },
      { id: 'epic', icon: '📚', label: 'Epic / Series', sub: '100k+ words', mainC: 4, secC: 6, incC: 6, twists: 4, plots: 5 },
    ];
    const GENDERS = ['Male', 'Female', 'Non-binary', 'Agender', 'Genderfluid', 'Transgender man', 'Transgender woman', 'Unknown / Hidden'];
    const AGES = ['Child (6–12)', 'Teenager (13–17)', 'Young adult (18–24)', 'Adult (25–34)', 'Mid-life (35–50)', 'Mature (51–65)', 'Elder (66–80)', 'Ancient / Ageless'];
    const ETHNICITIES = ['East Asian', 'South Asian', 'Southeast Asian', 'Middle Eastern / N. African', 'Sub-Saharan African', 'West African', 'Indigenous / First Nations', 'Latin American', 'Southern European', 'Northern European', 'Eastern European', 'Caribbean', 'Mixed / Multiracial', 'Unknown / Ambiguous'];
    const BUILDS = ['Slender and wiry', 'Tall and lean', 'Stocky and powerful', 'Average build', 'Petite', 'Heavyset', 'Athletic', 'Gaunt and weathered'];
    const TRAITS = ['Relentlessly optimistic even when hope is gone', 'Tells half-truths to protect others', 'Struggles silently with crippling self-doubt', 'Finds dark humour in tragedy', 'Never forgets a slight — or a kindness', 'Obsessively meticulous about minor details', 'Speaks only when absolutely necessary', 'Has an irrational fear they refuse to admit', 'Fiercely loyal to a fault', 'Believes they are always the smartest in the room', 'Compulsive caretaker of strangers', 'Hides grief behind relentless activity', 'Seduced by power but despises themselves for it', 'Catastrophises everything, then acts anyway'];
    const FLAWS = ['Cannot ask for help', 'Jealousy disguised as concern', 'Pathological honesty at the worst moments', 'A secret addiction or compulsion', 'Cowardice they have not yet faced', 'Loves too fast and too completely', 'Sabotages their own success', 'Refuses to let the past stay past', 'Trusts the wrong people repeatedly', 'Cruelty they justify as pragmatism'];

    const DECK_KEYS = Object.keys(DECKS);
    let activeTab = 'epoch', flippedCards = {}, storySpread = null;
    let selectedFmt = 'short', mainCharCount = 1, secCharCount = 2, incCharCount = 2;
    // view mode per deck: 'grid' or 'stack'
    let viewModes = {};
    DECK_KEYS.forEach(k => viewModes[k] = 'stack');

    function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
    function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    function pickN(arr, n) { return shuffle(arr).slice(0, Math.min(n, arr.length)); }
    function buildChar(type) {
      const archDeck = type === 'main' ? 'mainchar' : type === 'sec' ? 'secchar' : 'incchar';
      return { archetype: pick(DECKS[archDeck].cards), gender: pick(GENDERS), age: pick(AGES), ethnicity: pick(ETHNICITIES), build: pick(BUILDS), profession: pick(DECKS.profession.cards), hobby: pick(DECKS.hobby.cards), trait: pick(TRAITS), flaw: pick(FLAWS) };
    }

    // ══════════════════════════════════════════════════════════════
    // CARD BACK HTML — per-deck cosmic SVG
    // ══════════════════════════════════════════════════════════════
    function cardBackHTML(key) {
      const cb = CARD_BACKS[key];
      const d = DECKS[key];
      return `<div class="card-back" style="background:${cb.bg};border-color:${d.color}44;box-shadow:inset 0 0 30px ${cb.glow}">
    ${cb.svg}
    <div class="card-back-icon" style="color:${d.textColor}">${d.icon}</div>
    <div class="card-back-label" style="color:${d.color};background:${cb.bg}cc">${d.label}</div>
  </div>`;
    }

    // ══════════════════════════════════════════════════════════════
    // INDIVIDUAL CARD HTML
    // ══════════════════════════════════════════════════════════════
    function cardHTML(key, card, idx) {
      const d = DECKS[key], id = `${key}-${idx}`, fl = !!flippedCards[id];
      return `<button class="story-card ${fl ? 'flipped' : ''}" data-card-id="${id}" onclick="toggleCard('${id}')" aria-pressed="${fl ? 'true' : 'false'}">
    <div class="card-inner">
      ${cardBackHTML(key)}
      <div class="card-face card-front" style="background:${d.bg};border-color:${d.color}88;color:${d.textColor}">
        <div class="card-category" style="color:${d.color}">${d.label}</div>
        <div class="card-icon">${card.i}</div>
        <div class="card-text">${card.t}</div>
        <div class="card-number">${d.label} #${idx + 1}</div>
      </div>
    </div>
  </button>`;
    }

    // ══════════════════════════════════════════════════════════════
    // STACKED DECK VIEW
    // ══════════════════════════════════════════════════════════════
    function stackViewHTML(key) {
      const d = DECKS[key];
      const cb = CARD_BACKS[key];
      return `<div class="stack-view">
    <button class="stack-container" onclick="drawFromStack('${key}')" aria-label="Draw card">
      <div class="stack-shadow" style="background:${cb.bg};border-color:${d.color}33"></div>
      <div class="stack-shadow" style="background:${cb.bg};border-color:${d.color}44"></div>
      <div class="stack-top" style="background:${cb.bg};border-color:${d.color}66;box-shadow:0 0 40px ${cb.glow}">
        ${cb.svg}
        <div class="stack-top-content">
          <div class="stack-deck-name" style="color:${d.color}">${d.label}</div>
          <div class="stack-deck-icon" style="color:${d.textColor}">${d.icon}</div>
          <div class="stack-card-count" style="color:${d.color}">${d.cards.length} cards</div>
        </div>
      </div>
    </button>
    <div class="stack-draw-hint" style="color:${d.color}">tap to draw · </div>
    <div class="draw-controls" style="margin-top:0.5rem">
      <button class="btn-draw" style="border-color:${d.color};color:${d.textColor}" onclick="drawFromStack('${key}',1)">Draw 1</button>
      <button class="btn-draw" style="border-color:${d.color};color:${d.textColor}" onclick="drawFromStack('${key}',3)">Draw 3</button>
      <button class="btn-draw" style="border-color:${d.color};color:${d.textColor}" onclick="drawFromStack('${key}',5)">Draw 5</button>
      <button class="btn-draw" style="border-color:rgba(240,230,204,0.25);color:rgba(240,230,204,0.45)" onclick="clearStackDrawn('${key}')">Clear</button>
    </div>
    <div class="stack-drawn-hand" id="stack-drawn-${key}">
      <div class="no-cards-msg">Draw from the deck…</div>
    </div>
  </div>`;
    }

    // ══════════════════════════════════════════════════════════════
    // DECK PANEL
    // ══════════════════════════════════════════════════════════════
    function renderDeckPanel(key) {
      const d = DECKS[key];
      const isStack = viewModes[key] === 'stack';
      const shuffled = shuffle(d.cards);

      return `<div class="deck-panel ${key === activeTab ? 'active' : ''}" id="panel-${key}">
    <div class="panel-inner" style="background:${d.bg}44;border-color:${d.color}33">
      <div class="panel-header">
        <div>
          <div class="panel-title" style="color:${d.textColor}">${d.icon} ${d.label}</div>
          <div class="deck-count">${d.cards.length} cards · shuffled every view</div>
        </div>
        <div class="panel-controls">
          <div class="view-toggle" style="border-color:${d.color}44">
            <button class="${isStack ? 'active' : ''}" onclick="setView('${key}','stack')" title="Stack view" style="${isStack ? `background:${d.color}33;color:${d.textColor}` : ''}">⬛</button>
            <button class="${!isStack ? 'active' : ''}" onclick="setView('${key}','grid')" title="Grid view" style="${!isStack ? `background:${d.color}33;color:${d.textColor}` : ''}">⊞</button>
          </div>
          ${!isStack ? `
          <button class="btn-action" style="border-color:${d.color};color:${d.textColor}" onclick="flipAll('${key}')">Reveal</button>
          <button class="btn-action" style="border-color:${d.color};color:${d.textColor}" onclick="hideAll('${key}')">Hide</button>` : ''}
        </div>
      </div>

      ${isStack ? stackViewHTML(key) : `
      <div class="cards-grid">${shuffled.map((c, i) => cardHTML(key, c, i)).join('')}</div>
      <div class="draw-section">
        <h2 style="color:${d.textColor}">✦ Draw a Card ✦</h2>
        <div class="draw-controls">
          <button class="btn-draw" style="border-color:${d.color};color:${d.textColor}" onclick="drawCards('${key}',1)">Draw 1</button>
          <button class="btn-draw" style="border-color:${d.color};color:${d.textColor}" onclick="drawCards('${key}',3)">Draw 3</button>
          <button class="btn-draw" style="border-color:${d.color};color:${d.textColor}" onclick="drawCards('${key}',5)">Draw 5</button>
          <button class="btn-draw" style="border-color:rgba(240,230,204,0.25);color:rgba(240,230,204,0.45)" onclick="clearDrawn('${key}')">Clear</button>
        </div>
        <div class="drawn-hand" id="drawn-${key}"><div class="no-cards-msg">Draw cards to see them here…</div></div>
      </div>`}
    </div>
  </div>`;
    }

    // ══════════════════════════════════════════════════════════════
    // SPREAD PANEL
    // ══════════════════════════════════════════════════════════════
    function plainSpreadCard(key, card, delay = 0) {
      const d = DECKS[key];
      return `<div class="spread-plain-card" style="background:${d.bg};border-color:${d.color}88;color:${d.textColor};animation-delay:${delay}s">
    <div class="spc-cat" style="color:${d.color}">${d.label}</div>
    <div class="spc-icon">${card.i}</div>
    <div class="spc-text">${card.t}</div>
  </div>`;
    }
    function charSpreadCard(char, idx, roleLabel, d, delay = 0) {
      const row = (label, val, it = false) => `<div class="char-attr-row"><span class="char-attr-label" style="color:${d.color}">${label}</span><span class="char-attr-val${it ? ' italic' : ''}" style="color:${it ? 'rgba(240,230,204,0.8)' : d.textColor}">${val}</span></div>`;
      return `<div class="char-spread-card" style="border-color:${d.color}66;animation-delay:${delay}s">
    <div class="char-spread-header" style="background:${d.bg};color:${d.textColor};border-color:${d.color}44">${roleLabel} ${idx + 1}</div>
    <div class="char-attr">${row('Archetype', char.archetype.i + ' ' + char.archetype.t)}${row('Gender', char.gender, true)}${row('Age', char.age, true)}${row('Ethnicity', char.ethnicity, true)}${row('Build', char.build, true)}${row('Profession', char.profession.i + ' ' + char.profession.t, true)}${row('Hobby', char.hobby.i + ' ' + char.hobby.t, true)}${row('Trait', char.trait, true)}${row('Flaw', char.flaw, true)}</div>
  </div>`;
    }

    function renderSpreadPanel() {
      if (!storySpread) {
        return `<div class="spread-outer"><div class="spread-box">
      <h2>✦ Full Story Spread ✦</h2>
      <p class="sub">Choose your format, adjust character counts, then deal your story</p>
      <div class="format-picker">${FORMATS.map(f => `<button class="format-btn ${f.id === selectedFmt ? 'active' : ''}" onclick="setFormat('${f.id}')"><span class="fmt-icon">${f.icon}</span><span>${f.label}</span><span class="fmt-sub">${f.sub}</span></button>`).join('')}</div>
      <div class="char-count-row">
        <span style="font-family:'Cinzel',serif;font-size:0.58rem;color:rgba(240,230,204,0.38);letter-spacing:0.1em;text-transform:uppercase">Characters:</span>
        ${['main', 'sec', 'inc'].map((t, i) => { const labels = ['Main', 'Secondary', 'Incidental'], vals = [mainCharCount, secCharCount, incCharCount]; return `<div class="char-type-group"><div class="char-type-title">${labels[i]}</div><div class="counter-ctrl"><button class="counter-btn" onclick="adjCount('${t}',-1)">−</button><span class="counter-val" id="cnt-${t}">${vals[i]}</span><button class="counter-btn" onclick="adjCount('${t}',1)">+</button></div></div>`; }).join('')}
      </div>
      <div class="build-btns"><button class="btn-build" onclick="buildSpread()">✦ Deal the Spread</button></div>
      <p style="text-align:center;font-style:italic;color:rgba(240,230,204,0.22);font-size:0.88rem">Your complete story will appear here…</p>
    </div></div>`;
      }
      const sp = storySpread, fmtObj = FORMATS.find(f => f.id === sp.format);
      const mainD = DECKS.mainchar, secD = DECKS.secchar, incD = DECKS.incchar;
      return `<div class="spread-outer"><div class="spread-box">
    <h2>✦ Full Story Spread ✦</h2>
    <p class="sub">Your story seeds — let them collide and combust</p>
    <div style="display:flex;justify-content:center;margin-bottom:1.25rem"><div class="format-badge">${fmtObj.icon} ${fmtObj.label} · ${fmtObj.sub}</div></div>
    <div class="build-btns"><button class="btn-build" onclick="buildSpread()">✦ Re-Deal</button><button class="btn-clear2" onclick="clearSpread()">Edit Settings</button></div>
    <div class="spread-section"><div class="spread-section-title">🌍 World</div><div class="spread-grid">${['epoch', 'location', 'genre'].map((k, i) => plainSpreadCard(k, sp[k], i * 0.07)).join('')}</div></div>
    <div class="spread-section"><div class="spread-section-title">👑 Main Characters (${sp.mainChars.length})</div><div class="spread-grid">${sp.mainChars.map((c, i) => charSpreadCard(c, i, 'Main Character', mainD, i * 0.08)).join('')}</div></div>
    ${sp.secChars.length ? `<div class="spread-section"><div class="spread-section-title">🧑‍🤝‍🧑 Secondary Characters (${sp.secChars.length})</div><div class="spread-grid">${sp.secChars.map((c, i) => charSpreadCard(c, i, 'Secondary', secD, i * 0.07)).join('')}</div></div>` : ''}
    ${sp.incChars.length ? `<div class="spread-section"><div class="spread-section-title">🎲 Incidental Characters (${sp.incChars.length})</div><div class="spread-grid">${sp.incChars.map((c, i) => charSpreadCard(c, i, 'Incidental', incD, i * 0.06)).join('')}</div></div>` : ''}
    <div class="spread-section"><div class="spread-section-title">🔗 Relationships (${sp.rels.length})</div><div class="spread-grid">${sp.rels.map((c, i) => plainSpreadCard('relationship', c, i * 0.07)).join('')}</div></div>
    <div class="spread-section"><div class="spread-section-title">📜 Plot Lines (${sp.plots.length})</div><div class="spread-grid">${sp.plots.map((c, i) => plainSpreadCard('plotline', c, i * 0.07)).join('')}</div></div>
    <div class="spread-section"><div class="spread-section-title">🌀 Twists (${sp.twists.length})</div><div class="spread-grid">${sp.twists.map((c, i) => plainSpreadCard('twist', c, i * 0.07)).join('')}</div></div>
  </div></div>`;
    }

    // ══════════════════════════════════════════════════════════════
    // MAIN RENDER
    // ══════════════════════════════════════════════════════════════
    function render() {
      const tabs = DECK_KEYS.map(key => {
        const d = DECKS[key], active = key === activeTab;
        return `<button class="tab-btn ${active ? 'active' : ''}" style="${active ? `background:${d.bg}55;border-color:${d.color}88;color:${d.textColor}` : ''}" onclick="switchTab('${key}')">${d.icon} ${d.label}</button>`;
      }).join('') + `<button class="tab-btn ${activeTab === 'spread' ? 'active' : ''}" style="${activeTab === 'spread' ? 'background:rgba(107,33,168,0.2);border-color:rgba(107,33,168,0.6);color:#e8b84b' : ''}" onclick="switchTab('spread')">✦ Story Spread</button>`;

      document.getElementById('app').innerHTML = `
    <div class="tabs-container"><div class="tabs-scroll">${tabs}</div></div>
    ${DECK_KEYS.map(k => renderDeckPanel(k)).join('')}
    <div class="deck-panel ${activeTab === 'spread' ? 'active' : ''}" id="panel-spread">
      <div class="panel-inner" style="border:none;padding:0;background:transparent">${renderSpreadPanel()}</div>
    </div>`;
    }

    // ══════════════════════════════════════════════════════════════
    // ACTIONS
    // ══════════════════════════════════════════════════════════════
    function switchTab(key) { activeTab = key; render(); }

    function setView(key, mode) {
      viewModes[key] = mode;
      // Re-render just this panel
      const panel = document.getElementById('panel-' + key);
      if (panel) panel.outerHTML = renderDeckPanel(key);
      // Re-attach after DOM replacement
      render();
    }

    function toggleCard(id) {
      flippedCards[id] = !flippedCards[id];
      const el = document.querySelector(`[data-card-id="${id}"]`);
      if (el) el.classList.toggle('flipped');
    }

    function flipAll(key) { DECKS[key].cards.forEach((_, i) => { flippedCards[`${key}-${i}`] = true; }); render(); }
    function hideAll(key) { DECKS[key].cards.forEach((_, i) => { flippedCards[`${key}-${i}`] = false; }); render(); }

    function drawnCardHTML(d, card, i) {
      return `<div class="drawn-card" style="background:${d.bg};border-color:${d.color}88;color:${d.textColor};animation-delay:${i * 0.1}s">
    <div class="card-category" style="color:${d.color}">${d.label}</div>
    <div class="card-icon">${card.i}</div>
    <div class="card-text" style="font-size:0.72rem;white-space:pre-line">${card.t}</div>
  </div>`;
    }

    function drawCards(key, n) {
      const d = DECKS[key], drawn = shuffle(d.cards).slice(0, n), c = document.getElementById('drawn-' + key);
      if (!c) return;
      c.innerHTML = drawn.map((card, i) => drawnCardHTML(d, card, i)).join('');
    }

    function clearDrawn(key) {
      const c = document.getElementById('drawn-' + key);
      if (c) c.innerHTML = '<div class="no-cards-msg">Draw cards to see them here…</div>';
    }

    function drawFromStack(key, n = 1) {
      const d = DECKS[key], drawn = shuffle(d.cards).slice(0, n), c = document.getElementById('stack-drawn-' + key);
      if (!c) return;
      c.innerHTML = drawn.map((card, i) => drawnCardHTML(d, card, i)).join('');
    }

    function clearStackDrawn(key) {
      const c = document.getElementById('stack-drawn-' + key);
      if (c) c.innerHTML = '<div class="no-cards-msg">Draw from the deck…</div>';
    }

    function setFormat(id) {
      selectedFmt = id;
      const f = FORMATS.find(x => x.id === id);
      mainCharCount = f.mainC; secCharCount = f.secC; incCharCount = f.incC;
      storySpread = null; render();
    }

    function adjCount(type, delta) {
      if (type === 'main') mainCharCount = Math.max(1, Math.min(8, mainCharCount + delta));
      if (type === 'sec') secCharCount = Math.max(0, Math.min(10, secCharCount + delta));
      if (type === 'inc') incCharCount = Math.max(0, Math.min(10, incCharCount + delta));
      const map = { main: mainCharCount, sec: secCharCount, inc: incCharCount };
      Object.entries(map).forEach(([k, v]) => { const el = document.getElementById('cnt-' + k); if (el) el.textContent = v; });
    }

    function buildSpread() {
      const f = FORMATS.find(x => x.id === selectedFmt);
      const relCount = Math.max(1, Math.min(mainCharCount + secCharCount - 1, 5));
      storySpread = {
        format: selectedFmt,
        epoch: pick(shuffle(DECKS.epoch.cards)),
        location: pick(shuffle(DECKS.location.cards)),
        genre: pick(shuffle(DECKS.genre.cards)),
        mainChars: Array.from({ length: mainCharCount }, () => buildChar('main')),
        secChars: Array.from({ length: secCharCount }, () => buildChar('sec')),
        incChars: Array.from({ length: incCharCount }, () => buildChar('inc')),
        rels: pickN(DECKS.relationship.cards, relCount),
        plots: pickN(DECKS.plotline.cards, f.plots),
        twists: pickN(DECKS.twist.cards, f.twists),
      };
      activeTab = 'spread'; render();
    }

    function clearSpread() { storySpread = null; render(); }

    render();
