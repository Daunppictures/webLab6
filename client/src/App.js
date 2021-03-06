import React from "react";
import "./styles/App.css";
import Cart from "./pages/Cart";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Footer from "./Components/Footer";
import Product from "./pages/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from "./pages/Signin";
import Register from "./pages/Register";
import ShippingAddress from "./pages/ShippingAddress";
import Success from "./pages/Success";

function App() {
  return (
    <div className="App">
      <Router >
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id?" component={Product}></Route>
          <Route path="/cart/:id" component={Cart} />
          <Route path="/cart" component={Cart} />
          <Route path="/catalog" component={Catalog} />
          <Route path='/signin' component={Signin}/>
          <Route path='/register' component={Register}/>
          <Route path='/shipping' component={ShippingAddress}/>
          <Route path='/success' component={Success}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
