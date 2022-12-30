//Dependencies
const auth = require ('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')
const {Users} = db


auth.post('/', async (req, res) => {
    // Find a user in the database with a matching email
    let user = await Users.findOne({
        where: { user_email: req.body.user_email }
    })

    // Following code is functioning as expected but it always throws status 404 because when testing, it is comparing plaintext password inputted in the login form, with the unhashed pw in the db (needs to be hashed to function properly)
    // Check if the user exists and if the provided password matches the hashed password in the database
    if (!user || !await bcrypt.compare(req.body.user_password, user.user_password)) {
        
        // If the user does not exist or the passwords do not match, send a response with a 404 status code and a message
        // console.log(user) // for testing purposes ONLY
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        // If the user exists and the passwords match, encode a JWT with the user's ID as the payload and send it as the response
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.user_Id })
        res.json({ user: user, token: result.value })       
    }
})


auth.get('/profile', async (req, res) => {
    // Send the currentUser property of the request object as the response
      res.json(req.currentUser)
})

module.exports= auth