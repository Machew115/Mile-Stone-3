require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const {Sequelize} = require('sequelize')
const defineCurrentUser = require('./middleware/defineCurrentUser');
const multer = require('multer')
const upload = multer({dest:'uploads/'})

//middleware
var corsOptions ={
    origin: "http://localhost:3000",
    credentials: true
}
app.use(cors(corsOptions))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(defineCurrentUser)

/* This code was used to test the connection. 
connection will be on the backen */

// const sequelize = new Sequelize(process.env.PG_URI)


// try {
//     sequelize.authenticate()
//     console.log(`Connect to SQL DB at ${process.env.PG_URI}`)
// } catch (err){
//     console.log(`unable to connect to PG: ${err}`)
// }


//Controllers
app.options('*',cors())
app.use('/authentication',require('./controllers/authentication'))
app.use('/users',require('./controllers/users'))
app.use('/meals',require('./controllers/meals'))
app.use('/workouts',require('./controllers/workouts'))

app.post('/images', upload.single('avatar'), (req,res)=>{
    res.send ('posted image')
})

//Listen
app.listen(process.env.PORT,()=>{
    console.log(`App running on port ${process.env.PORT}`)
})