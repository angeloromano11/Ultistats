const { request } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'root',
  port: '5431',
});

const getTeams = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM teams');
    await res.status(200).json(response.rows);
    console.log(`200 GET sent correctly...`);
  } catch (error) {
    console.error(`Something went wrong in getTeams :( ${error}`);
  }
};

const addTeam = async (req, res) => {
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
    console.error(`Something went wrong in addTeam :( ${error}`);
  }
};

const getTeamsById = async (req, res) => {
  try {
    const id = req.params.teams_id;
    const response = await pool.query(
      'SELECT * FROM teams WHERE teams_id = $1',
      [id]
    );
    console.log(`displaying teams by id`);
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong getTeamsById :( ${error}`);
  }
};

const deleteTeam = async (req, res) => {
  try {
    const id = req.body.teams_id;
    const teamName = req.body.teams_name;
    const response = await pool.query('DELETE FROM teams WHERE teams_id = $1', [
      id,
    ]);
    console.log(`team ${teamName} has been deleted succesfully`);
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong in deleteTeam :( ${error}`);
  }
};

const updateTeam = async (req, res) => {
  try {
    const id = req.params.teams_id;
    const { teams_name, team_player_number } = req.body;
    const response = await pool.query(
      'UPDATE teams SET teams_name = $1, team_player_number = $2 WHERE teams_id = $3',
      [teams_name, team_player_number, id]
    );
    console.log(
      `team ${(teams_name, team_player_number)} has updated deleted succesfully`
    );
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong in updateTeam :( ${error}`);
  }
};

module.exports = {
  getTeams,
  addTeam,
  getTeamsById,
  deleteTeam,
  updateTeam,
};
