// //mongodb
const db=require('./config/db')
db.connectToServer()
require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT||4000
//import and use cors 
const cors=require('cors')
app.use(cors());
// //for accepting post form data
// const bodyParser=express.json()
// app.use(bodyParser)
//use api
const getData=require('./api/router')
app.use('/api',getData)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))