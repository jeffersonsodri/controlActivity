
// const axios = require('axios');
// const Task = require('../models/Task');


module.exports = {

    async index(req, res) {
        return res.send({mensage :'Uma tarefa'})
    
    },

    async store(req, res) {
        return res.send({mensage :'Criando uma tarefa'})
    
    },
    async updated(req, res) {
        return res.send({mensage :'Mudando  uma tarefa'})
    
    }




}