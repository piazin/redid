const express = require('express');
const router = express.Router();

const categoryControllers = require('./categoryControllers');

router.get('/category', categoryControllers.render_category);
router.get('/category/create', categoryControllers.render_create_category)
router.post('/category/save', categoryControllers.save_category);

module.exports = router;