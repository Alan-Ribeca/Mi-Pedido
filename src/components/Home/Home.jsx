import { NavMovil } from "../navbar/NavMovil";
import "./home.scss";

export const Home = () => {
  return (
    <>
      <section className="homeContainer">
        <h1 className="title">Mi pedido</h1>

        <div className="carrusel">aca esta el carrusel</div>

        <div className="filtrarProdc">
          <p className="titleProduc">
            Productos
            <span className="filtrar">
              Filtrar
              <span className="flecha">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-arrow-down-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                  />
                </svg>
              </span>
            </span>
          </p>
        </div>

        <section className="containerProduc">
          <div className="containerImg">
            <img src="./img/public4Perf.jpeg" alt="img del producto" />
            <div className="infoProdc">
              <p className="NameProd">Nombre del producto</p>

              <p className="stock">
                Stock disp
                <span className="numerStock"> 583</span>
              </p>
            </div>
          </div>

          <p className="precio">$600</p>

          <div className="contador">
            <button className="btnContador menos">-</button>
            <p className="numer">1</p>
            <button className="btnContador mas">+</button>
          </div>
        </section>
      </section>
      <NavMovil />
    </>
  );
};
