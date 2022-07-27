const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const adminControllers = require('./adminControllers');

router.post('/auth', adminControllers.auth);
router.get('/login', adminControllers.render_login);
router.get('/logout', adminControllers.logout);

router.get('/admin/users', auth, adminControllers.render_users);

router.route('/admin/create').get(auth, adminControllers.render_create_user).post(auth, adminControllers.to_save_user);

router.route('/admin/edit/:id').get(adminControllers.render_edit_user).post(adminControllers.update_user);

router.post('/admin/delete/:id', adminControllers.delete_user);

module.exports = router;