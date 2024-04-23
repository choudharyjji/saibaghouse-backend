const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    user_image: {
        type: String,
    },
    user_phone: {
        type: String,
        required: true,
    },
    user_address: {
        type: String,
        required: true,
    },
    user_gender: {
        type: String,
        default: 'male'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;