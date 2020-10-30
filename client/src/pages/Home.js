import "../styles/App.css";
import React, { useState, useEffect } from "react";
import ItemCard from "../Components/ItemCard";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getResponse();
  }, []);

  const getResponse = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setData(data);
  };

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
      <div className="home-item-cards">
        {data.map((info, index) => {
          return (<ItemCard
              key={index}
              name={info.name}
              description={info.description}
              price={info.price}
              image={info.image}
            />);
        })}
      </div>
    </div>
  );
}

export default Home;
