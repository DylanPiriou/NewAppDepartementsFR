import React, { useState } from "react";
import { projectData } from "./data";
import Cards from "./Cards";
import "./Home.css";

export default function Home() {
  const [searchData, setSearchData] = useState("");
  const handleReload = () => {
    window.location.reload();
    return false;
  };

  return (
    <div className="home-container">
      <h1>Les départements français</h1>
      <form>
        <input
          onChange={(e) => setSearchData(e.target.value)}
          type="text"
          placeholder="Chercher un département"
        />
        <label>Entrer un nom ou un numéro.</label>
        <button onClick={() => handleReload()} className="reload-btn">
          mélanger&nbsp;
          <i className="fa-sharp fa-solid fa-arrow-rotate-right"></i>
        </button>
      </form>
      {searchData !== "" ? (
        <div className="grid">
          {projectData
            .filter(
              (item) =>
                item.departement.toLowerCase().includes(searchData) ||
                item.id.toLowerCase().includes(searchData) ||
                item.chef_lieu.toLowerCase().includes(searchData)
            )
            .map((item) => {
              return <Cards item={item} />;
            })}
        </div>
      ) : (
        <div className="grid">
          {projectData
            .sort(() => Math.random() - 0.5)
            .map((item) => {
              return <Cards item={item} />;
            })}
        </div>
      )}
      <footer>
        <h3>Les départements français</h3>
        <small>Réalisé par D.Piriou.</small>
      </footer>
    </div>
  );
}
