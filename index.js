const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000;
const client = require('./routes/client')
const service = require('./routes/service')
const order = require('./routes/order')
const auth = require('./routes/auth')
require('./models/index')


app.use(cors({
    origin : '*'
}))
app.use(express.json())

app.use('/api/client', client)
app.use('/api/order', order)
app.use('/api/service', service)
app.use('/api', auth);



app.get('/', (req, res) => {
    res.send('server running')
})

app.listen(port, ()=> {
    console.log(`server running on port ${port}`)
})