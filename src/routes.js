const express = require('express')
const auth = require('./app/middleware/auth')

const controllers = require('./app/controllers')

const routes = express.Router()

routes.get('/', (req, res) => res.json({ msg: 'Hello World' }))
routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.get('/teste', auth, (req, res) => res.json({ ok: true }))

module.exports = routes
