USE vapq6biflsoeehen;

INSERT INTO Items (name, intelligence, strength, dexterity, description)
VALUES ("Magikul Toom!", 3, 0, 0, "The language is too complex to read... But it makes me FEEL smarter!");
INSERT INTO Items (name, intelligence, strength, dexterity, description)
VALUES ("BIG EFFIN SUWOARD", 0, 3, 0, "THIS EFFFEN SSSSSUWWWOOOAAARD IS AS BIG AS TWO O' YOU STACKED ON TOP O' YA!");
INSERT INTO Items (name, intelligence, strength, dexterity, description)
VALUES ("White Skirt", 0, 2, 2, "This stylish skirt makes you feel stronger and faster. It also does a good job of covering up the unmentionables. Why did you wander into this dungeon naked?");


INSERT INTO Locations (name, description, img) 
VALUES ("Boulder", "An Ominous Boulder Blocks Your Path!", "images/boulder-event.png");
INSERT INTO Locations (name, description, img) 
VALUES ("King Pigeon", 'A very luxurious pigeon wearing cowboy boots is seated on a throne between you and the exit to this room. It says to you "Hmm, yes. All those who seek to continue forward and escape this place must engage in a battle of wits with our majesty." The pigeon gestures to a chessboard laid out in front of it.', "images/pigeon.png");
INSERT INTO Locations (name, description, img) 
VALUES ("Furry room",'In the next room there is a person (you think?) wearing a furry suit and holding nunchucks. The furry suit is purple. You cannot tell what animal it is supposed to represent, but you feel deeply unnerved. The furry perks up noticeable as you enter the room, but they seem to scan right past you as if they don’t see you. "Hello? Is someone there? I forgot to put eyeholes in this thing! And I can’t seem to get it off. My god I’m so miserable. Please, help me!"', "images/furry-event.jpg");

INSERT INTO Locations (name, description, img, ItemId) 
VALUES ("The Wise Rock", "I hear a cave-in up ahead but luckily it's nowhere near me. I continue onwards and soon I meet a rock golem. I watch him as he practices magic. He weaves magic spells together like an experienced magician but suddenly stops when he hears me and chucks a barrel sized rock in my direction like it's nothing. It clearly wasn’t meant to hit me but to scare me. What do I do?", "images/rock-golem.jpg", 1);

INSERT INTO Locations (name, description, img) 
VALUES ("Goblin Room", "As you are walking through the dungeon, a mysterious goblin approaches you with a weapon…", "images/goblin.jpg");
INSERT INTO Locations (name, description, img) 
VALUES ("Spider Room", "You approach a room with spider webs but inside that room there is a treasure chest… You notice a big spider guarding the treasure chest.", "images/spider.jpg");
INSERT INTO Locations (name, description, img) 
VALUES ("Minotaur Room", "You find yourself in a dead end with only one way out, but a wild Minotaur appears and is blocking your path…", "images/minotaur.jpg");

INSERT INTO Locations (name, description, img, ItemId) 
VALUES ("Monkey in the Forest", "I continue on my adventure and soon enter an underground rainforest with giant trees. How the trees grew underground, I know not but this is the most enchanting place I’ve been to in my life. It’s quiet except for some leaves rustling. There's no wind in the dungeon… I prepare for the worst. Suddenly a monkey appears, jumping from tree to vine. It’s quicker than anything I've seen in the dungeon. But hilariously it's too quick for its own mind to comprehend and slams into a tree trunk. What do I do?", "images/monkey.jpg", 2);

INSERT INTO Locations (name, description, img) 
VALUES ("Cat Encounter", "You’re walking down a hallway and see a cat.", "images/cat-event.jpg");
INSERT INTO Locations (name, description, img) 
VALUES ("Mermaid on the Rock", "You walk into a giant cavern with an underground lake, in the middle sits a rock with a mermaid sleeping on it. The mermaid awakens as you approach and beckons you to her. What do you do?", "images/mermaid-event.jpg");
INSERT INTO Locations (name, description, img) 
VALUES ("Old Couple", 'You are walking down a hallway when you hear the bickering of two people. After a minute of walking you cross paths with them. You notice an old man is carrying a solid steel rickshaw of supplies and the elderly woman is yelling at him about how white skirt is getting closer!!" What do you do?', "images/old-couple-event.jpg");

INSERT INTO Locations (name, description, img, ItemId) 
VALUES ("White Skirt’s Howls", "I delve deeper into the dungeon, and I start to hear howls echo through the dungeon. I continue onwards while the howls get louder and I start to hear stomps that shake the ceiling. As you are walking down a hallway you suddenly hear a crash in front of you. A man in a white skirt charged into the wall and reduced it to rubble without any problems. He stares at the ground as the dust settles. It's clear he wants a fight, what do i do?", "images/bossfight-white-skirt.png", 3);

-- raffi
-- boulder
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Smash the boulder (with your fist)", "Your fist is sore, but you feel stronger. The boulder collapses into a heap of rubble.", 0, 0, 0, 5, 0, 0, 1);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Deftly leap over the boulder", "Wow! What a feat of acrobatics! You feel lighter on your feet already!", 0, 0, 0, 2, 3, 0, 1);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Use your head?", "You smash your head repeatedly into the boulder until it somehow ends up out of your way (?) You seem to be having trouble recalling personal details, and the coordination in your fingers is on the fritz. Could you be concussed?", 0, 0, 0, 5, 0, 0, 1);


-- pigeon
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Sweep the pieces off the board and smash his majesty with it.", "I mean I guess it was the obvious solution. I bet you’re not very fun at parties...", 0, 0, 0, 2, 3, 0, 2);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Walk around the pigeon and out of the room.", "I mean I guess it was the obvious solution. I bet you’re not very at parties...", 0, 0, 0, 0, 1, 2, 2);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Try to beat the pigeon at chess.", "Wow ok. You did not know what you were getting yourself into, this pigeon must be grandmaster level at chess. At the same time you can tell it’s not really trying to win. After taking all of your pieces except your king and 1 pawn, the pigeon seems content to keep the game going on indefinitely. After what feels like hours, the pigeon actually falls asleep, and you move to the next room feeling slightly sheepish.", 0, 0, 0, 0, 0, 5, 2);

-- furry
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Attempt to help them remove the costume", "After what seems like a herculean effort on both of your parts, you manage to divest the furry of their fuzzy prison. When you finally get the mask off them you scream in shock, they look exactly like you! You make a mad dash for the exit to the next room, not bothering to look back until the door is closed behind you.", 0, 0, 0, 3, 0, 2, 3);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Try to steal their nunchucks", "Those nunchucks do look like they’ll come in handy. Still, that’s kind of a dick move, ya know? Who hurt you? You perform a few practice swings of the nunchucks and feel a little bit more dexterous.", 0, 0, 0, 0, 3, 2, 3);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Insult their costume", "You insult the furrys costume. The howl that they let out in response contains so much furry (I mean fury) that for a second you feel scared for your life. However it quickly becomes clear that the furry isn’t capable of very coordinated movement while blind and dressed up like they are, and you dance lithely around them to the exit of the room as they stumble towards where you were when you last spoke, arms stretched out for balance. You feel lighter on your feet!", 0, 0, 0, 0, 5, 0, 3);


-- bossfight golem
INSERT INTO Options (Text, resolution, failure, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Chuck a rock back at him", "I send a rock into his general direction and I hit him! It must’ve rocked his world because he makes a run for it. I search the area and recover a Magikul Toom he left behind.", "I try to heave a rock above me to throw but I am far too weak. I drop the rock onto myself and crush myself. My vision goes black.", 7, 0, 0, 7, 0, 0, 4);
INSERT INTO Options (Text, resolution, failure, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Anger him and bait him to throw more rocks to tire him out.", "The rock golem hurls a bassault (basalt) of rocks at your position but you are too fast and easily dodge them. The rock golem is out of breath quickly and has to stop. I take this chance to run past him and manage to snatch a bag. In the bag is a Magikul Toom!", "I try my best to dodge the bassault (basalt) of rocks but it’s too much to dodge. My vision goes black when a rock strikes me. I am dead.", 0, 5, 0, 0, 5, 2, 4);
INSERT INTO Options (Text, resolution, failure, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Attempt to recite your strongest magic spell to annihilate him.", "I successfully cast a fireball towards him and as it is flying towards him, he easily dispels it. The fire loses all momentum and disappears. He walks towards me and starts gushing about how I am the smartest thing he's seen in a while. He talks for hours but I am too scared to speak up to leave, but eventually he gives me an item called the Magikul Toom and thanks me for speaking with him.", "I attempt to cast a fireball but it explodes in my hands catching me on fire. The rock golem looks shocked and tries to help put out the fires with rocks. It's successful… too successful. My vision fades to black. I am dead.", 0, 0, 7, 0, 0, 7, 4);

-- austin
-- goblin
INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Ask for help", "He gives you his knowledge of the area",  0, 0, 0, 0, 0, 5, 5);
INSERT INTO Options (Text, resolution,str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Run away", "The goblin is approaching you with hungry eyes and seems to want to kill you. You notice that he is moving very slowly and is carrying a weapon that looks useful. You come up with a plan to steal his weapon and manage to run away unharmed....", 0, 0, 0, 0, 5, 0, 5);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Fight", "The goblin is approaching you with hungry eyes and seems to want to kill you. You notice that he is moving very slowly and is carrying a weapon that looks useful. You come up with a plan to steal his weapon and manage to run away unharmed…", 0, 0, 0, 5, 0, 0, 5);

-- spider
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Fight Spider", "You do not fear spiders and have had a lot of experience in killing them at home.",  0, 0, 0, 5, 0, 0, 6);
INSERT INTO Options (Text, resolution,str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Go for the treasure chest", "You attempt to run through to open the treasure chest, but you end up getting caught in some sticky web, which slows you down. You manage to reach the treasure chest, while the spider is still sleeping.", 0, 0, 0, 0, 5, 0, 6);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Do nothing and proceed through the dungeon", "You are scared of spiders and know the risk of going into a room full of spider webs and believe that the best option is to move on and to not risk dying from the spider queen.", 0, 0, 0, 0, 0, 5, 6);

-- minotaur
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Fight minotaur", "Use the weapon that you received earlier and decide to stand your ground",0, 0, 0, 5, 0, 0, 7);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Request trade", "You come up with a plan to offer a trade.", 0, 0, 0, 0, 0, 5, 7);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Find a different solution","Attempt to tire out the minotaur", 0, 0, 0, 1, 4, 1, 7);

-- monkey
INSERT INTO Options (Text, resolution, failure, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Draw your sword and charge the monkey", "My sword cleaves the monkey in half. It did nothing to harm me but there’s no way I could’ve beaten it if it charged me. I search the jungle and find a primitive treehouse. Upon searching it I found a BIG EFFIN SUWOARD.", "I swing at the monkey but my sword only hits a root. Before I know it the monkey is already behind me and I only see him because he snaps my neck so hard my head is on backwards. My vision goes black. I am dead.", 15, 0, 0, 10, 0, 0, 8);
INSERT INTO Options (Text, resolution, failure, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Challenge the monkey to a race across the jungle.", "Even though his body is much more suited to the jungle my fitness allows you to beat him. The monkey gives you a BIG EFFIN SUWOARD. He clearly doesn't need such a big weapon that slows him down so much.", "He easily outspeeds me. In an effort to catch up I overshoot a vine and fall to the floor. My vision goes black I am dead.", 0, 20, 0, 0, 10, 0, 8);
INSERT INTO Options (Text, resolution, failure, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Talk to the monkey", "The monkey replies with an EEK EEK but he looks friendly enough. I leave some fruit on a nearby leaf and continue on my adventure. Before I make it out of the jungle the monkey catches up to me with fruit still smeared over his face. With a loud thump he drops a BIG EFFIN SUWOARD near me. I give a nod to the monkey and the monkey runs back into the forest.", "Something I said to the monkey made it angry. He throws a coconut at my head. My vision goes black. I am dead.", 0, 0, 10, 0, 0, 10, 8);

-- peter
-- cat
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Find a feather and use it to play with the cat", "The cat is a furmidable opponent as it furiously chases the feather in your hand. Your hand is very scratched up but you feel much faster", 0, 0, 0, 0, 5, 0, 9);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Tell the cat a story.", "The cat has nothing to say but looks mildly amused. Its tail flicks, signaling you to leave. At least you spun two tales at once...", 0, 0, 0, 0, 0, 2, 9);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Chuck the cat as hard as your can into the air", "The cat is flung farley up into the air, but luckily lands purfectly on its feet, unharmed. The cat angrily looks back at you but walks away. You feel stronger but at what cost?...", 0, 0, 0, 3, 0, 0, 9);

-- mermaid
INSERT INTO Options (Text, resoslution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Use your powerful legs to jump across the lake to reach the maiden", 'As you swim to the rock you realize the mermaid was a seal. It seems to laugh at you, shouting “AUR AUR AUR” At least I feel a bit stronger?... i need glasses...', 0, 0, 0, 4, 1, 0, 10);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Use your quick movements to run on water.", "I get a running start to run on water but I take one step in the water and sink. I end up swimming the rest of the way. When I look up, I realize the mermaid was a seal. The seal escapes back into the water. At least I got to go on a nice swim… i need glasses...", 0, 0, 0, 1, 3, 0, 10);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Strike up conversation with the mermaid.", "All you hear is “gulp gulp gulp” You realize she is a reverse-mermaid with the legs of a woman and the upper body of a fish. Luckily you speak fish and get a very interesting perspective of a mermaid stuck inside of a dungeon.", 0, 0, 0, 0, 0, 5, 10);

-- old couple
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Offer to help pull the rickshaw", 'You help the couple pull the rickshaw to a safe spot in the dungeon. The elderly woman thanks you by pinching your cheeks and giving a sweet smile while the old man is clearly very thankful but is busy catching his breath. The woman tells you about the man in the white skirt who’s howls echo through the caves further on in the dungeon. She encourages you not to fight him head on even though you proved your strength and also mentions "white skirt" is also pretty fast, though she emphasizes his strength moreso.', 0, 0, 0, 5, 0, 0, 11);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Quickly “barrow” from the old man's rickshaw when the couple aren't looking.", "You grab an empty burlap sack. Figures…", 0, 0, 0, 0, 2, 1, 11);
INSERT INTO Options (Text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ('Inquire about the "white skirt"', 'The woman screams at you for not helping while the old man continues to drag the cart behind him. Maybe i should have helped them… As you watch them scurry away you notice the steel rickshaw has a fist-sized hole punched in the back of it. I wonder what they did to piss “white-skirt” off...', 0, 0, 0, 0, 0, 3, 11);
-- bossfight
-- whiteskirt
INSERT INTO Options (Text, resolution, failure, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Fight him head on", "We charge at each other. Due to my overwhelming strength he collapses first. I win this battle but I can't help but think about how sore my body is. He was a worthy opponent. I search his body and I find a White Skirt", "We charge at each other. His raw strength is leagues above my own as I'm sent back into a wall. My vision goes black. I’m dead.", 40, 0, 0, 10, 0, 0, 12);
INSERT INTO Options (Text, resolution, failure, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Run away from the man and lure him into a pitfall trap you prepared", "I run as fast as I can in the opposite direction. The man nearly catches me but my quicker maneuvering allows me to turn corners quicker, while he is sent into a wall and has to catch up. I wait behind a pitfall covered with thin planks and the man charges towards me but due to his excessive stomping the planks crumbles much like sand beneath him and he is impaled on the wooden stakes. I find a White Skirt on his corpse.", "Before I can even get around the first corner the man catches up easily and knocks me onto the floor with one punch. My vision goes black. I’m dead.", 0, 30, 0, 0, 10, 0, 12);
INSERT INTO Options (Text, resolution, failure, str_req, dex_req, int_req, str_gain, dex_gain, int_gain, LocationId) 
VALUES ("Use an invisibility spell to hide", "I quickly cast an invisibility spell, vanish instantly and hide in one of the passage ways. The man charges where I once was but is very confused when he charges into nothing. He continues a mad dash down the hallway I came down as I follow him curiously. After a few minutes he collapses from exhaustion and I pick a White Skirt off of his body.", "You do not know any invisibility magic, but the man in the white skirt made you disappear into a wall. You are dead.", 0, 0, 25, 0, 0, 10, 12);
