const Mail = require('../services/Mail')

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }

  async handle (job, done) {
    const { user, ad, content } = job.data

    await Mail.sendMail({
      from: '"Gilberto Savoini" <savoini@unicamp.br>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      template: 'purchase',
      context: { user, content, ad }
    })

    return done()
  }
}

module.exports = new PurchaseMail()
