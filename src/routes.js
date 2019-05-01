const express = require('express')
const validate = require('express-validation')

const authMiddleware = require('./app/middleware/auth')
const controllers = require('./app/controllers')
const validators = require('./app/validators')

const routes = express.Router()

routes.post(
  '/users',
  validate(validators.User),
  controllers.UserController.store
)
routes.post(
  '/sessions',
  validate(validators.Session),
  controllers.SessionController.store
)

routes.use(authMiddleware)

/**
 * Rotas autenticadas
 */

/**
 * Ad
 */
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', validate(validators.Ad), controllers.AdController.store)
routes.put('/ads/:id', validate(validators.Ad), controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

/**
 * Purchase
 */
routes.post(
  '/purchase',
  validate(validators.Purchase),
  controllers.PurchaseController.store
)

module.exports = routes
