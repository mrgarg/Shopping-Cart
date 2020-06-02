const express= require('express')
const path = require('path')

const server = express();

server.use(express.json())
server.use(express.urlencoded({extended:true}))


server.use('/',express.static(path.join(__dirname,'public')))
server.use('/api', require('./routes/api/index.js').route)
server.listen(1234,()=>{
    console.log("server started at http://localhost:1234")
})