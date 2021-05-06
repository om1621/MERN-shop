import React, { useState } from 'react';
import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
    OutlinedInput,
    InputLabel,
    FormControl,
    Typography,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    root: {
        '& > *': {
            width: '100%',
            maxWidth: 400,
            marginRight: 'auto',
            marginLeft: 'auto',
            paddingLeft: 10,
            paddingRight: 10,

            '& > *': {
                marginTop: 10,
                marginBottom: 10,
            }

        },
    },
    signup: {
        marginTop: 10
    }
}));

function Signupscreen() {

    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <React.Fragment>
            <h1 style={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: '500', textAlign: 'center', color: '#585858' }}>Sign Up</h1>
            <form className={classes.root}>
                <div>
                    <TextField
                        id="outlined-error-helper-text"
                        label="Email"
                        variant="outlined"
                        value={email}
                        placeholder="abc@gmail.com"
                        fullWidth={true}
                        onChange={(e) => setEmail(e.target.value)}
                        className={classes.input__box}
                    />
                    <FormControl fullWidth={true}>
                        <InputLabel
                            htmlFor="outlined-adornment-password"
                            className="MuiInputLabel-outlined"
                        >
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="test123"
                            label="Password"
                            value={password}
                            fullWidth={true}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                    </FormControl>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                    >
                        sign up
                    </Button>
                    <Link to='/signin' className='link'>
                        <Typography variant="subtitle2" className={classes.signup}>
                            Already Registered? Sign In.
                        </Typography>
                    </Link>
                </div>
            </form>


        </React.Fragment>
    )
}

export default Signupscreen;
