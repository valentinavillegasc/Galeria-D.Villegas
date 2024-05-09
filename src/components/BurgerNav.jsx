import React from "react";
import style from "./Estilos/BurguerNav.module.css";
import { Link } from "react-router-dom";
export default function BurgerNav() {
  return (
    <div className={style.burguerNav}>
      <ul className={style.linkList}>
        <li>
          <Link to="/home" className={style.link}>
            Colecciones
          </Link>
        </li>
        <li>
          <Link to="/biografia" className={style.link}>
            Biografía
          </Link>
        </li>
        <li>
          <Link to="/másInformación" className={style.link}>
            Información
          </Link>
        </li>
        <li>
          <a
            href="https://sorteodvillegas.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className={style.link}>
            Sorteo
          </a>
        </li>
      </ul>
    </div>
  );
}
