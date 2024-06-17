const mongoose = require('./index');

const Order = new mongoose.Schema({
    idClient : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : 'clients'
    },
    idService: {
        type : mongoose.Types.ObjectId,
        required : true,
        ref: 'services'
    },
    date : {
        type : String,
        required : true,
    },
    qte : {
        type : Number,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    terminate: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("orders", Order)