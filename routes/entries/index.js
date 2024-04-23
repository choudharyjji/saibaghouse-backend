const express = require("express");
const router = express.Router();

const { addEntry } = require("./routes");

router.post("/", addEntry);

module.exports = router;