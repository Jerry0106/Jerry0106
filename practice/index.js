const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', cors(), function (req, res) {
  res.send('Hello World')
})
app.get('/member', cors(), function (req, res) {
  res.send('Member page')
})
console.log('server is on : http://localhost:3000/');

console.log('hi');
app.listen(3000)