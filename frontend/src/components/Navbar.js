import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textTransform: 'uppercase',
        letterSpacing: 2
    },
    btns: {
        marginRight: 4,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));


const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link to='/' className={classes.link}>
                                MernShop
                            </Link>
                        </Typography>
                        <Link to='/signin' className={classes.link}>
                            <Button color="inherit" className={classes.btns} startIcon={<ExitToAppIcon />}>SIGN IN</Button>
                        </Link>
                        <Link to='/cart' className={classes.link}>
                            <Button color="inherit" className={classes.btns} startIcon={<ShoppingCartIcon />}>CART</Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Navbar
