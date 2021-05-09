import React from 'react'
import Navbar from './components/Navbar'
import Homescreen from './pages/Homescreen'
import ProductScreen from './pages/ProductScreen'
import Cartscreen from './pages/Cartscreen'
import Loginscreen from './pages/Loginscreen'
import Signupscreen from './pages/Signupscreen'
import Profilescreen from './pages/Profilescreen'
import Shippingscreen from './pages/Shippingscreen'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import useCheckUser from './hooks/useCheckUser'
import PageLoader from './components/PageLoader'
import PrivateRoute from './pages/PrivateRoute'

function App() {

  const { loading } = useCheckUser()

  if (loading) {
    return (
      <React.Fragment>
        <PageLoader />
      </React.Fragment>
    )
  }

  return (
    <Router>
      <Navbar />
      <Container>
        <Route path='/' component={Homescreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={Cartscreen} />
        <Route path='/signin' component={Loginscreen} />
        <Route path='/signup' component={Signupscreen} />
        <PrivateRoute path='/profile' component={Profilescreen} />
        <PrivateRoute path='/shipping' component={Shippingscreen} />
      </Container>
    </Router>
  )
}

export default App;
