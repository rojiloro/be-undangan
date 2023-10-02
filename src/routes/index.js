const express = require("express");
const router = express.Router();

const userC = require("../controllers/userController");

// router.get("/user", userC.getAllUser);
router.post("/user", userC.postUcapan);
router.get("/users", userC.getUcapan);

module.exports = router;
