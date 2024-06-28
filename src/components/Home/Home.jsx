import "./home.scss";

export const Home = () => {
  return (
    <>
      <section className="homeContainer">
        <h1 className="title">
          Mi <span className="letraTitle">pedido</span>
        </h1>
        <div className="containercarrusel">
          <div className="containerUno">
            <div className="img">
              <img src="./img/i1.jpg" alt="img de una hamburguesa" />

              <div className="descuento">
                <span className="porcentaje">50%</span>
                <span className="descuentoTexto">OFF</span>
              </div>
            </div>

            <div className="infoCarrusel">
              <h2 className="nombreProdCarrusel">
                Big stomach
                <span className="precioCarrusel">$7.300</span>
              </h2>
              <p className="descripCarrusel">
                Big stomach es una hamburguesa delicada y deliciosa que tiene un
                tamaño grande.
              </p>
            </div>
          </div>

          <div className="containerUno dere">
            <div className="img">
              <img src="./img/i2.jpg" alt="img de una hamburguesa" />

              <div className="descuento">
                <span className="porcentaje">50%</span>
                <span className="descuentoTexto">OFF</span>
              </div>
            </div>

            <div className="infoCarrusel">
              <h2 className="nombreProdCarrusel">
                Big stomach
                <span className="precioCarrusel">$7.300</span>
              </h2>
              <p className="descripCarrusel">
                Big stomach es una hamburguesa delicada y deliciosa que tiene un
                tamaño grande.
              </p>
            </div>
          </div>

          <div className="containerUno izquierda">
            <div className="img">
              <img src="./img/i3.jpg" alt="img de una hamburguesa" />

              <div className="descuento">
                <span className="porcentaje">50%</span>
                <span className="descuentoTexto">OFF</span>
              </div>
            </div>

            <div className="infoCarrusel">
              <h2 className="nombreProdCarrusel">
                Big stomach
                <span className="precioCarrusel">$7.300</span>
              </h2>
              <p className="descripCarrusel">
                Big stomach es una hamburguesa delicada y deliciosa que tiene un
                tamaño grande.
              </p>
            </div>
          </div>
        </div>
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
