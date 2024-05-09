import "./App.css";
import Biografia from "./views/Biografia";
import Home from "./views/Home";
import Landing from "./views/Landing";
import Colibries from "./views/Colibries";
import DetailColeccion from "./views/DetailColeccion";
import DetailColibri from "./views/DetailColibri";
import { Route, Routes } from "react-router-dom";
import MasInformacion from "./views/MasInformacion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/home" element={<Home />} />
        <Route path="/colibries" element={<Colibries />} />
        <Route path="/detailColeccion/:id" element={<DetailColeccion />} />
        <Route path="/detailColibri/:id" element={<DetailColibri />} />
        <Route path="/másInformación" element={<MasInformacion />} />
      </Routes>
    </div>
  );
}

export default App;
