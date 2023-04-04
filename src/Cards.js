import React, { useState } from "react";
import "./Cards.css";

export default function Cards({ item, showed, setShowed }) {
  const [actived, setActived] = useState(false)
  
  
  const handleShow = () => {
    setActived(!actived)
  };

  return (
    <div onClick={() => handleShow()} className="card">
      <img src="/msm.jpg" alt="" className="bg-img"/>
      {showed || actived ? (
        <div className="data">
          <h3>{item.departement}</h3>
          <p>Chef-lieu : {item.chef_lieu}</p>
          <span>{item.id}</span>
        </div>
      ) : (
        <div className="no-data">
          <img src={item.img} alt="" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      )}
      <div className="border"></div>
    </div>
  );
}
