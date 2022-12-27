const express = require('express');
const app = express()
const {Sequelize} = require('sequelize')

//middleware
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const sequelize = new Sequelize(process.env.PG_URI)


 try {
     sequelize.authenticate()
     console.log(`Connect to SQL DB at ${process.env.PG_URI}`)
} catch (err){
     console.log(`unable to connect to PG: ${err}`)
 }

// controllers
app.use('/login', require('./backend/controllers/authentication'))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    })
})


//Listen
app.listen(process.env.PORT,()=>{
    console.log(`App running on port ${process.env.PORT}`)
})