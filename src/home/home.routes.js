const express = require('express');
const router = express.Router();

const HomeControllers = require('./homeControllers');

router.get('/', HomeControllers.render_home);
router.get('/:slug', HomeControllers.render_document);
router.get('/category/:slug', HomeControllers.render_category_by_slug);

module.exports = router;


/*router.get('/:category/:id', HomeControllers.render_category)*/