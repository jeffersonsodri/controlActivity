const User = require('../models/User');

module.exports = {

    async index(req, res) {
        return res.send({mensage :'Uma tarefa'})
    
    },

    async store(req, res) {
        const { user } = req.body;
        console.log(user);


        const users = User.create(task);

        return res.json(req.body)

    
    },
    async updated(req, res) {
        return res.send({mensage :'Mudando  uma tarefa'})
    }
}