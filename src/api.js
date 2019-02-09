import request from 'superagent'

const URL = 'http://localhost:3001'

export function registerUser (user) {
  request
    .post(URL)
    .send(user)
    .end()
}