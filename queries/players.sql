DROP TABLE IF EXISTS players CASCADE;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE players (
    player_id uuid DEFAULT uuid_generate_v4(),
	player_name VARCHAR,
	player_surname VARCHAR,
	player_birthdate Date,
	player_hand VARCHAR,
	player_sex VARCHAR,
    player_position VARCHAR,
	teams_id uuid REFERENCES teams (teams_id),
	PRIMARY KEY (player_id));
	
INSERT INTO players (player_name, player_surname, player_birthdate, player_hand, player_position, teams_id)
VALUES ( $1 , $2, $3, $4, $5);


CREATE TABLE players_stats (
    goals BOOLEAN REFERENCES games (score),
    player_assistance REFERENCES games (player_assistance) ,
    player_turnovers REFERENCES games (player_goal),
    player_turnovers REFERENCES games (turnover),
)

-- INSERT INTO players (player_name, player_surname, player_birthdate, player_hand, player_position, teams_id)
-- VALUES ('Harri' , 'Bell', '2003-11-24', 'left', 'handler', '33a804e4-291d-4c77-a5fe-c839ad73dccb'),
-- ('Jorge' , 'Parrish', '2003-11-24', 'left', 'handler', '33a804e4-291d-4c77-a5fe-c839ad73dccb'),
-- ('Krystian' , 'Coombes', '2003-11-24', 'left', 'handler', '33a804e4-291d-4c77-a5fe-c839ad73dccb'),
-- ('Raul' , 'King', '2003-11-24', 'left', 'handler', '33a804e4-291d-4c77-a5fe-c839ad73dccb'),
-- ('Willem' , 'Milner', '2003-11-24', 'left', 'handler', '33a804e4-291d-4c77-a5fe-c839ad73dccb'),
-- ('Zackery' , 'tuli', '2003-11-24', 'rigth', 'handler', '33a804e4-291d-4c77-a5fe-c839ad73dccb'),
-- ('Viaan' , 'Lake', '2003-11-24', 'left', 'handler', '33a804e4-291d-4c77-a5fe-c839ad73dccb'),
-- ('Indigo' , 'Yang', '2003-11-24', 'left', 'handler', '33a804e4-291d-4c77-a5fe-c839ad73dccb'),
-- ('Kenneth' , 'Mccallum', '2003-11-24', 'left', 'handler', '33a804e4-291d-4c77-a5fe-c839ad73dccb'),
-- ('Kenzo' , 'Kramer', '2003-11-24', 'rigth', 'handler', '6b4b3a39-7721-4f64-8647-be668dad58d3'),
-- ('Shah' , 'Clements', '2003-11-24', 'left', 'handler', '6b4b3a39-7721-4f64-8647-be668dad58d3'),
-- ('Reece' , 'Adamson', '2003-11-24', 'left', 'handler', '6b4b3a39-7721-4f64-8647-be668dad58d3'),
-- ('Faraz' , 'Hull', '2003-11-24', 'left', 'handler', '6b4b3a39-7721-4f64-8647-be668dad58d3'),
-- ('Carter' , 'Kavanagh', '2003-11-24', 'rigth', 'handler', '6b4b3a39-7721-4f64-8647-be668dad58d3'),
-- ('Arianne' , 'Gray', '2003-11-24', 'rigth', 'handler', '6b4b3a39-7721-4f64-8647-be668dad58d3'),
-- ('Harvie' , 'Yatra', '2003-11-24', 'left', 'handler', '6b4b3a39-7721-4f64-8647-be668dad58d3'),
-- ('Daanish' , 'Guerrero', '2003-11-24', 'rigth', 'handler', '6b4b3a39-7721-4f64-8647-be668dad58d3'),
-- ('Dainton' , 'Johnston', '2003-11-24', 'left', 'handler', '6b4b3a39-7721-4f64-8647-be668dad58d3'),
-- ('Isaak' , 'Sheldon', '2003-11-24', 'rigth', 'handler', '6b4b3a39-7721-4f64-8647-be668dad58d3'),
-- ('Mustafa' , 'Booth', '2003-11-24', 'rigth', 'handler', '6b4b3a39-7721-4f64-8647-be668dad58d3')

 
 
 

