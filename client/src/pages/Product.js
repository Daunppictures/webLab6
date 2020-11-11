import "../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../images/icons/arrow-left.svg";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { detailsProduct } from "../actions/productAction";

function Product(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div className="product-wrapper">
      {loading ? (
        <div className="home-loading-item-card">
          {[...Array(4)].map((x, i) => (
            <LoadingBox key={i} />
          ))}
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="product container">
          <Link className="product-link" to="/catalog">
            <img src={arrow} alt="arrow" />
          </Link>
          <div className="product-card">
            <div className="product-header">
              <img
                src={product.image}
                alt={product.image}
                className="product-img"
              />
            </div>
            <div className="product-body">
              <div className="product-body-head">
                <div className="product-title">{product.name}</div>
                <div className="product-description">{product.description}</div>
              </div>
              <div className="product-footer">
                <div className="product-price">{product.price}</div>
                <div className="product-price-wrapper">
                  <select className="product-qty">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <button className="product-buy-button">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
