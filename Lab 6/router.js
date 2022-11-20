const express = require("express");
const router = express.Router();

// const fs = require("fs");
const homeController = require("./controllers/homeController");
const messageController = require("./controllers/MessageController");
router.get("/", homeController.getHome);
router.post('/send', homeController.postMessage);
router.post('/filter', homeController.postFilter);
//router.get("/", sendmessage);

module.exports = router;
