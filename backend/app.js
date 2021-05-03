const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/data')
const connectDB = require('./db/db')

dotenv.config()

const app = express()

connectDB();

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find((p) => p._id === id)

    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})