import React, { useState, useEffect } from 'react'
import products from '../data'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import {
    Grid,
    Button,
    CardMedia,
    Typography,
    List,
    ListItem
} from '@material-ui/core'
import { Rating } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'inherit',

        '& > *': {
            marginTop: 20,
            fontWeight: '500',
            letterSpacing: 1.25
        },
    },
    grid: {
        marginTop: 20,
    }
}));


const ProductScreen = ({ match }) => {

    const classes = useStyles();

    const product = products.find(p => p._id === match.params.id)

    return (
        <React.Fragment>
            <Link to='/' className={classes.link}>
                <Button color="inherit">Go Back</Button>
            </Link>

            <Grid container spacing={5} className={classes.grid} >
                <Grid item md={6}>
                    <CardMedia component='img' src={product.image} />
                </Grid>
                <Grid item md={3}>
                    <List>
                        <ListItem divider={true}>
                            <Typography variant='h5'>
                                {product.name}
                            </Typography>
                        </ListItem>
                        <ListItem divider={true}>
                            <Typography variant='subtitle1'>
                                Price: ${product.price}
                            </Typography>
                        </ListItem>
                        <ListItem divider={true}>
                            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                        </ListItem>
                        <ListItem>
                            <Typography variant='body1'>
                                {product.description}
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ProductScreen
