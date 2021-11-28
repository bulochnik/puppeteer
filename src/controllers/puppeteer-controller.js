const puppeteerService = require('../services/puppeteer-service')

class PuppeteerController {
  async puppeteer(request, response, next) {
    try {
      const { link } = request.body
      const puppeteerData = await puppeteerService.puppeteer(link)

      response.contentType('application/pdf')
      response.send(puppeteerData)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new PuppeteerController()
