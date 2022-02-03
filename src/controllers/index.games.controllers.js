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
    const response = await pool.query('SELECT * FROM Games');
    await res.status(200).json(response.rows);
    console.log(`200 GET sent correctly...`);
  } catch (error) {
    console.error(`Something went wrong in getGames :( ${error}`);
  }
};

const addGame = async (req, res) => {
  try {
    const { teams_name, team_player_number } = req.body;
    console.log(req.body);
    const response = await pool.query(
      'INSERT INTO teams(teams_name, team_player_number) VALUES ($1, $2)',
      [teams_name, team_player_number]
    );
    await res.status(200).json(response.rows);
    console.log(`200 POST sent correctly...`);
  } catch (error) {
    console.error(`Something went wrong in addGame :( ${error}`);
  }
};

const getGameById = async (req, res) => {
  try {
    const id = req.params.Games_id;
    const response = await pool.query(
      'SELECT * FROM Games WHERE Games_id = $1',
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
    const id = req.body.Games_id;
    const GameName = req.body.teams_name;
    const response = await pool.query('DELETE FROM Games WHERE Games_id = $1', [
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
    const id = req.params.Games_id;
    const { teams_name, team_player_number } = req.body;
    const response = await pool.query(
      'UPDATE Games SET Games_name = $1, Game_player_number = $2 WHERE Games_id = $3',
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
