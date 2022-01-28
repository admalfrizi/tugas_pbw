import Navbar from './components/Navbar/Navbar';
import React, { Fragment} from "react"
import {BrowserRouter as Router} from "react-router-dom";
import Routing from './components/Navbar/RoutingScreen';
import { CartProvider } from 'react-use-cart';

function App() {
  
  return (
    <Router>
      <Fragment>
        <CartProvider>
          <Navbar />
          <Routing />
        </CartProvider>
      </Fragment>
    </Router>
  );
}

export default App;
