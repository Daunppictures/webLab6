import "../styles/App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import LoadingRectangle from "../Components/LoadingRectangle";
import CatalogProductsList from "../Components/CatalogProductsList";

function Catalog() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const [q, setQ] = useState("");
  const [a, setA] = useState("All");
  const [price, setPrice] = useState(500);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  function search(info) {
    return info.filter(
      (i) =>
        i.name.toLowerCase().includes(q.toLowerCase()) ||
        i.description.toLowerCase().includes(q.toLowerCase()) ||
        i.price.toString().toLowerCase().includes(q.toLowerCase())
    );
  }

  return (
    <div>
      {loading ? (
        <div className="container catalog-load-wrapper">
          <LoadingRectangle height="100px" width="100%" />
          <div className="catalog-load">
            {[...Array(12)].map((x, i) => (
              <LoadingBox className="catalog-load" key={i} />
            ))}
          </div>
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="Catalog container">
          <div className="catalog-header">
            <div className="catalog-filter-by-price">
              <span className="catalog-filter-text">Model</span>
              <select
                onChange={(e) => setA(e.target.value)}
                className="catalog-filter-list"
              >
                <option value="All" className="catalog-filter-item">
                  All
                </option>
                <option value="Iphone 12" className="catalog-filter-item">
                  Iphone 12
                </option>
                <option value="Iphone 12 Pro" className="catalog-filter-item">
                  Iphone 12 pro
                </option>
              </select>
            </div>

            <div className="catalog-filter-by-price">
              <span className="catalog-filter-text">Model</span>
              <select
                onChange={(e) => setA(e.target.value)}
                className="catalog-filter-list"
              >
                <option value="All" className="catalog-filter-item">
                  All
                </option>
                <option value="Iphone 12" className="catalog-filter-item">
                  Iphone 12
                </option>
                <option value="Iphone 12 Pro" className="catalog-filter-item">
                  Iphone 12 pro
                </option>
              </select>
            </div>
            <div className="slider-wrapper">
              <input
                className="slider"
                onChange={(e) => setPrice(e.target.value)}
                type="range"
                min="500"
                max="1000"
                step="100"
              />
              <div className="slider-footer">
                <div>500 $</div>
                <div>1000 $</div>
              </div>
            </div>

            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="catalog-search"
              type="text"
              placeholder="Search"
            />
          </div>
          <CatalogProductsList
            data={search(products)}
            filterValue={a}
            priceValue={price}
          />
        </div>
      )}
    </div>
  );
}

export default Catalog;
