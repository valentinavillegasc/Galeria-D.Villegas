import React from "react";
import style from "./Estilos/MasInformacion.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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

        <div className={style.precios}>
          <p>20 X 15 - $277.500</p>
          <p>30 X 20 - $377.500</p>
          <p>40 X 30 - $537.000</p>
          <p>40 X 50 - $637.000</p>
          <p>50 x 35 - $737.000</p>
          <p>70 x 50 - $1.470.000</p>
        </div>
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
