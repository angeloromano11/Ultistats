const { request } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'root',
  port: '5431',
});

const getPlayers = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM players');
    await res.status(200).json(response.rows);
    console.log(`200 GET sent correctly...`);
  } catch (error) {
    console.error(`Something went wrong in getPlayers :( ${error}`);
  }
};

const getPlayerById = async (req, res) => {
  try {
    const id = req.params.player_id;
    const response = await pool.query(
      'SELECT * FROM players WHERE player_id = $1',
      [id]
    );
    console.log(`displaying player by id`);
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong getPlayerById :( ${error}`);
  }
};

const getPlayerByTeam = async (req, res) => {
  try {
    const id = req.params.teams_id;
    const response = await pool.query(
      'SELECT * FROM players WHERE teams_id = $1',
      [id]
    );
    console.log(`displaying players by team`);
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong getPlayerByTeam :( ${error}`);
  }
};

const addPlayer = async (req, res) => {
  try {
    const {
      player_name,
      player_surname,
      player_birthdate,
      player_hand,
      player_sex,
      player_position,
      teams_id,
    } = req.body;
    console.log(req.body);
    const response = await pool.query(
      'INSERT INTO players (player_name, player_surname, player_birthdate, player_hand, player_sex, player_position, teams_id) VALUES ( $1 , $2, $3, $4, $5, $6, $7);',
      [
        player_name,
        player_surname,
        player_birthdate,
        player_hand,
        player_sex,
        player_position,
        teams_id,
      ]
    );
    await res.status(200).json(response.rows);
    console.log(`200 POST sent correctly...`);
  } catch (error) {
    console.error(`Something went wrong in addPlayer :( ${error}`);
  }
};

const deletePlayer = async (req, res) => {
  try {
    const id = req.params.player_id;
    const playerName = req.body.player_name;
    const response = await pool.query(
      'DELETE FROM players WHERE player_id = $1',
      [id]
    );
    console.log(`Game ${playerName} has been deleted succesfully`);
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong in deletePlayer :( ${error}`);
  }
};

const updatePlayer = async (req, res) => {
  try {
    const id = req.params.player_id;
    const {
      player_name,
      player_surname,
      player_birthdate,
      player_hand,
      player_sex,
      player_position,
    } = req.body;
    const response = await pool.query(
      'UPDATE players SET player_name = $1, player_surname = $2, player_birthdate = $3, player_hand = $4, player_sex = $5, player_position = $6 WHERE player_id = $3',
      [
        player_name,
        player_surname,
        player_birthdate,
        player_hand,
        player_sex,
        player_position,
      ]
    );
    console.log(
      `Game ${(player_name, player_surname)} has updated deleted succesfully`
    );
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong in updatePlayer :( ${error}`);
  }
};

module.exports = {
  getPlayers,
  getPlayerById,
  getPlayerByTeam,
  addPlayer,
  addPlayer,
  deletePlayer,
  updatePlayer,
};
