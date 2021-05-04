const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.json({mesagem: 'Ok request to homepage'})
})


app.listen('3001')