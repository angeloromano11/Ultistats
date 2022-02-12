const { Router } = require('express');
const router = Router();

const {
  addTeam,
  getTeams,
  getTeamsById,
  deleteTeam,
  updateTeam,
} = require('../controllers/index.teams.controllers');

const {
  addGame,
  getGames,
  getGameById,
  deleteGame,
  updateGame,
} = require('../controllers/index.games.controllers');

router.get('/teams', getTeams);
router.get('/teams/:teams_id', getTeamsById);
router.post('/addteams', addTeam);
router.delete('/deleteteams', deleteTeam);
router.put('/updateteams/:teams_id', updateTeam);

//games routes
router.get('/games', getGames);
router.get('/games/:game_id', getGameById);
router.post('/addgames', addGame);
router.delete('/deletegames/:game_id', deleteGame);
router.put('/updategames/:game_id', updateGame);

// //player routes
// router.get('/player', getPlayers);
// router.get('/player/:game_id', getPlayerById);
// router.post('/player', addPlayer);
// router.delete('/player/player_id', deletePlayer);
// router.put('/player/:player_id', updatePlayer);

// //plays routes
// router.get('/plays', getpPlays);
// router.get('/plays/:play_id', getPlayById);
// router.post('/plays', addPlay);
// router.delete('/plays/:play_id', deletePlay);
// router.put('/plays/:play_id', updatePlay);

module.exports = router;
