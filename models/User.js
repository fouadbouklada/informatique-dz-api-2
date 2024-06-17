const mongoose = require('./index');

const User = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    password: {
        type : String,
        required : true,
    },
    
})

module.exports = mongoose.model("user", User)