const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/', (req, res) => {
    res.send({mesagem: 'Hello World!'})
});
//Busca por uma tarefa
 router.get('/:taskId', async (req, res) => {
   res.send('List for 1 Task')
 })

//Criar uma tarefa
 app.post('/', async (req, res) => {
   res.send('POST request to the homepage')
 })

 //Modificar uma tarefa
 app.put('/taskId', (req, res) => {
   res.send('POST request to the homepage')
 });

 // Deletar uma tarefa
 app.delete('/tasks/:id', (req, res) => {
   res.send('Delete record with id id');
 });


 module.exports = app => app.use('/tasks', router);