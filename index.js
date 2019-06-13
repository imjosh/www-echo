/**
 * http server for testing load balancer routing, etc
 * 
 */

const app = require('express')();

const env = process.env;
const port = env.ECHO_PORT || 8000;
const tempPayload = (env.ECHO_PAYLOAD || '');
const instance = getRandomInt().toString();

let payload;
try {
  payload = JSON.parse(tempPayload);
  payload.instance = instance;
} catch (error) {
  payload = {
    payload: tempPayload,
    instance
  };
}

app.all('*', (req, res) => {
  res.send(payload);
})

app.listen(port, err => {
  if (err) throw err
  console.log(`Listening on http://localhost:${port}`);
  console.log(`Payload: ${JSON.stringify(payload)}`);
})

function getRandomInt(max = 10000) {
  return Math.floor(Math.random() * Math.floor(max));
}