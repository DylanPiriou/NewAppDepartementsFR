import React, { useState } from "react";
import "./Cards.css";

export default function Cards({ item }) {
  const [showed, setShowed] = useState(false);

  const handleShow = () => {
    setShowed(!showed);
  };

  return (
    <div onClick={() => handleShow()} className="card">
      <h3>{item.departement}</h3>
      {showed ? (
        <>
          <p>Chef-lieu : {item.chef_lieu}</p>
          <span>{item.id}</span>
        </>
      ) : (
        <div className="no-data">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      )}
      <div className="border"></div>
    </div>
  );
}
