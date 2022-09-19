const puppeteer = require('puppeteer')

const PUPPETEER_DEFAULT_MARGIN = { top: 36, right: 36, bottom: 20, left: 36 }

class PuppeteerService {
  async puppeteer(link) {
    try {
      const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
      const page = await browser.newPage()
      await page.goto(`${link}`, { waitUntil: 'networkidle2' })
      const pdf = await page.pdf({ format: 'A4', margin: PUPPETEER_DEFAULT_MARGIN })

      await browser.close()
      return pdf
    } catch (error) {
      return error
    }
  }
}

module.exports = new PuppeteerService()
