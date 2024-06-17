const orderRouter = require('express').Router();
const {createOrder, getOrders, getOrderById, terminateOrder, deleteOrder, getAllPrice,getTerminatedPrice, getTerminatedOrders} = require('../controllers/order.controller')

orderRouter.post('/', createOrder);
orderRouter.get('/', getOrders)
orderRouter.get('/terminated', getTerminatedOrders)
orderRouter.get('/terminatedprice', getTerminatedPrice);
orderRouter.get('/allprice', getAllPrice)
orderRouter.get('/:orderId', getOrderById)
orderRouter.put('/terminate/:orderId', terminateOrder)
orderRouter.delete('/:orderId', deleteOrder)



module.exports = orderRouter;