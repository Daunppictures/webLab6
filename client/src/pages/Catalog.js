import "../styles/App.css";
import React, { useEffect } from "react";
import ItemCard from "../Components/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

function Catalog() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div className="home-loading-item-card">
          {[...Array(4)].map((x, i) => (
            <LoadingBox key={i} />
          ))}
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="Catalog container">
          <div className="catalog-header"></div>
          <div className="catalog-card-wrapper">
            {products.map((info) => {
              return (
                <ItemCard
                  key={info.__id}
                  product={info}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog;
