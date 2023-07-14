const mqtt = require("mqtt")
const client = mqtt.connect('mqtt://localhost:1883')

const message={
    a:1,
    b:2
}
setInterval(
    () => client.publish('topic', JSON.stringify(message)
    ), 10000)