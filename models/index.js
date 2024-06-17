const mongo = require('mongoose');
const config = require('../database/config.db')

mongo.connect(config.url)
.then(()=> {console.log('connected to database')})
.catch((err)=> {console.log(`error ${err}`)})



module.exports = mongo;