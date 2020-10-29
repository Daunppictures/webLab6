import '../styles/App.css';
import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

function Catalog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getResponse();
  }, []);

  const getResponse = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    setData(data);
  };


  return (
    <div className="Catalog container">
      <h1>Home</h1>
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
