const nodemailer = require('nodemailer')
const mailConfig = require('../services/mail')

const transport = nodemailer.createTransport(mailConfig)

module.exports = transport
