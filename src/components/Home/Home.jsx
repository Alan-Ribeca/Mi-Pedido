import { useContext } from "react";
import { FuncionesContext } from "../../context/Funciones";
import { Carrusel } from "./Carrusel";
import { Link} from "react-router-dom";

import "./home.scss";

export const Home = () => {
  const {
    arrayProduc,
    handleFiltrar,
    abrirFiltrar,
    handleClickSumar,
    handleClickRestar,
    cantidad,
    precioCalculado,
    handleClickNav
  } = useContext(FuncionesContext);

  return (
    <>
      <section className="homeContainer">
        <h1 className="title">
          Mi <span className="letraTitle">pedido</span>
        </h1>
        <Carrusel />
        <div className="filtrarProdc">
          <p className="titleProduc">
            Productos
            <span className="filtrar" onClick={handleFiltrar}>
              Filtrar
              <span className="flecha">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  className="flechaSvg"
                >
                  <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                </svg>
              </span>
            </span>
            {abrirFiltrar && (
              <div className="cartelFiltrar">
                <ul className="listaFiltrado">
                  <li className="nameFiltrar">Categoria</li>
                  <li className="nameFiltrar">Descuento</li>
                  <li className="nameFiltrar">A-Z</li>
                  <li className="nameFiltrar">Z-A</li>
                </ul>
              </div>
            )}
          </p>
        </div>
        <section className="contenedorProductos">
          {arrayProduc.map(
            ({ id, img, alt, nameProduc, stock, precio, description }) => (
              // <section className="containerProduc" key={id}>
              <section
                className={`containerProduc ${
                  cantidad[id] > 0 ? "conProduc" : ""
                }`}
                key={id}
              >
                <div className="containerImg">
                  <img src={img} alt={alt} />
                  <div className="infoProdc">
                    <p className="nameProd">{nameProduc}</p>
                    <p className="description">{description}</p>

                    <p className="stock">
                      Stock disp
                      <span className="numerStock"> +{stock}</span>
                    </p>
                  </div>
                </div>

                <p className="precio">
                  {cantidad[id] > 0 ? `$${precioCalculado[id]}` : `$${precio}`}
                </p>

                <div className="contador">
                  <button
                    className="btnContador menos"
                    onClick={() => handleClickRestar(id)}
                  >
                    -
                  </button>
                  <p className="numer">{cantidad[id] || 0}</p>
                  <button
                    className="btnContador mas"
                    onClick={() => handleClickSumar(id)}
                  >
                    +
                  </button>
                </div>
              </section>
            )
          )}
          <Link to="/pedido" className="btnLink"
          onClick={() => handleClickNav("pedido")}>
            <button
              className={`btnFinalizarCompra ${
                arrayProduc.some((p) => cantidad[p.id] > 0) ? "btnActivado" : ""
              }`}
              disabled={!arrayProduc.some((p) => cantidad[p.id] > 0)}
            >
              Realizar pedido
            </button>
          </Link>
        </section>
      </section>
    </>
  );
};
