DROP TABLE IF EXISTS teams CASCADE;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE teams (
    teams_id uuid DEFAULT uuid_generate_v4(),
	teams_name VARCHAR,
	team_player_number INT,
	PRIMARY KEY (teams_id));

INSERT INTO teams(teams_name, team_player_number)
VALUES ( $1 , $2);