import React from "react";
import style from "./Estilos/MasInformacion.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import precios from "../assets/Precios.png";
import { Link } from "react-router-dom";
export default function MasInformacion() {
  return (
    <div className={style.masInfo}>
      <NavBar />
      <div className={style.contenedorInformacion}>
        <h1>¡Bienvenido a nuestra Galería Virtual!</h1>
        <p>
          Las obras presentadas en nuestra galería son principalmente
          lienzografías, técnica utilizada por el artista que combina elementos
          de pintura digital y gráficos sobre lienzo.
        </p>
        <p>
          Las dimensiones de cada obra se detallan para proporcionar una
          comprensión clara de su escala. Los precios varían según la obra, y
          cada detalle se encuentra en la descripción correspondiente.
        </p>
        <img src={precios} alt="Dimensiones y sus precios" />
        <p>
          Para obtener más información sobre una obra en particular, realizar
          una compra o hacer consultas adicionales, no dude en ponerse en
          contacto con nosotros a través del
          <Link className={style.link} to="/contacto">
            {" "}
            formulario de contacto
          </Link>
          . Nos comprometemos a brindar un servicio eficiente y garantizar que
          las obras lleguen a usted en perfectas condiciones.
        </p>
      </div>

      <Footer />
    </div>
  );
}
