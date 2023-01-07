require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const {Sequelize} = require('sequelize')
const defineCurrentUser = require('./middleware/defineCurrentUser');

//file storage middleware
// const multer =require('multer')
// const path = require('path')

// const storage = multer.diskStorage ({
//     destination:(req,file, cb) =>{
//         cb(null, 'uploads')
//     },
//     filename: (req,file,cb)=>{
//         console.log(file)
//         cb(null, Date.now()+path.extname(file.originalname))
//     }
// })

// const upload = multer({storage:storage})

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

//Controllers
app.options('*',cors())
app.use('/authentication',require('./controllers/authentication'))
app.use('/users',require('./controllers/users'))
app.use('/meals',require('./controllers/meals'))
app.use('/workouts',require('./controllers/workouts'))

// app.post('/upload',upload.single('avatar') ,(req,res)=>{
//     res.send("Image Uploaded")
// })

//Listen
app.listen(process.env.PORT,()=>{
    console.log(`App running on port ${process.env.PORT}`)
})