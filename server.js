const express = require('express');
const cors = require('cors');
const app = express()
const {Sequelize} = require('sequelize')

//middleware
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

/* This code was used to test the connection. 
connection will be on the backen */

// const sequelize = new Sequelize(process.env.PG_URI)


// try {
//     sequelize.authenticate()
//     console.log(`Connect to SQL DB at ${process.env.PG_URI}`)
// } catch (err){
//     console.log(`unable to connect to PG: ${err}`)
// }


//ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Fitness Tracker API'
    })
})

//Controllers
const authController = require('./backend/controllers/authentication')
app.use('/authentication',authController)

//Listen
app.listen(process.env.PORT,()=>{
    console.log(`App running on port ${process.env.PORT}`)
})