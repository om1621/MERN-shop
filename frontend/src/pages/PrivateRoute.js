import React from 'react'
import { useSelector } from 'react-redux'
import PageLoader from '../components/PageLoader'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {

    const userLogin = useSelector(state => state.userLogin)

    const { loading, userInfo } = userLogin

    const { component: Component, ...rest } = props

    if (loading) {
        return (
            <PageLoader />
        )
    }

    if (userInfo) {
        return (<Route {...rest} render={(props) =>
        (
            <Component {...props} />
        )
        }
        />
        )
    }

    return <Redirect to='/signin' />
}

export default PrivateRoute
