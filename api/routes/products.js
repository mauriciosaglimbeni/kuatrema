const { Router } = require('express')

const router = Router({ mergeParams: true })
// Initialize Controller
const productsController = require('../controllers/productsController')
// Get All
router.get('/products', productsController.list)
// Get One
router.get('/products/:id', productsController.show)
// get Offers
router.get('/offers', productsController.listOffers)
// get Releases
router.get('/releases', productsController.listReleases)
// get Sweatshirts
router.get('/sweats', productsController.listSweat)
// get Tshirts
router.get('/tees', productsController.listTee)
// get accesories
router.get('/accesories', productsController.listAcc)

module.exports = router
