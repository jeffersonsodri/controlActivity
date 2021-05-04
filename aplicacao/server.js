const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');


const routes = require('./routes');

mongoose.connect('mongodb+srv://atividades:123@cluster0.fktmi.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
