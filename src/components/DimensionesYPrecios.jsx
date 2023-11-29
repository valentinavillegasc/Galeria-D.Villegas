import React from "react";
import style from "./Estilos/DimensionesYPrecios.module.css";
import tamaño from "../assets/tamano-de-papel.png";
const DimensionesYPrecios = ({ mostrar, onClose }) => {
  if (!mostrar) {
    return null;
  }

  return (
    <div className={style.ventanaEmergente}>
      <div className={style.contenido}>
        <button className={style.button} onClick={onClose}>
          X
        </button>
        <div className={style.datos}>
          <p className={style.titulo}>Dimensiones y Precios</p>
          <img src={tamaño} alt="tamaño" />
          <div className={style.precios}>
            <div>
              <p className={style.subtitulo}>Pequeño</p>
              <p>30 X 20 </p>
              <p>$ 377.500</p>
            </div>
            <div>
              <p className={style.subtitulo}>Mediano</p>
              <p>50 X 35</p>
              <p>$ 737.000</p>
            </div>
            <div>
              <p className={style.subtitulo}>Grande</p>
              <p>70 X 50 </p>
              <p>$ 1.470.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimensionesYPrecios;
