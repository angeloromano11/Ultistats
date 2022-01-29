DROP TABLE IF EXISTS games CASCADE;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE games (
    game_id uuid DEFAULT uuid_generate_v4(),
	team_offense REFERENCES teams (teams_name),
	team_defense REFERENCES teams (teams_name),	
	player_action VARCHAR,
	player_offense_a REFERENCES players (player_id)
	Player_offense_b REFERENCES players (player_id)
	player_defense VARCHAR,
	player_offense_a_position FLOAT,
	Player_offense_b_position FLOAT,
	player_defense_position FLOAT,
	pass_type VARCHAR,
	catch_type VARCHAR,
	defense_type VARCHAR,
	play_start_point FLOAT,
	pass_distance FLOAT,
    assistance INT,
    player_assistance VARCHAR,
	score BOOLEAN,
    player_goal VARCHAR,
	total_score INT,
	turnover BOOLEAN,
	PRIMARY KEY (game_id));
							
							
							