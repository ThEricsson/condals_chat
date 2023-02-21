"use strict"

var mqttConn = require("../connection/mqtt")

var controller = {
    helloWorld: function (req, res) {
        return res.status(200).send({
            message: "Hello World"
        })
    }

}

module.exports = controller