const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        member: {type: Boolean},
        pic: {type: String, required: true},
        code: {type: String, required: true}
    }
);

//Export model
module.exports = mongoose.model('User', UserSchema);