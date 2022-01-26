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

module.exports = router;
