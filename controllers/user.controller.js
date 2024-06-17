const User = require('../models/User')


const login = async (req, res) => {
    const {username, password} = req.body;

    const user = await User.findOne({username : username, password: password})
    if(user){
        res.send(user);
    }else{
        res.send('authorized')
    }

}


const register = async (req, res) => {
    const {username, password} = req.body;

    const user = await User.findOne({username : username})
    if(user){
        res.send('user exists');
    }else{
        const user = await User.create({username : username, password: password});
        res.send(user);
    }

}


module.exports = {login, register};
