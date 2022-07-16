const express = require('express');
const router = express.Router();

const documentControllers = require('./documentControllers');

router.get('/documents', documentControllers.render_documents);

module.exports = router;