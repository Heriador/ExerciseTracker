const { Router } = require('express');
const { get } = require('../Controllers/log.controller');

const router = Router();

router.get('/api/users/:_id/logs', get);

module.exports = router;
