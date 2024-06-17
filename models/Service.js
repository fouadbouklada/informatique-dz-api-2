const mongoose = require('./index');

const Service = new mongoose.Schema({
    nom : {
        type : String,
        required : true,
    },
    desc: {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
})

module.exports = mongoose.model("services", Service)