DROP TABLE IF EXISTS plays CASCADE;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE plays (
    play_id uuid DEFAULT uuid_generate_v4(),
    game_id uuid REFERENCES games (game_id),
	teams_id uuid REFERENCES teams (teams_id),	
	player_id uuid REFERENCES players (player_id),
    game_point_number INT,
	player_action VARCHAR,
	player_position FLOAT,
	pass_type VARCHAR,
	catch_type VARCHAR,
	defense_type VARCHAR,
	pass_distance FLOAT,
    assistance INT,
	score BOOLEAN,
	total_score INT,
	pass_completed BOOLEAN,
	turnover BOOLEAN,
	PRIMARY KEY (play_id));