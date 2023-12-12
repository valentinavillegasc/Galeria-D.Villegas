import React from "react";
import { Link } from "react-router-dom";
import style from "./Estilos/Landing.module.css";
export default function Landing() {
  return (
    <div className={style.landing}>
      <div className={style.landingContainer}>
        <h1>Sembradores de vida</h1>
        <h2>Diego Villegas</h2>
        <div className={style.buttons}>
          <Link to="/biografia">
            <button className={style.button}>Biografía</button>
          </Link>
          <Link to="/home">
            <button className={style.button}>Colecciones </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
