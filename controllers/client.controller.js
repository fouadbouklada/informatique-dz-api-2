const Client = require('../models/Client');
const Order = require('../models/Order');
const { param } = require('../routes/client');

const createClient = async (req, res) =>{
    const newClient = await Client.create(req.body)
    console.log('client created');
    res.send(newClient);
}

const getClients = async (req, res) => {
    const clients = await Client.find()
    res.send(clients)
}

const getClientById = async (req, res) => {
    const idClient = req.params.idClient;
    const client = await Client.findById(idClient)
    res.send(client)
}

const updateClient = async (req, res) => {
    const idClient = req.params.idClient;
    const client = await Client.findByIdAndUpdate(idClient, req.body)
    console.log('client updated')
    res.send(client)
}

const deleteClient = async (req, res) => {
    const idClient = req.params.idClient;
    const order = await Order.findOne({idClient: idClient});
    
    if(order){
        res.send('cannot delete');
    }else{
        await Client.findByIdAndDelete(idClient);
        res.send('client deleted')
    }
}
  

module.exports = {createClient, getClients, getClientById, updateClient, deleteClient}