import React, { useState, useEffect } from 'react'
import products from '../data'

const ProductScreen = ({ match }) => {

    const product = products.find(p => p._id === match.params.id)

    return (
        <React.Fragment>
            <h1>{product.name}</h1>
        </React.Fragment>
    )
}

export default ProductScreen
