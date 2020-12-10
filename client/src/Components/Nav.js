import "../styles/App.css";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../images/BingLogo.svg";

function Nav() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const burgerFunc = () => {
    const menu = document.getElementById("menu");

    menu.classList.toggle("active-menu");
  };

  return (
    <div className="header">
      <div className="container container-between header-body">
        <NavLink exact to="/" className="header-logo">
          <img src={logo} alt="logo" className="header-img" />
        </NavLink>

        <div id="menu" className="menu-wrapper active">
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
                    <span className="badge">{cartItems.length}</span>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
            <NavLink to="/signin" className="button-sign-in">
              Sign In
            </NavLink>
            <button className="button-sign-up">Sign Up</button>
          </div>
        </div>
        <div onClick={burgerFunc} id="burger" className="header-burger">
          <div className="line1"></div>
          <div className="line1"></div>
          <div className="line1"></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
