const express = require("express");
const router = express.Router();

const { addUser, getAllUsers, deleteUser } = require("./routes");

router.post("/", addUser);
router.get("/all", getAllUsers);
router.delete("/delete/:id", deleteUser);

module.exports = router;