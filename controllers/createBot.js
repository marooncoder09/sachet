const Temp = require('../models/createBot');
const { mongoose } = require("mongoose");


exports.createBot = async (req, res) => {
    try {
        const { botName, botDescription, selectGPTVersion, prompt, isPublic, botId } = req.body;
        const bot = await Temp.create({ botName, botDescription, selectGPTVersion, prompt, isPublic, botId });

        res.status(200).json({
            status: 'success',
            data: bot
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

// get the list of all the bots

exports.getAllBots = async (req, res) => {
    try {
        const bots = await Temp.find();
        res.status(200).json({
            status: 'success',
            data: bots
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

// get the list of all the bots which are set to public 
exports.getAllPublicBots = async (req, res) => {
    try {
        const bots = await Temp.find({ isPublic: true });
        res.status(200).json({
            status: 'success',
            data: bots
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}