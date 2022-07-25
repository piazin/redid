const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const adminControllers = require('./adminControllers');

router.post('/auth', adminControllers.auth);
router.get('/login', adminControllers.render_login);
router.get('/logout', adminControllers.logout);

router.get('/admin/users', auth, adminControllers.render_users);
router.get('/admin/create', auth, adminControllers.render_create_user);
router.post('/admin/save', auth, adminControllers.to_save_user);

module.exports = router;