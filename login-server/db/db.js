const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  registerUser
}

function getUsers(db = connection) {
  return db('register').select()
}

function registerUser(user, db = connection) {
  return db('register')
    .insert({
      username: user.name,
      email: user.email,
      password: user.password
    })
}