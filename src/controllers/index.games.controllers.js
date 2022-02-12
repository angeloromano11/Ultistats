const { request } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'root',
  port: '5431',
});

const getGames = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM games');
    await res.status(200).json(response.rows);
    console.log(`200 GET sent correctly...`);
  } catch (error) {
    console.error(`Something went wrong in getGames :( ${error}`);
  }
};

const addGame = async (req, res) => {
  try {
    const {
      game_point_number,
      tournament,
      wind,
      surface,
      teams_name,
      point_1_team,
      point_2_team,
      point_3_team,
      point_4_team,
      point_5_team,
      point_6_team,
      point_7_team,
      point_8_team,
      point_9_team,
      point_10_team,
      point_11_team,
      point_12_team,
      point_13_team,
      point_14_team,
      point_15_team,
      total_score_team_,
    } = req.body;
    console.log(req.body);
    const response = await pool.query(
      'INSERT INTO games (game_point_number, tournament, wind, surface, teams_name, point_1_team, point_2_team, point_3_team, point_4_team, point_5_team, point_6_team, point_7_team, point_8_team, point_9_team,    point_10_team, point_11_team, point_12_team, point_13_team, point_14_team, point_15_team, total_score_team_) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)',
      [
        game_point_number,
        tournament,
        wind,
        surface,
        teams_name,
        point_1_team,
        point_2_team,
        point_3_team,
        point_4_team,
        point_5_team,
        point_6_team,
        point_7_team,
        point_8_team,
        point_9_team,
        point_10_team,
        point_11_team,
        point_12_team,
        point_13_team,
        point_14_team,
        point_15_team,
        total_score_team_,
      ]
    );
    await res.status(200).json(response.rows);
    console.log(`200 POST sent correctly...`);
  } catch (error) {
    console.error(`Something went wrong in addGame :( ${error}`);
  }
};

const getGameById = async (req, res) => {
  try {
    const id = req.params.game_id;
    const response = await pool.query(
      'SELECT * FROM Games WHERE game_id = $1',
      [id]
    );
    console.log(`displaying Games by id`);
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong getGamesById :( ${error}`);
  }
};

const deleteGame = async (req, res) => {
  try {
    const id = req.params.game_id;
    const GameName = req.body.teams_name;
    const response = await pool.query('DELETE FROM Games WHERE game_id = $1', [
      id,
    ]);
    console.log(`Game ${GameName} has been deleted succesfully`);
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong in deleteGame :( ${error}`);
  }
};

const updateGame = async (req, res) => {
  try {
    const id = req.params.game_id;
    const { teams_name, team_player_number } = req.body;
    const response = await pool.query(
      'UPDATE Games SET Games_name = $1, Game_player_number = $2 WHERE game_id = $3',
      [teams_name, team_player_number, id]
    );
    console.log(
      `Game ${(Games_name, Game_player_number)} has updated deleted succesfully`
    );
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong in updateGame :( ${error}`);
  }
};

module.exports = {
  getGames,
  addGame,
  getGameById,
  deleteGame,
  updateGame,
};
