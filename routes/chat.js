"use strict"

var express = require("express")
var ChatController = require("../controllers/chat")

var router = express.Router()

router.get("/helloworld", ChatController.helloWorld)
router.get("/publish", ChatController.publish)
router.get("/subscribe", ChatController.subscribe)

module.exports = router;