/**
 * http server for testing load balancer routing, etc
 * 
 */

const express = require('express')
const app = express()

const env = process.env
const port = env.ECHO_PORT || 8000
const payload = env.ECHO_PAYLOAD || getRandomInt().toString();

app.all('*', (req, res) => {
  res.send(payload)
})

app.listen(port, err => {
  if (err) throw err
  console.log(`Listening on http://localhost:${port}`);
  console.log(`Payload: ${JSON.stringify(payload)}`);
})

function getRandomInt(max = 10000) {
  return Math.floor(Math.random() * Math.floor(max));
}