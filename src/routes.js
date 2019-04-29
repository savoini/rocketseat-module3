const express = require('express')
const UserController = require('./app/controllers/UserController')

const routes = express.Router()

routes.get('/', (req, res) => res.json({ msg: 'Hello World' }))
routes.post('/users', UserController.store)

module.exports = routes
