import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import { Grid } from '@material-ui/core'
import axios from 'axios'

const Homescreen = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {
            const res = await axios.get('api/products')
            console.log(res)
            setProducts(res.data);
        }

        getProducts()

    }, [])

    return (
        <React.Fragment>
            <h1 style={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: '500' }}>Latest Products</h1>
            <Grid container spacing={5} >
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Product key={product.id} product={product} />
                    </Grid>
                ))}
            </Grid>

        </React.Fragment>
    )
}

export default Homescreen
