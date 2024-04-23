require("dotenv").config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

require("./config/db")();

//routes
const userRoutes = require("./routes/users");
const entriesRoutes = require("./routes/entries");
app.use("/api/users", userRoutes);
app.use("/api/entries", entriesRoutes);


// api
app.get("/", (req, res) => {
    res.send("Welcome to Sai Bag House Backend!");
})


const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is running..." + port);
})