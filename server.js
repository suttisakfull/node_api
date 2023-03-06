const express = require('express')
require("dotenv").config();
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World :')
})

// console.log("PORT:",process.env.port)
const PORT=process.env.port

app.listen(PORT, () => {
  console.log('Start server at port ',PORT)
})