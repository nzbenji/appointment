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

server.post('/register', (req, res) => {
    db.registerUser(req.body)
        .then(res.sendStatus(200))
})

// server.post('/login', (req, res) => {
//     if(req.body.email === db.users[0].email &&
//         req.body.password === db.users[0].password) {
//             res.json('success')
//         } else {
//             res.status(400).json('err loggin in')
//         }
// })

// server.get('/profile/:id', (req, res) => {
//     const { id } = req.params
//     let found = false
//     db.users.forEach(user => {
//         if(user.id === id) {
//             found = true
//             return res.json(user)
//         }
//     })
//     if(!found) {
//         res.status(404).json('no such user')
//     }
// })

// server.post('/register', (req, res) => {
//     const { email, name, password } = req.body

//     //return an encrypted hash password
//     bcrypt.hash(password, null, null, (err, hash) => {
//         // Store hash in your password DB.
//         console.log(hash)
//     });

//     db.users.push({
//         id: '123', 
//         name: name,
//         email: email,
//         password: password
//     })
//     //grabs last added item in arr
//     res.json(db.users[db.users.length-1])
// })

server.listen(PORT, () => {
    console.log('running on ', PORT)
})




// const db = {
//     users: [
//         {
//             id: '1', 
//             name: 'john',
//             email: 'john@john.com',
//             password: '1234'
//         },
//         {
//             id: '2', 
//             name: 'sally',
//             email: 'sally@sally.com',
//             password: '4321'
//         }
//     ]
// }