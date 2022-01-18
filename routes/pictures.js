const express = require("express");
const router = express.Router();
const picture = require("../controllers/pictures");

router.get("/", picture.getPictures);

module.exports = router