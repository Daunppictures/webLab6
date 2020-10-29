import "../styles/App.css";
import React from "react";

function Home() {
  return (
    <div className="Home container">
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
  );
}

export default Home;
