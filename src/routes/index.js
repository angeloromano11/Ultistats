const { Router } = require('express');
const router = Router();

const {
  addTeam,
  getTeams,
  getTeamsById,
  deleteTeam,
  updateTeam,
} = require('../controllers/index.controllers');

router.get('/teams', getTeams);
router.get('/teams/:teams_id', getTeamsById);
router.post('/teams', addTeam);
router.delete('/teams', deleteTeam);
router.put('/teams/:teams_id', updateTeam);

// //games routes
// router.get('/games', getGames);
// router.get('/games/:game_id', getGameById);
// router.post('/games', addGame);
// router.delete('/games', deleteGame);
// router.put('/games/:game_id', updateGame);

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
