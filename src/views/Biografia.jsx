import React from "react";
import NavBar from "../components/NavBar";
import style from "./Estilos/Biografia.module.css";
import foto from "../assets/FotoBiografia.jpeg";
import Footer from "../components/Footer";

export default function Biografia() {
  return (
    <div className={style.biografia}>
      <NavBar />
      <div className={style.infoContainer}>
        <div className={style.fotoContainer}>
          <img src={foto} alt="Foto biografía" className={style.foto} />
        </div>
        <div className={style.infoBiografia}>
          <div className={style.nameContainer}>
            <h2>Diego Villegas Tafur</h2>
            <p>Una Trayectoria Creativa y Entrañable en el Mundo del Arte.</p>
          </div>

          <div className={style.textoParteDerecha}>
            <p>
              Destacado Maestro en Artes Plásticas y artista global
              contemporáneo, se destaca por su expresión artística centrada en
              la abstracción de figuras de aves, como el colibrí, para
              transmitir un mensaje profundo. Hijo de los reconocidos maestros
              Alicia Tafur y Armando Villegas, su obra se inspira en el
              dinamismo del vuelo y la riqueza cromática de estas criaturas
              aladas.
            </p>
            <p>
              Iniciando su apasionado viaje en el arte con estudios en Diseño
              Gráfico en la Universidad Jorge Tadeo Lozano, Diego demuestra un
              compromiso inquebrantable con su vocación creativa. Su exploración
              constante incluye experiencias en diversos talleres de arte, desde
              escultura y fundición hasta pintura y joyería artesanal.
            </p>
            <p>
              Además de su contribución al diseño gráfico y la creación de obras
              notables, Diego Villegas también se destaca como educador y
              mentor, siendo director de Casa Tafur y participando activamente
              en exposiciones y concursos. Su legado es un testimonio elocuente
              de su dedicación al arte y su impacto duradero en la comunidad
              artística y cultural.
            </p>
            <p>
              "Acompañemos cuidemos y disfrutemos al colibrí en su arte de
              polinizar y alegrar a nuestro mundo" <br /> D.Villegas <br />
              Mhaart - Maestro en Artes
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
