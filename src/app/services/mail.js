const nodemailer = require('nodemailer')
const mailConfig = require('../../config/mail')

var transport = nodemailer.createTransport(mailConfig)

module.exports = transport
