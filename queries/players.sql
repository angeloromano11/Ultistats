DROP TABLE IF EXISTS players CASCADE;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE players (
    player_id uuid DEFAULT uuid_generate_v4(),
    player_name VARCHAR,
    player_surname VARCHAR,
    player_age VARCHAR,
    player_hand VARCHAR,
	teams_id uuid REFERENCES teams (teams_id),
    PRIMARY KEY (player_id));
	
INSERT INTO players (player_name, player_surname, player_age, player_hand, teams_id)
VALUES ( $1 , $2, $3, $4, $5);


CREATE TABLE players_stats (
    goals BOOLEAN REFERENCES games (score),
    player_assistance REFERENCES games (player_assistance) ,
    player_turnovers REFERENCES games (player_goal),
    player_turnovers REFERENCES games (turnover),
)