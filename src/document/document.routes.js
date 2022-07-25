const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const documentControllers = require('./documentControllers');

router.get('/admin/document', auth, documentControllers.render_documents);
router.get('/admin/document/create', auth, documentControllers.render_document_create);
router.get('/admin/document/edit/:id', auth, documentControllers.render_document_edit);
router.post('/admin/document/create', auth, documentControllers.to_save_document);
router.post('/admin/document/delete/:id', auth, documentControllers.delete_document);
router.post('/admin/document/update/:id', auth, documentControllers.update_document);

module.exports = router;