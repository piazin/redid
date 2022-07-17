const express = require('express');
const router = express.Router();

const categoryControllers = require('./categoryControllers');

router.get('/admin/category', categoryControllers.render_category);
router.get('/admin/category/edit/:id', categoryControllers.render_category_edit);
router.get('/admin/category/create', categoryControllers.render_create_category);
router.post('/category/create', categoryControllers.to_save_category);
router.post('/admin/category/delete/:id', categoryControllers.delete_category);
router.post('/admin/category/update/:id', categoryControllers.update_category);

module.exports = router;