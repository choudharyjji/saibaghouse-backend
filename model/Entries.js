const mongoose = require("mongoose");

const entriesSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    customer_phone: {
        type: String,
        required: true,
    },
    //entry type : nagad, udhaar
    entry_type: {
        type: String,
        required: true,
    },
    entry_amount: {
        type: Number,
        required: true,
    },
    entry_description: {
        type: String,
        default: null
    },
    entry_photo: {
        type: String,
        default: null
    },
    entry_warranty: {
        type: Number,
        default: 3
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Entries = mongoose.model("Entries", entriesSchema);
module.exports = Entries;