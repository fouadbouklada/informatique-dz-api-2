const clientRouter = require('express').Router();
const {createClient, getClients, getClientById, updateClient, deleteClient} = require('../controllers/client.controller')


clientRouter.post('/', createClient)
clientRouter.get('/', getClients)
clientRouter.get('/:idClient', getClientById)
clientRouter.put('/:idClient', updateClient)
clientRouter.delete('/:idClient', deleteClient)

module.exports = clientRouter;