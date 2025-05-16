const express = require('express');
const { getVideoInfo } = require('../controllers/youtubeController.js'); // ✅ destructure the function

const router = express.Router();

router.get('/video-info', getVideoInfo); // ✅ use the function

module.exports = router; // ✅ export the router
