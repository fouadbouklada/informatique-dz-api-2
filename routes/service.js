const serviceRouter = require('express').Router();
const {createService, getServices, getServiceById, updateService, deleteService} = require('../controllers/service.controller')


serviceRouter.post('/', createService);
serviceRouter.get('/', getServices);
serviceRouter.get('/:serviceId', getServiceById);
serviceRouter.put('/:serviceId', updateService)
serviceRouter.delete('/:serviceId', deleteService)

module.exports = serviceRouter;