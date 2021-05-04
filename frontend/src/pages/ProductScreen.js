import React, { useEffect } from 'react'
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
import { Rating } from '@material-ui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { getProuctDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Error from '../components/Error'

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

    const classes = useStyles()

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)

    const { loading, product, error } = productDetails

    useEffect(() => {
        dispatch(getProuctDetails(match.params.id))
    }, [dispatch])

    return (
        <React.Fragment>
            <Link to='/' className={classes.link}>
                <Button color="inherit">Go Back</Button>
            </Link>
            {
                loading ? <Loader /> :
                    error ? <Error err={error} /> :
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
                                        <Rating name="half-rating-read" defaultValue={0} value={product.rating} precision={0.5} readOnly />
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body1'>
                                            {product.description}
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
            }

        </React.Fragment>
    )
}

export default ProductScreen
