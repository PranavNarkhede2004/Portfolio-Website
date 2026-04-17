const express = require('express');
const { submitMessage, getMessages } = require('../controllers/contactController');

const router = express.Router();

router.post('/', submitMessage);
router.get('/admin', getMessages);

module.exports = router;
