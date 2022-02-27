const { Router } = require('express');
const router = Router();

//team routes
const {
  addTeam,
  getTeams,
  getTeamsById,
  deleteTeam,
  updateTeam,
} = require('../controllers/index.teams.controllers');

router.get('/teams', getTeams);
router.get('/teams/:teams_id', getTeamsById);
router.post('/addteams', addTeam);
router.delete('/deleteteams', deleteTeam);
router.put('/updateteams/:teams_id', updateTeam);

//games routes
const {
  addGame,
  getGames,
  getGameById,
  deleteGame,
  updateGame,
} = require('../controllers/index.games.controllers');

router.get('/games', getGames);
router.get('/games/:game_id', getGameById);
router.post('/addgames', addGame);
router.delete('/deletegames/:game_id', deleteGame);
router.put('/updategames/:game_id', updateGame);

//player routes
const {
  getPlayers,
  getPlayerById,
  getPlayerByTeam,
  addPlayer,
  deletePlayer,
  updatePlayer,
} = require('../controllers/index.players.controllers');

router.get('/player', getPlayers);
router.get('/player/:player_id', getPlayerById);
router.get('/playerTeam/:teams_id', getPlayerByTeam);
router.post('/addplayer', addPlayer);
router.delete('/deleteplayer/player_id', deletePlayer);
router.put('/updateplayer/:player_id', updatePlayer);

//plays routes
const {
  getPlays,
  getPlayById,
  addPlay,
  deletePlay,
  updatePlay,
} = require('../controllers/index.plays.controllers');

router.get('/plays', getPlays);
router.get('/plays/:play_id', getPlayById);
router.post('/addplays', addPlay);
router.delete('/deleteplays/:play_id', deletePlay);
router.put('/updateplays/:play_id', updatePlay);

module.exports = router;
