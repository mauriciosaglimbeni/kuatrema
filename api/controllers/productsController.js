// const validator = require('express-validator');
const Product = require('../models/Product')

// Get all productsAAAAAAAAAAAAAAAAAAAAAAAAAAA
module.exports.list = function (req, res, next) {
  Product.find(
    {},
    (err, products) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting records.',
        })
      }
      return res.json(products)
    }
  )
}

// Get one product
module.exports.show = function (req, res) {
  const id = req.params.id
  Product.findOne({ _id: id }, function (err, products) {
    if (err) {
      return res.status(500).json({
        message: 'Error getting product.',
      })
    }
    if (!products) {
      return res.status(404).json({
        message: 'Inexistent product.',
      })
    }
    return res.json(products)
  })
}

// Get all products that are offers
module.exports.listOffers = function (req, res, next) {
  Product.find(
    {  isOffer: true },
    (err, products) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting offers.',
        })
      }
      return res.json(products)
    }
  )
}

// Get products from each category
// sweats
module.exports.listSweat = function (req, res, next) {
  Product.find(
    { category: 'sweat' },
    function (err, products) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting records.',
        })
      }
      return res.json(products)
    }
  )
}
// t shirt
module.exports.listTee = function (req, res, next) {
  Product.find(
    { category: 'tshirt' },
    function (err, products) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting records.',
        })
      }
      return res.json(products)
    }
  )
}
// accesories
module.exports.listAcc = function (req, res, next) {
  Product.find(
    { category: 'tshirt' },
    function (err, products) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting records.',
        })
      }
      return res.json(products)
    }
  )
}
// // sort products by lowest price
// module.exports.listByPrice = function (req, res, next) {
//     Product.find(
//       {},
//       function (err, products) {
//         if (err) {
//           return res.status(500).json({
//             message: 'Error getting records.',
//           })
//         }
//         return res.json(products)
//       }.sort({ price: 'asc' })
//     )
//   }
// Sort products by popularity
// module.exports.list = function (req, res, next) {
//   Product.find(
//     {},
//     function (err, products) {
//       if (err) {
//         return res.status(500).json({
//           message: 'Error getting offers.',
//         })
//       }
//       return res.json(products)
//     }.sort({ purchases: 'desc' })
//   )
// }
// // Sort products by artist
// module.exports.list = function (req, res, next) {
//     Product.find(
//       {},
//       function (err, products) {
//         if (err) {
//           return res.status(500).json({
//             message: 'Error getting offers.',
//           })
//         }
//         return res.json(products)
//       }.sort({ artist: 'asc' })
//     )
//   }