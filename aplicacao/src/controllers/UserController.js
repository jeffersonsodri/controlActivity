const express = require('express');
const app = express();

const User = require('../models/User');
const Task = require('../models/Task');

const Router = express.Router();


app.get('/', (req, res) => {
  res.json({mesage: 'ok'})
});



