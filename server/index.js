const express = require('express')
const app = express()
const port = process.env.port || 3001

app.use(require('./routes/api'))

app.listen(port,()=>{
    console.log('now listening to the port',port)
})

