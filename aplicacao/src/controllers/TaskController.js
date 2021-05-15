
const Task = require('../models/Task');


module.exports = {

    async index(req, res) {
        return res.send({mensage :'Uma tarefa'})
    
    },

    async store(req, res) {
        const { task } = req.body;
        console.log(task);


        const tasks = Task.create(task);

        return res.json(req.body)

    
    },
    async updated(req, res) {
        return res.send({mensage :'Mudando  uma tarefa'})
    }
}