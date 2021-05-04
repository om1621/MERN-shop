import React, { useEffect } from 'react'
import Product from '../components/Product'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getProuctList } from '../actions/productActions'
import Loader from '../components/Loader'
import Error from '../components/Error'


const Homescreen = () => {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, products, error } = productList

    useEffect(() => {
        dispatch(getProuctList())
    }, [dispatch])

    return (
        <React.Fragment>
            <h1 style={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: '500' }}>Latest Products</h1>
            {
                loading ? <Loader /> :
                    error ? <Error err={error} /> :
                        <Grid container spacing={5} >
                            {products.map((product) => (
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Product key={product.id} product={product} />
                                </Grid>
                            ))}
                        </Grid>
            }


        </React.Fragment>
    )
}

export default Homescreen
