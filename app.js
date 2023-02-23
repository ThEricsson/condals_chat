"use strict";

var express = require("express");
const cors = require("cors");

var app = express();

//Cors

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
//   res.header("Acces-Control-Allow-Credentials", true);
//   next();
// });

app.use(cors());

//Rutes
var chat_routes = require("./routes/chat");

app.use("/", chat_routes);

module.exports = app;
