const express = require('express')
const products = require('./data/data')

const app = express();

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find((p) => p._id === id)

    res.json(product)
})

app.listen(5000, () => {
    console.log(`listening on PORT 5000`)
})