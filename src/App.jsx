import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { NavMovil } from "./components/navbar/NavMovil";
import { Perfil } from "./components/Perfil/Perfil";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <NavMovil />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
