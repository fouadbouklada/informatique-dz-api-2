const Service = require('../models/Service')
const Order = require('../models/Order');

const createService = async (req, res) => {
    const serviceCreated = await Service.create(req.body)
    console.log('service created');
    res.send(serviceCreated)
}

const getServices = async (req, res) => {
    const services = await Service.find();
    res.send(services)
}

const getServiceById = async (req, res) => {
    const serviceId = req.params.serviceId;
    const service = await Service.findById(serviceId)
    res.send(service)
}

const updateService = async (req, res) => {
    const serviceId = req.params.serviceId;
    const service = await Service.findByIdAndUpdate(serviceId, req.body);
    console.log('service updated');
    res.send(service);
}

const deleteService = async (req, res) => {
    const serviceId = req.params.serviceId;
    const order = await Order.findOne({idService: serviceId});
    
    if(order){
        res.send('cannot delete');
    }else{
        await Service.findByIdAndDelete(serviceId);
        res.send('service deleted')
    }
}

module.exports = {createService, getServices, getServiceById, updateService, deleteService}