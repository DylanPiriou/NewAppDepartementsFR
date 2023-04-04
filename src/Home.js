import React, { useState } from "react";
import { projectData } from "./data";
import Cards from "./Cards";
import "./Home.css";

export default function Home() {
  const [searchData, setSearchData] = useState("");
  const [showed, setShowed] = useState(false);

  const handleGlobalShow = () => {
    setShowed(!showed)
  }
  
  // const handleReload = () => {
  //   window.location.reload();
  //   return false;
  // };

  // const handleSort = () => {
  //   return Math.random() - 0.5
  // }

  return (
    <div className="home-container">
      <header>
      <h1>
        <span>les départements</span>
        <br />
        <span>français</span>
      </h1>
      <form>
        <input
          onChange={(e) => setSearchData(e.target.value)}
          type="text"
          placeholder="Chercher un département"
        />
        <label>Entrer un nom ou un numéro.</label>
        {/* <button className="reload-btn">
          mélanger&nbsp;
          <i className="fa-sharp fa-solid fa-arrow-rotate-right"></i>
        </button> */}
        {showed ? <div onClick={() => handleGlobalShow()} className="show-btn">Cacher les informations&nbsp;<i class="fa-solid fa-eye-slash"></i></div> :         <div onClick={() => handleGlobalShow()} className="show-btn">Montrer les informations&nbsp;<i class="fa-solid fa-eye"></i></div>}
      </form>
      </header>
      {searchData !== "" ? (
        <div className="grid">
          {projectData
            .filter(
              (item) =>
                item.departement.includes(searchData) ||
                item.departement.toLowerCase().includes(searchData) ||
                item.id.toLowerCase().includes(searchData) ||
                item.chef_lieu.includes(searchData) ||
                item.chef_lieu.toLowerCase().includes(searchData)
            )
            .map((item) => {
              return <Cards item={item} showed={showed} setShowed={setShowed} />;
            })}
        </div>
      ) : (
        <div className="grid">
          {projectData
              // .sort(() => handleSort())
            .map((item) => {
              return <Cards item={item} showed={showed} setShowed={setShowed} />;
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
