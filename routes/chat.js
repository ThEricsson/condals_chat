"use strict"

var express = require("express")
var ChatController = require("../controllers/chat")

var router = express.Router()

router.get("/helloworld", ChatController.helloWorld)

module.exports = router;