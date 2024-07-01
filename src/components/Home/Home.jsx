import { useState } from "react";
import { Carrusel } from "./Carrusel";
import "./home.scss";

export const Home = () => {
  const arrayProduc = [
    {
      id: 1,
      img: "./img/public4Perf.jpeg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      stock: 500,
      precio: 600,
    },
    {
      id: 2,
      img: "./img/i1.jpg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      stock: 30,
      precio: 1600,
    },
    {
      id: 3,
      img: "./img/i2.jpg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      stock: 80,
      precio: 80,
    },
    {
      id: 4,
      img: "./img/i3.jpg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      stock: 10,
      precio: 350,
    },
    {
      id: 5,
      img: "./img/public4Perf.jpeg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      stock: 511,
      precio: 556,
    },
    {
      id: 6,
      img: "./img/i1.jpg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      stock: 77,
      precio: 330,
    },
  ];

  const [abrirFiltrar, SetAbrirFiltrar] = useState();

  function handleFiltrar() {
    SetAbrirFiltrar(!abrirFiltrar);
  }

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
                <ul className="ListaFiltrado">
                  <li className="nameFiltrar">Categoria</li>
                  <li className="nameFiltrar">A-Z</li>
                  <li className="nameFiltrar">Z-A</li>
                  <li className="nameFiltrar">Descuento</li>
                </ul>
              </div>
            )}
          </p>
        </div>
        <section className="contenedorProductos">
          {arrayProduc.map(({ id, img, alt, nameProduc, stock, precio }) => (
            <section className="containerProduc" key={id}>
              <div className="containerImg">
                <img src={img} alt={alt} />
                <div className="infoProdc">
                  <p className="nameProd">{nameProduc}</p>

                  <p className="stock">
                    Stock disp
                    <span className="numerStock"> {stock}</span>
                  </p>
                </div>
              </div>

              <p className="precio">${precio}</p>

              <div className="contador">
                <button className="btnContador menos">-</button>
                <p className="numer">1</p>
                <button className="btnContador mas">+</button>
              </div>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};
