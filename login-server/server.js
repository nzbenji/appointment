const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const db = require('./db/db')

server.use(bodyParser.json())
server.use(cors())

const PORT = 3001


server.get('/', (req, res) => {
    db.getUsers()
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})


server.post('/login', (req, res) => {
    db.handleSignin(req.body) 
        .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].password)
        console.log(isValid)
        if(isValid) {
            return db.getEmail(req.body)
            .then(user => {
                console.log(user)
                res.json(user)
            })
            .catch(err => res.status(400).json('unable to get user'))
        } else {
            res.status(400).json('incorrect details')
        }
        })
        .catch(err => res.status(400).json('error'))
})

server.get('/profile/:id', (req, res) => {
    db.profile(Number(req.params.id))
        .then(user => {
            res.json(user)
        })
        .catch(err => res.status(400).json('Not found'))
})

server.post('/register', (req, res) => {
    db.registerUser(req.body, bcrypt)
        .then(user => {
            res.json(user[0])
        })
        .catch(err => res.status(400).json('unable to register'))

})

server.listen(PORT, () => {
    console.log('running on ', PORT)
})





// server.post('/register', (req, res) => {
//     db.registerUser(req.body)
//         .then(res.sendStatus(200))
// })