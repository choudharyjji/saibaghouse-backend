const Entries = require("../../model/Entries");

const addEntry = async (req, res) => {
    try {
        const {
            user_id,
            customer_phone,
            entry_type,
            entry_amount,
            entry_description,
            entry_photo,
            entry_warranty,
        } = req.body;

        const entriesData = {
            user_id,
            customer_phone,
            entry_type,
            entry_amount,
            entry_description,
            entry_photo,
            entry_warranty,
        }

        const entry = await Entries.create(entriesData);
        res.status(200).send({
            payload: entry,
            success: true,
            error: null
        });

    } catch (error) {
        res.status(500).send({
            payload: null,
            succes: false,
            error: error.message
        })
    }
}

module.exports = {
    addEntry
}