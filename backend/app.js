const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db/db')
const productRoutes = require('./routes/productRoutes')

dotenv.config()
connectDB();

const app = express()

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})