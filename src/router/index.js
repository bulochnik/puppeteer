const { Router } = require('express')

const puppeteerController = require('../controllers/puppeteer-controller')

const router = new Router()

router.post('/puppeteer', puppeteerController.puppeteer)

module.exports = router
