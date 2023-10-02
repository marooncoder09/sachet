const { model, Schema, Types } = require('mongoose');

const botSchema = new Schema({
    botName: {
        type: String,
        required: true
    },
    botDescription: {
        type: String,
        required: true
    },
    selectGPTVersion: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,
        required: true
    },
    botId: {
        type: Types.ObjectId, // Use mongoose.Types.ObjectId for the field
        required: true,

    }
});

const Bot = model('Bot', botSchema);

module.exports = Bot;
