"use strict";

var mqttConn = require("../connection/mqtt");

var controller = {
  helloWorld: function (req, res) {
    return res.status(200).send({
      message: "Hello World",
    });
  },

  //Metodo para suscribirse a un chat
  subscribe: function (req, res) {
    let topic = req.query.topic;
    var message = "null";

    mqttConn.subscribe([topic], (error) => {
      if (!error) {
        console.log(`Subscribe to topic '${topic}'`);
      }

      mqttConn.on("message", (topic, payload) => {
        message = payload.toString();

        console.log({
          topic: topic,
          message: message,
          ressponse: "subscibed",
        });

        return res.status(200).send({
          topic: topic,
          message: message,
          ressponse: "subscibed",
        });
      });
    });
  },

  //Metodo para publicar en un chat
  publish: function (req, res) {
    console.log(req.query);
    let topic = req.query.topic;
    let message = req.query.message;

    mqttConn.publish(topic, message, { qos: 0, retain: true }, (error) => {
      if (error) {
        console.error(error);
        return res.status(500).send({
          response: error,
        });
      } else {
        return res.status(200).send({
          response: "sended",
        });
      }
    });
  },
};

module.exports = controller;
