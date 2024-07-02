/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const FuncionesContext = createContext();

const FuncionProvider = ({ children }) => {
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

  //funcion para abrir el filtrar producto
  const [abrirFiltrar, SetAbrirFiltrar] = useState();
  function handleFiltrar() {
    SetAbrirFiltrar(!abrirFiltrar);
  }

  // funcion para sumar y restar los productos
  const [cantidad, setCantidad] = useState(0);

  const handleClickSumar = (id) => {
    setCantidad((prevCantidad) => ({
      ...prevCantidad,
      [id]: (prevCantidad[id] || 0) + 1,
    }));
  };

  const handleClickRestar = (id) => {
    setCantidad((prevCantidad) => ({
      ...prevCantidad,
      [id]: (prevCantidad[id] || 0) > 0 ? prevCantidad[id] - 1 : 0,
    }));
  };

  return (
    <FuncionesContext.Provider
      value={{
        arrayProduc,
        handleFiltrar,
        abrirFiltrar,
        handleClickSumar,
        handleClickRestar,
        cantidad,
      }}
    >
      {children}
    </FuncionesContext.Provider>
  );
};

export { FuncionesContext, FuncionProvider };
