import "../styles/App.css";
import React, { useEffect } from "react";
import ItemCard from "../Components/ItemCard";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";

function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <div className="Home container">
      <div className="home-header-card">
        <div className="home-main-img"></div>
        <div className="home-text-block">
          <h1 className="home-title">IPhone 12</h1>
          <p className="home-second-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            similique aperiam tenetur illum facere!
          </p>
          <div className="home-button-body">
            <button className="home-button">Buy</button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="home-loading-item-card">
          {[...Array(4)].map((x, i) => (
            <LoadingBox key={i} />
          ))}
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="home-item-cards">
          {products.map((info, index) => {
            return (
              <ItemCard
                key={index}
                name={info.name}
                description={info.description}
                price={info.price}
                image={info.image}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
