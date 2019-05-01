const Ad = require('../models/Ad')
const User = require('../models/User')
const Mail = require('../services/mail')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    await Mail.sendMail({
      from: '"Gilberto Savoini" <savoini@unicamp.br>',
      to: purchaseAd.author.email,
      subject: `Solicitação de compra: ${purchaseAd.title}`,
      template: 'purchase',
      context: { user, content, ad: purchaseAd }
    })

    return res.send()
  }
}

module.exports = new PurchaseController()
