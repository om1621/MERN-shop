import React from 'react'
import Navbar from './components/Navbar'
import Homescreen from './pages/Homescreen'
import ProductScreen from './pages/ProductScreen'
import Cartscreen from './pages/Cartscreen'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Route path='/' component={Homescreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={Cartscreen} />
      </Container>
    </Router>
  );
}

export default App;
