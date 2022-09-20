const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        message: { type: String, required: true },
        username: { type: String, required: true },
        channel: {type: String, required: true},
        pic: {type: String, required: true}
    }
);

//Export model
module.exports = mongoose.model('Message', MessageSchema);