const express = require('express');
const router = express.Router();

const HomeControllers = require('./homeControllers');

router.get('/', HomeControllers.render_home);

module.exports = router;