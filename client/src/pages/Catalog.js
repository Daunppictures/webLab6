import '../styles/App.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import iphone from "../images/cardImages/iphone-12-dark.jpg";


function Catalog() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const getResponse = async () => {
        const { data } = await axios.get("/api/hello");
        setData(data);

    };
    getResponse();
  }, []);


  return (
    <div className="Catalog container">
      <div className="catalog-header">
        
      </div>
      <div className="catalog-card-wrapper">
        <div className="catalog-card">
          <div className="catalog-card-header">
            <img src={iphone} className="catalog-card-img"/>
          </div>
          <div className="catalog-card-body">
            <div className="catalog-card-title">
              Iphone 12
            </div>
            <div className="catalog-card-sec-title">
              Dark, 128 Gb
            </div>
            <div className="catalog-card-footer">
              <div className="catalog-card-price">
                700 $
              </div>
              <div className="catalog-card-button">
                Buy
              </div>
            </div>
          </div>
        </div>
        
        <div className="catalog-card">
          <div className="catalog-card-header">
            <img src={iphone} className="catalog-card-img"/>
          </div>
          <div className="catalog-card-body">
            <div className="catalog-card-title">
              Iphone 12
            </div>
            <div className="catalog-card-sec-title">
              Dark, 128 Gb
            </div>
            <div className="catalog-card-footer">
              <div className="catalog-card-price">
                700 $
              </div>
              <div className="catalog-card-button">
                Buy
              </div>
            </div>
          </div>
        </div>

        <div className="catalog-card">
          <div className="catalog-card-header">
            <img src={iphone} className="catalog-card-img"/>
          </div>
          <div className="catalog-card-body">
            <div className="catalog-card-title">
              Iphone 12
            </div>
            <div className="catalog-card-sec-title">
              Dark, 128 Gb
            </div>
            <div className="catalog-card-footer">
              <div className="catalog-card-price">
                700 $
              </div>
              <div className="catalog-card-button">
                Buy
              </div>
            </div>
          </div>
        </div>

        <div className="catalog-card">
          <div className="catalog-card-header">
            <img src={iphone} className="catalog-card-img"/>
          </div>
          <div className="catalog-card-body">
            <div className="catalog-card-title">
              Iphone 12
            </div>
            <div className="catalog-card-sec-title">
              Dark, 128 Gb
            </div>
            <div className="catalog-card-footer">
              <div className="catalog-card-price">
                700 $
              </div>
              <div className="catalog-card-button">
                Buy
              </div>
            </div>
          </div>
        </div>

        <div className="catalog-card">
          <div className="catalog-card-header">
            <img src={iphone} className="catalog-card-img"/>
          </div>
          <div className="catalog-card-body">
            <div className="catalog-card-title">
              Iphone 12
            </div>
            <div className="catalog-card-sec-title">
              Dark, 128 Gb
            </div>
            <div className="catalog-card-footer">
              <div className="catalog-card-price">
                700 $
              </div>
              <div className="catalog-card-button">
                Buy
              </div>
            </div>
          </div>
        </div>

        <div className="catalog-card">
          <div className="catalog-card-header">
            <img src={iphone} className="catalog-card-img"/>
          </div>
          <div className="catalog-card-body">
            <div className="catalog-card-title">
              Iphone 12
            </div>
            <div className="catalog-card-sec-title">
              Dark, 128 Gb
            </div>
            <div className="catalog-card-footer">
              <div className="catalog-card-price">
                700 $
              </div>
              <div className="catalog-card-button">
                Buy
              </div>
            </div>
          </div>
        </div>

        <div className="catalog-card">
          <div className="catalog-card-header">
            <img src={iphone} className="catalog-card-img"/>
          </div>
          <div className="catalog-card-body">
            <div className="catalog-card-title">
              Iphone 12
            </div>
            <div className="catalog-card-sec-title">
              Dark, 128 Gb
            </div>
            <div className="catalog-card-footer">
              <div className="catalog-card-price">
                700 $
              </div>
              <div className="catalog-card-button">
                Buy
              </div>
            </div>
          </div>
        </div>

        <div className="catalog-card">
          <div className="catalog-card-header">
            <img src={iphone} className="catalog-card-img"/>
          </div>
          <div className="catalog-card-body">
            <div className="catalog-card-title">
              Iphone 12
            </div>
            <div className="catalog-card-sec-title">
              Dark, 128 Gb
            </div>
            <div className="catalog-card-footer">
              <div className="catalog-card-price">
                700 $
              </div>
              <div className="catalog-card-button">
                Buy
              </div>
            </div>
          </div>
        </div>

        <div className="catalog-card">
          <div className="catalog-card-header">
            <img src={iphone} className="catalog-card-img"/>
          </div>
          <div className="catalog-card-body">
            <div className="catalog-card-title">
              Iphone 12
            </div>
            <div className="catalog-card-sec-title">
              Dark, 128 Gb
            </div>
            <div className="catalog-card-footer">
              <div className="catalog-card-price">
                700 $
              </div>
              <div className="catalog-card-button">
                Buy
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {data.map((info, index) => {
        return (<Card
          key={index}
          infoId={info.id}
          firstName={info.firstName}
          lastName={info.lastName}
        />);
        
      })}
    </div>
  );
}

export default Catalog;
