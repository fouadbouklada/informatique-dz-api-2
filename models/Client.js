const mongoose = require('./index');

const Client = new mongoose.Schema({
    nom : {
        type : String,
        required : true,
    },
    prenom: {
        type : String,
        required : true,
    },
    tel : {
        type : Number,
        required : true,
    },
})

module.exports = mongoose.model("clients", Client)