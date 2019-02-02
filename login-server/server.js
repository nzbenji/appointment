const express = require('express')
const server = express()

const PORT = 3000

server.get('/', (req, res) => {
    res.send('this is home ')
})

server.listen(PORT, () => {
    console.log('running on ', PORT)
})