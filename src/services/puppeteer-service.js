const puppeteer = require('puppeteer')

const PEPPETEER_DEFAULT_MARGIN = { top: 60, right: 36, bottom: 60, left: 36 }

class PuppeteerService {
  async puppeteer(link) {
    console.log('link :', link)
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage()
    // await page.goto('https://www.google.com', { waitUntil: 'networkidle2' })
    await page.goto(`${link}`, { waitUntil: 'networkidle2' })
    const pdf = await page.pdf({ format: 'A4', margin: PEPPETEER_DEFAULT_MARGIN })

    await browser.close()
    return pdf
  }
}

module.exports = new PuppeteerService()
