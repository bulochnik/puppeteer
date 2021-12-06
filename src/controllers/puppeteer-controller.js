const puppeteerService = require('../services/puppeteer-service')

class PuppeteerController {
  async puppeteer(request, response, next) {
    try {
      const { link } = request.body
      if (link) {
        const puppeteerData = await puppeteerService.puppeteer(link)

        response.contentType('application/pdf')
        response.send(puppeteerData)
      } else {
        response.send('Something went wrong')
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new PuppeteerController()
