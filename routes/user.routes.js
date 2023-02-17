const { Router } = require('express');
const { create, getAll } = require('../Controllers/user.controller');

const router = Router();

router.route('/api/users').post(create).get(getAll);

module.exports = router;
