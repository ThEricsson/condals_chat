"use strict";

var app = require("./app")
require('dotenv').config()

var port = process.env.SERVER_PORT;

app.listen(port, () => {
    console.log("Servidor funcionant correctament en el port " + port);
  });