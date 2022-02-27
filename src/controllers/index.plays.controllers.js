const { request } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'root',
  port: '5431',
});

const getPlays = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM plays');
    await res.status(200).json(response.rows);
    console.log(`200 GET sent correctly...`);
  } catch (error) {
    console.error(`Something went wrong in getPlays :( ${error}`);
  }
};

const getPlayById = async (req, res) => {
  try {
    const id = req.params.play_id;
    const response = await pool.query(
      'SELECT * FROM Games WHERE play_id = $1',
      [id]
    );
    console.log(`displaying Games by id`);
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong getPlayById :( ${error}`);
  }
};

const addPlay = async (req, res) => {
  try {
    const {
      game_id,
      teams_id,
      player_id,
      tournamemnt,
      team,
      opponent,
      game_point_number,
      player_action,
      player_position,
      receiver_position,
      deffensive_player_position,
      pass_type,
      catch_type,
      defense_type,
      pass_distance,
      assistance,
      team_score,
      opposite_team_score,
      total_score,
      pass_completed,
      turnover,
    } = req.body;
    console.log(req.body);
    const response = await pool.query(
      'INSERT INTO plays(game_id, teams_id, player_id, tournamemnt, team, opponent, game_point_number, player_action, player_position, receiver_position, deffensive_player_position, pass_type, catch_type, defense_type, pass_distance, assistance, team_score, opposite_team_score, total_score, pass_completed, turnover) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)',
      [
        game_id,
        teams_id,
        player_id,
        tournamemnt,
        team,
        opponent,
        game_point_number,
        player_action,
        player_position,
        receiver_position,
        deffensive_player_position,
        pass_type,
        catch_type,
        defense_type,
        pass_distance,
        assistance,
        team_score,
        opposite_team_score,
        total_score,
        pass_completed,
        turnover,
      ]
    );
    await res.status(200).json(response.rows);
    console.log(`200 POST sent correctly...`);
  } catch (error) {
    console.error(`Something went wrong in addPlay :( ${error}`);
  }
};

const deletePlay = async (req, res) => {
  try {
    const id = req.params.play_id;
    const response = await pool.query('DELETE FROM plays WHERE play_id = $1', [
      id,
    ]);
    console.log(`Play row has been deleted succesfully`);
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong in deletePlay :( ${error}`);
  }
};

const updatePlay = async (req, res) => {
  try {
    const id = req.params.play_id;
    const {
      tournamemnt,
      team,
      opponent,
      game_point_number,
      player_action,
      player_position,
      receiver_position,
      deffensive_player_position,
      pass_type,
      catch_type,
      defense_type,
      pass_distance,
      assistance,
      team_score,
      opposite_team_score,
      total_score,
      pass_completed,
      turnover,
    } = req.body;
    const response = await pool.query(
      'UPDATE Games SET tournamemnt = $1, team = $2, opponent = $3, game_point_number = $4, player_action = $5, player_position = $6, receiver_position = $7, deffensive_player_position = $8, pass_type = $9, catch_type = $10, defense_type = $11, pass_distance = $12, assistance = $13, team_score = $14, opposite_team_score = $15, total_score = $16, pass_completed = $17, turnover = $18',
      [
        tournamemnt,
        team,
        opponent,
        game_point_number,
        player_action,
        player_position,
        receiver_position,
        deffensive_player_position,
        pass_type,
        catch_type,
        defense_type,
        pass_distance,
        assistance,
        team_score,
        opposite_team_score,
        total_score,
        pass_completed,
        turnover,
      ]
    );
    console.log(
      `Game ${(Games_name, Game_player_number)} has updated deleted succesfully`
    );
    await res.status(200).json(response.rows);
  } catch (error) {
    console.error(`Something went wrong in updatePlay :( ${error}`);
  }
};

module.exports = {
  getPlays,
  getPlayById,
  addPlay,
  deletePlay,
  updatePlay,
};
