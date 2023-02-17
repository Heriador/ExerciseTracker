const { Router } = require('express');
const { create } = require('../Controllers/exercise.controller');

const router = Router();

router.post('/api/users/:_id/exercises', create);

module.exports = router;
