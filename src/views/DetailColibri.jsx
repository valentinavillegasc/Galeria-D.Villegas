import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { getColibriesById, cleanDetail } from "../redux/actions";
import style from "./Estilos/DetailColibri.module.css";
import Footer from "../components/Footer";
import DimensionesYPrecios from "../components/DimensionesYPrecios";

export default function DetailColibri() {
  const [mostrarVentana, setMostrarVentana] = useState(false);
  const colibri = useSelector((state) => state.colibriDetail);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getColibriesById(params.id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, params.id]);

  const toggleVentana = () => {
    setMostrarVentana(!mostrarVentana);
  };

  return (
    <div className={style.DetailColibri}>
      <NavBar />
      <div className={style.detalle}>
        <img src={colibri.image} alt="colibri" />

        <div className={style.info}>
          <h1>{colibri.name}</h1>
          <p className={style.coleccion}>
            {colibri.Coleccions && colibri.Coleccions.length > 0
              ? colibri.Coleccions[0].name
              : "Nombre de Colección no disponible"}
          </p>
          <p className={style.fichaTecnica}>{colibri.fichaTecnica}</p>
        </div>
      </div>
      <div>
        <button className={style.button} onClick={toggleVentana}>
          Dimensiones
        </button>
      </div>
      <DimensionesYPrecios mostrar={mostrarVentana} onClose={toggleVentana} />
      <Footer />
    </div>
  );
}
