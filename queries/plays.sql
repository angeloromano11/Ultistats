DROP TABLE IF EXISTS plays CASCADE;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE plays (
    play_id uuid DEFAULT uuid_generate_v4(),
    game_id uuid REFERENCES games (game_id),
	teams_id uuid REFERENCES teams (teams_id),	
	player_id uuid REFERENCES players (player_id),
	tournamemnt VARCHAR,
	team VARCHAR,
	opponent VARCHAR,
    game_point_number INT,
	player_action VARCHAR,
	player_position FLOAT,
	receiver_position FLOAT,
	deffensive_player_position FLOAT,
	pass_type VARCHAR,
	catch_type VARCHAR,
	defense_type VARCHAR,
	pass_distance FLOAT,
    assistance INT,
	team_score INT,
	opposite_team_score INT,
	total_score INT,
	pass_completed BOOLEAN,
	turnover BOOLEAN,
	PRIMARY KEY (play_id));

INSERT INTO plays(game_id, teams_id, player_id, game_point_number, player_action,	player_position, pass_type, catch_type, defense_type, pass_distance, assistance, score,	total_score, pass_completed, turnover)
VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);