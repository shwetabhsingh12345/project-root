const express = require('express');
const { fetchExternalData } = require('../controllers/apiController');
const router = express.Router();

router.get('/fetch', fetchExternalData);

module.exports = router;
