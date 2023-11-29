import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { getColibriesById, cleanDetail } from "../redux/actions";
import style from "./Estilos/DetailColibri.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function DetailColibri() {
  const colibri = useSelector((state) => state.colibriDetail);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getColibriesById(params.id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, params.id]);

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
          <Link to="/contacto" className={style.button}>
            Más información
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
