const express = require('express');
const { getMessages, addMessage, getByEmail } = require('./message-controller');

const router = express.Router();

router.get('/', getMessages);
router.get('/email/:email', getByEmail);
router.post('/', addMessage);

module.exports = router;
