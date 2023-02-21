const mqtt = require('mqtt')

require('dotenv').config()

var port = process.env.MQTT_PORT
var host = process.env.MQTT_HOST
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`


const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  reconnectPeriod: 1000,
})

module.exports = client