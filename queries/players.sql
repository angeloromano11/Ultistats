DROP TABLE IF EXISTS players CASCADE;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE players (
    player_id uuid DEFAULT uuid_generate_v4(),
    teams_id REFERENCES teams (teams_id),
    player_name VARCHAR,
    player_surname VARCHAR,
    player_age VARCHAR,
    player_hand VARCHAR,
    asistances REFERENCES games (asistance),
    goals REFERENCES games (score)
    player_assistance COUNT REFERENCES games (player_assistance) ,
    player_turnovers COUNT REFERENCES games (player_goal),
    player_turnovers COUNT REFERENCES games (turnover),
    PRIMARY KEY (player_id));
	
	
	