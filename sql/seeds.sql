USE database_crawler;
INSERT INTO locations (name, description, createdAt, updatedAt)
VALUES("An Ominous Boulder Blocks Your Path!", "this is a grotto", "2021-02-07 22:36:58", "2021-02-07 22:36:58");

INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Fight minotaur", "Use the weapon that you received earlier and decide to stand your ground",0, 0, 0, 10, 0, 0);
INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Request trade", "You come up with a plan to offer a trade.", 0, 0, 0, 0, 0, 10);
INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Find a different solution","Attempt to tire out the minotaur", 0, 0, 0, 2, 10, 2);

INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("You attempt to ask the goblin for help because you are lost and have no clue on how to get out of the dungeon", "he gives you his weapon",  0, 0, 0, 0, 0, 10;
INSERT INTO options (text, resolution,str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Run away", "The goblin is approaching you with hungry eyes and seems to want to kill you. You notice that he is moving very slowly and is carrying a weapon that looks useful. You come up with a plan to steal his weapon and manage to run away unharmed....", 0, 0, 0, 0, 5, 0);
INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Fight", "The goblin is approaching you with hungry eyes and seems to want to kill you. You notice that he is moving very slowly and is carrying a weapon that looks useful. You come up with a plan to steal his weapon and manage to run away unharmed…", 0, 0, 0, 5,0, 0);

INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Fight Spider", "You do not fear spiders and have had a lot of experience in killing them at home.",  0, 0, 0, 10, 0, -5);
INSERT INTO options (text, resolution,str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Go for the treasure chest", "You attempt to run through to open the treasure chest, but you end up getting caught in some sticky web, which slows you down. You manage to reach the treasure chest, while the spider is still sleeping.", 0, 0, 0, 0, 5, -5);
INSERT INTO options (text, resolution, str_req, dex_req, int_req, str_gain, dex_gain, int_gain) 
VALUES ("Do nothing and proceed through the dungeon", "You are scared of spiders and know the risk of going into a room full of spider webs and believe that the best option is to move on and to not risk dying from the spider queen.", 0, 0, 0, 0,0,0);



