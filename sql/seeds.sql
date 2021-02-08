INSERT INTO location (name, description) 
VALUES ("Boulder", "An Ominous Boulder Blocks Your Path!");
INSERT INTO location (name, description) 
VALUES ("King Pigeon", 'A very luxurious pigeon wearing cowboy boots is seated on a throne between you and the exit to this room. It says to you: Hmm, yes. All those who seek to continue forward and escape this place must engage in a battle of wits with our majesty." The pigeon gestures to a chessboard laid out in front of it.');
INSERT INTO location (name, description) 
VALUES ("Furry room","In the next room there is a person (you think?) wearing a furry suit and holding nunchucks. The furry suit is purple. You cannot tell what animal it is supposed to represent, but you feel deeply unnerved. The furry perks up noticeable as you enter the room, but they seem to scan right past you as if they don’t see you. Hello? Is someone there? I forgot to put eyeholes in this thing! And I can’t seem to get it off. My god I’m so miserable. Please, help me!");

INSERT INTO location (name, description) 
VALUES ("Goblin Room", "As you are walking through the dungeon, a mysterious goblin approaches you with a weapon…");
INSERT INTO location (name, description) 
VALUES ("Spider Room", "You approach a room with spider webs but inside that room there is a treasure chest… You notice a big spider guarding the treasure chest.");
INSERT INTO location (name, description) 
VALUES ("Minotaur Room", "You find yourself in a dead end with only one way out, but a wild Minotaur appears and is blocking your path…");

INSERT INTO location (name, description) 
VALUES ("Cat Encounter", "You’re walking down a hallway and see a cat.");
INSERT INTO location (name, description) 
VALUES ("Mermaid on the Rock’, ‘You walk into a giant cavern with an underground lake, in the middle sits a rock with a mermaid sleeping on it. The mermaid awakens as you approach and beckons you to her. What do you do?");
INSERT INTO location (name, description) 
VALUES ("Old Couple", 'You are walking down a hallway when you hear the bickering of two people. After a minute of walking you cross paths with them. You notice an old man is carrying a solid steel rickshaw of supplies and the elderly woman is yelling at him about how white skirt is getting closer!!" What do you do?');

INSERT INTO location (name, description) 
VALUES ("White Skirt’s Howls’", "I delve deeper into the dungeon, and I start to hear howls echo through the dungeon. I continue onwards while the howls get louder and I start to hear stomps that shake the ceiling. As you are walking down a hallway you suddenly hear a crash in front of you. A man in a white skirt charged into the wall and reduced it to rubble without any problems. He stares at the ground as the dust settles. It's clear he wants a fight, what do i do?");

-- cat
INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Find a feather and use it to play with the cat", "The cat is a furmidable opponent as it furiously chases the feather in your hand. Your hand is very scratched up but you feel much faster" 0, 0, 0, 0, 5, 0);
INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Talk to the cat for a bit.", "The cat has nothing to say but looks mildly amused. Its tail flicks, signaling you to leave. At least you spun two tales at once.", 0, 0, 0, 0, 0, 2);
INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Chuck the cat as hard as your can into the air", "The cat is flung up into the air, but luckily lands purfectly on its feet, unharmed. The cat angrily looks back at you but walks away. You feel stronger but at what cost?...", 0, 0, 0, 3, 0, 0);

-- mermaid
INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Use your powerful legs to jump across the lake to reach the maiden", 'As you swim to the rock you realize the mermaid was a seal. It seems to laugh at you, shouting “AUR AUR AUR” At least I feel a bit stronger?... i need glasses...' 0, 0, 0, 3, 0, 0);
INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Use your quick movements to run on water.", "I get a running start to run on water but I take one step in the water and sink. I end up swimming the rest of the way. When I look up, I realize the mermaid was a seal. The seal escapes back into the water. At least I got to go on a nice swim… i need glasses..." 0, 0, 0, 0, 2, 0);
INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Strike up conversation with the mermaid.", "All you hear is “gulp gulp gulp” You realize she is a reverse-mermaid with the legs of a woman and the upper body of a fish. Luckily you speak fish and get a very interesting perspective of a mermaid stuck inside of a dungeon." 0, 0, 0, 0, 0, 5);

-- old couple
INSERT INTO options (text, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Offer to help pull the rickshaw", 'You help the couple pull the rickshaw to a safe spot in the dungeon. The elderly woman thanks you by pinching your cheeks and giving a sweet smile while the old man is clearly very thankful but is busy catching his breath. The woman tells you about the man in the white skirt who’s howls echo through the caves further on in the dungeon. She encourages you not to fight him head on even though you proved your strength and also mentions "white skirt" is also pretty fast, though she emphasizes his strength moreso.', 0, 0, 0, 5, 0, 0);
INSERT INTO options (text, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Quickly “barrow” from the old man's rickshaw when the couple aren't looking." "You grab an empty burlap sack. Figures…", 0, 0, 0, 0, 2, 0);
INSERT INTO options (text, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ('Inquire about the "white skirt"', 'The woman screams at you for not helping while the old man continues to drag the cart behind him. Maybe i should have helped them… As you watch them scurry away you notice the steel rickshaw has a fist-sized hole punched in the back of it. I wonder what they did to piss “white-skirt” off...', 0, 0, 0, 0, 0, 3);
