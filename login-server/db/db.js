const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)


module.exports = {
  getUsers,
  registerUser,
  profile,
  handleSignin,
  getEmail
}

function getUsers(db = connection) {
  return db('register').select()
}

function registerUser(user, bcrypt, db = connection) {
  return db('register')
    .insert({
      username: user.name,
      email: user.email,
      password: bcrypt.hashSync(user.password)
    })
}

function profile(id, db = connection) {
  return db('register')
    .where('id', id)
    .first()
}

function handleSignin(user, db = connection) {
  return db('register')
    .where('email', user.email)
    .select('email', 'password')
}

function getEmail(user, db=connection) {
  return db('register')
    .select()
    .where('email', user.email)
}