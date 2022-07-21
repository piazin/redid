const express = require('express');
const router = express.Router();

const documentControllers = require('./documentControllers');

router.get('/admin/document', documentControllers.render_documents);
router.get('/admin/document/create', documentControllers.render_document_create);
router.get('/admin/document/edit/:id', documentControllers.render_document_edit);
router.post('/admin/document/create', documentControllers.to_save_document);
router.post('/admin/document/delete/:id', documentControllers.delete_document);
router.post('/admin/document/update/:id', documentControllers.update_document);

//router.get('/teste/:num', documentControllers.pag_teste);
module.exports = router;