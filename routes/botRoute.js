const express = require('express');
const router = express.Router();
const { createBot, getAllBots, getAllPublicBots } = require('../controllers/createBot');

router.post('/createBot', createBot);
router.get('/getAllBots', getAllBots);
router.get('/getAllPublicBots', getAllPublicBots);


module.exports = router;