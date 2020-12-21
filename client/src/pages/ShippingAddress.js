import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../Components/CheckoutSteps";

export default function ShippingAddress(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push("/success");
  };
  return (
    <div className="container">
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="shipping ">
        <form className="signin-form" onSubmit={submitHandler}>
          <div>
            <h1>Shipping Address</h1>
            <div>
              <div className="signin-input-wrapper">
                <input
                  className="signin-input"
                  type="text"
                  id="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <label className="signin-label" htmlFor="fullName">
                  Full name
                </label>
              </div>

              <div className="signin-input-wrapper">
                <input
                  className="signin-input"
                  type="text"
                  id="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label className="signin-label" htmlFor="address">
                  Address
                </label>
              </div>

              <div className="signin-input-wrapper">
                <input
                  className="signin-input"
                  type="text"
                  id="city"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <label className="signin-label" htmlFor="city">
                  City
                </label>
              </div>

              <div className="signin-input-wrapper">
                <input
                  className="signin-input"
                  type="text"
                  id="postalCode"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
                <label className="signin-label" htmlFor="postalCode">
                  Postal Code
                </label>
              </div>

              <div className="signin-input-wrapper">
                <input
                  className="signin-input"
                  type="text"
                  id="country"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <label className="signin-label" htmlFor="country">
                  Country
                </label>
              </div>
              <div className="shipping-footer">
                <button type="submit" className="shipping-button">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
