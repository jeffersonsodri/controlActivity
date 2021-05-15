const express = require('express');
const routes = express.Router();

const TaskController = require('./src/controllers/TaskController');
const UserController = require('./src/controllers/UserController')

routes.get('/', (req, res) => {
    return res.send('Olá, Mundo!!');
})

/** 
 * @model - Task
 */
routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.put('/tasks/:id', TaskController.updated);

/**
 * @model  - User
 */
routes.post('/users', UserController.store);


module.exports = routes;