const Order = require('../models/Order');

const createOrder = async (req, res) => {
    const orderCreated = await Order.create(req.body);
    console.log('order created');
    res.send(orderCreated)
}

const getOrders = async ( req, res) => {
    const orders = await Order.find({terminate : false});
    res.send(orders)
}
const getTerminatedOrders = async ( req, res) => {
    const orders = await Order.find({terminate : true});
    res.send(orders)
}

const getOrderById = async (req, res) =>{
    const orderId = req.params.orderId
    const order = await Order.findById(orderId)
    res.send(order)
}

const terminateOrder = async (req, res) => {
    const orderId = req.params.orderId;
    await Order.findByIdAndUpdate(orderId, {terminate: true})
    res.send('orderTerminated')
}

const deleteOrder = async (req, res) => {
    const orderId = req.params.orderId;
    await Order.findByIdAndDelete(orderId);
    res.send('orderDeleted')
}

const getAllPrice = async (req, res) => {
    const orders = await Order.find();
    
    var price = 0;
    orders.forEach((value, index, array) => {
        price = price + array[index].price;
    })
    console.log(price);
    res.send({'price' : price})
    
}

const getTerminatedPrice = async (req, res) => {
    const orders = await Order.find({terminate : true});
    
    var price = 0;
    orders.forEach((value, index, array) => {
        price = price + array[index].price;
        console.log('price' + price);
    })
    console.log(price);
    res.send({'price' : price})
    
}

module.exports = {createOrder, getOrders, getOrderById, terminateOrder, deleteOrder, getAllPrice,getTerminatedPrice, getTerminatedOrders}