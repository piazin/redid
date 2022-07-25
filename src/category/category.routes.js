const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const categoryControllers = require('./categoryControllers');

router.get('/admin/category', auth, categoryControllers.render_category);
router.get('/admin/category/edit/:id', auth, categoryControllers.render_category_edit);
router.get('/admin/category/create', auth, categoryControllers.render_create_category);
router.post('/category/create', auth, categoryControllers.to_save_category);
router.post('/admin/category/delete/:id', auth, categoryControllers.delete_category);
router.post('/admin/category/update/:id', auth, categoryControllers.update_category);

module.exports = router;