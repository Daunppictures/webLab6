import "../styles/App.css";
import React from "react";

function ItemCard({name, description, price, image}) {
  return (
    <div className="item-card">
      <div style={{backgroundImage: "url(" + image + ")"}} className="item-card-header"></div>
      <div className="item-card-body">
        <div className="card-title">{name}</div>
        <div className="card-text">{description}</div>
        <div className="card-footer">
          <div className="card-price">{price}</div>
          <button className="card-button">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
