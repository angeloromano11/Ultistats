DROP TABLE IF EXISTS games CASCADE;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE games (
    game_id uuid DEFAULT uuid_generate_v4(),
    play_id uuid REFERENCES plays (play_id),
	teams_id uuid REFERENCES teams (teams_id),
    game_point_number INT,
    tournament VARCHAR,
    wind VARCHAR,
    surface VARCHAR,
	teams_name VARCHAR,
    game_date DATE,
	point_1_team INT,
    point_2_team INT,
    point_3_team INT,
    point_4_team INT,
    point_5_team INT,
    point_6_team INT,
    point_7_team INT,
    point_8_team INT,
    point_9_team INT,
    point_10_team INT,
    point_11_team INT,
    point_12_team INT,
    point_13_team INT,
    point_14_team INT,
    point_15_team INT,
    point_16_team INT,
    point_17_team INT,
    total_score_team_ INT,
	PRIMARY KEY (game_id));


INSERT INTO games (game_point_number, tournament, wind, surface, teams_name, point_1_team, point_2_team, point_3_team, point_4_team, point_5_team, point_6_team, point_7_team, point_8_team, point_9_team,    point_10_team, point_11_team, point_12_team, point_13_team, point_14_team, point_15_team, total_score_team_) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21);

/* Example INSERT INTO games (game_point_number, tournament, wind, surface, teams_name, point_1_team, point_2_team, point_3_team, point_4_team, point_5_team, point_6_team, point_7_team, point_8_team, point_9_team,    point_10_team, point_11_team, point_12_team, point_13_team, point_14_team, point_15_team, total_score_team_)
VALUES (1, 'windmill', '10km', 'grass', 'Sharks', '2022-02-12',0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3);
*/