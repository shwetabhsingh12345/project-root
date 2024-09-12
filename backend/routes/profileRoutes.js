const express = require('express');
const { getProfile, getSettings } = require('../controllers/profileController');
const router = express.Router();

router.get('/profile', getProfile);
router.get('/settings', getSettings);

module.exports = router;
