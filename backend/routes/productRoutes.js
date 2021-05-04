const express = require('express')
const Product = require('../models/productSchema')

const router = express.Router()

// @desc   Get all products
// @route  /api/products
// @access Public
router.get('/', async (req, res) => {
    const data = await Product.find()
    res.json(data)
})

// @desc   Get single product
// @route  /api/products/:id
// @access Public
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id)

    if (product) {
        res.json(product)
    }
    else {
        res.status(404).json({ message: "Product not found" })
    }

})

module.exports = router