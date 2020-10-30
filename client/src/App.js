import React from "react";
import './styles/App.css';
import Cart from "./pages/Cart";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/catalog" component={Catalog} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
