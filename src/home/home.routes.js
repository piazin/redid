const express = require('express');
const router = express.Router();

const homeControllers = require('./homeControllers');

router.get('/', homeControllers.render_home);
router.get('/document/:slug', homeControllers.render_document);
router.get('/category/:slug', homeControllers.render_category_by_slug);
router.get('/teste/:num', homeControllers.pag_teste);

module.exports = router;


/*router.get('/:category/:id', HomeControllers.render_category)*/