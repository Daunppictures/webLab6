import "../styles/App.css";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../images/BingLogo.svg";

function Nav() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div className="header">
      <div className="container container-between header-body">
        <NavLink exact to="/" className="header-logo">
          <img src={logo} alt="logo" className="header-img" />
        </NavLink>
        <div className="header-burger">
          <span></span>
        </div>
        <div className="menu-wrapper active">
          <nav className="header-nav">
            <ul>
              <li className="header-nav-item">
                <NavLink
                  activeClassName="nav-active"
                  className="link"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink
                  activeClassName="nav-active"
                  className="link"
                  to="/catalog"
                >
                  Catalog
                </NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink
                  activeClassName="nav-active"
                  className="link"
                  to="/cart"
                >
                  Cart
                  {cartItems.length > 0 && (
                    <span className="badge">
                      {cartItems.length}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
            <button className="button-sign-in">Sign In</button>
            <button className="button-sign-up">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
