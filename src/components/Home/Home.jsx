import { Carrusel } from "./Carrusel";
import "./home.scss";

export const Home = () => {
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
            <span className="filtrar">
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
          </p>
        </div>
        <section className="contenedorProductos">
          <section className="containerProduc">
            <div className="containerImg">
              <img src="./img/public4Perf.jpeg" alt="img del producto" />
              <div className="infoProdc">
                <p className="nameProd">Nombre del producto</p>

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
          <section className="containerProduc">
            <div className="containerImg">
              <img src="./img/i1.jpg" alt="img del producto" />
              <div className="infoProdc">
                <p className="nameProd">Nombre del producto</p>

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
          </section>{" "}
          <section className="containerProduc">
            <div className="containerImg">
              <img src="./img/i3.jpg" alt="img del producto" />
              <div className="infoProdc">
                <p className="nameProd">Nombre del producto</p>

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
          </section>{" "}
          <section className="containerProduc">
            <div className="containerImg">
              <img src="./img/i2.jpg" alt="img del producto" />
              <div className="infoProdc">
                <p className="nameProd">Nombre del producto</p>

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
          </section>{" "}
          <section className="containerProduc">
            <div className="containerImg">
              <img src="./img/public4Perf.jpeg" alt="img del producto" />
              <div className="infoProdc">
                <p className="nameProd">Nombre del producto</p>

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
      </section>
    </>
  );
};
