import "../styles/App.css";
import React, { useEffect } from "react";
import ItemCard from "./ItemCard";

function CatalogProductsList({ data, filterValue, priceValue }) {
  let filter = data;
  if (filterValue === "All") {
    filter = data.filter((i) => i.price >= priceValue);
  } else {
    filter = data.filter((i) => i.price >= priceValue).filter((i) => i.name === filterValue);
  }

  return (
    <div className="catalog-card-wrapper">
      {filter.map((info) => {
        return <ItemCard key={info._id} product={info} />;
      })}
    </div>
  );
}

export default CatalogProductsList;
