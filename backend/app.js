const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db/db')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

dotenv.config()
connectDB();

const app = express()

// Parse JSON data
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})