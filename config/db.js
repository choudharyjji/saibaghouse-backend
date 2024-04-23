const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_DB_URI;

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(mongoURI);
        console.log("DB Connected Sucessfully!");
    } catch (error) {
        console.log("DB connection error!");
    }
}

module.exports = connectDb;