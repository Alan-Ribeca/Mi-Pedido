/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const FuncionesContext = createContext();

const FuncionProvider = ({ children }) => {
  const arrayProduc = [
    {
      id: 1,
      img: "./img/public4Perf.jpeg",
      alt: "img del producto",
      nameProduc: "Queso Cheddar",
      description:
        "Queso de sabor fuerte y textura firme, perfecto para sandwiches.",
      stock: 100,
      precio: 600,
      cantidad: 0,
    },
    {
      id: 2,
      img: "./img/i1.jpg",
      alt: "img del producto",
      nameProduc: "Yogur Natural",
      description: "Yogur sin azúcar, rico en probióticos y calcio.",
      stock: 100,
      precio: 1600,
      cantidad: 0,
    },
    {
      id: 3,
      img: "./img/i2.jpg",
      alt: "img del producto",
      nameProduc: "Tomate",
      description: "Tomate ideal para ensaladas y salsas.",
      stock: 100,
      precio: 80,
      cantidad: 0,
    },
    {
      id: 4,
      img: "./img/i3.jpg",
      alt: "img del producto",
      nameProduc: "Pan Integral",
      description:
        "Pan hecho con harina integral, ideal para una dieta equilibrada",
      stock: 100,
      precio: 350,
      cantidad: 0,
    },
    {
      id: 5,
      img: "./img/public4Perf.jpeg",
      alt: "Pollo al horno",
      nameProduc: "Pollo al horno",
      description: "Pollo cocido al horno, sazonado con hierbas y especias",
      stock: 100,
      precio: 556,
    },
    {
      id: 6,
      img: "./img/i1.jpg",
      alt: "img del producto",
      nameProduc: "Hamburguesa Clásica",
      description: "Hamburguesa con carne de res, lechuga y tomate",
      stock: 100,
      precio: 330,
      cantidad: 0,
    },
  ];

  let productoSeleccionado =
    JSON.parse(localStorage.getItem("productoSeleccionado")) || [];

  //funcion para abrir el filtrar producto
  const [abrirFiltrar, SetAbrirFiltrar] = useState(false);
  function handleFiltrar() {
    SetAbrirFiltrar(!abrirFiltrar);
  }

  // funcion para sumar y restar los productos
  const [cantidad, setCantidad] = useState(0);
  const [precioCalculado, setPrecioCalculado] = useState(cantidad);
  const [claseProductos, setClaseProductos] = useState("");

  const handleClickSumar = (id) => {
    // Actualizar la cantidad seleccionada
    setCantidad((prevCantidad) => {
      const newCantidad = {
        ...prevCantidad,
        [id]: (prevCantidad[id] || 0) + 1,
      };

      if (productoSeleccionado) {
        setClaseProductos("conProduc");
      }

      return newCantidad;
    });

    // Encontrar el producto correspondiente al id
    const product = arrayProduc.find((prod) => prod.id === id);

    // Actualizar el precio calculado utilizando el callback de setState
    setPrecioCalculado((prevPrecios) => ({
      ...prevPrecios,
      [id]: (prevPrecios[id] || 0) + product.precio,
    }));
  };

  // agregar los productos seleccionados al localStorage
  useEffect(() => {


    Object.keys(cantidad).forEach((id) => {
      const existingProductIndex = productoSeleccionado.findIndex(
        (prod) => prod.id === parseInt(id)
      );
      const product = arrayProduc.find((prod) => prod.id === parseInt(id));

      if (cantidad[id] === 0) {
        // Eliminar producto si la cantidad es 0
        if (existingProductIndex >= 0) {
          productoSeleccionado.splice(existingProductIndex, 1);
        }
      } else if (existingProductIndex >= 0) {
        productoSeleccionado[existingProductIndex].cantidad = cantidad[id];
        productoSeleccionado[existingProductIndex].precio = precioCalculado[id];
      } else {
        productoSeleccionado.push({
          ...product,
          cantidad: cantidad[id] || 1,
        });
      }
    });

    localStorage.setItem(
      "productoSeleccionado",
      JSON.stringify(productoSeleccionado)
    );
  }, [cantidad, precioCalculado]);

  // funcion para resetear el array de los productos seleccionados del localStorage cuando se reincia la pag
  useEffect(() => {
    localStorage.setItem("productoSeleccionado", JSON.stringify([]));
  }, []);

  const handleClickRestar = (id) => {
    setCantidad((prevCantidad) => ({
      ...prevCantidad,
      [id]: (prevCantidad[id] || 0) > 0 ? prevCantidad[id] - 1 : 0,
    }));

    // Encontrar el producto correspondiente al id
    const product = arrayProduc.find((prod) => prod.id === id);

    // Actualizar el precio calculado utilizando el callback de setState
    setPrecioCalculado((prevPrecios) => ({
      ...prevPrecios,
      [id]:
        (prevPrecios[id] || 0) > product.precio
          ? prevPrecios[id] - product.precio
          : 0,
    }));
  };

  // funcion para remarcar con la linea blanca en que navegacion estamos (el nav)
  const location = useLocation();

  const obtenerClaseNav = (pathname) => {
    const partes = pathname.split("/");
    return partes[partes.length - 1] || "inicio";
  };

  const [claseNav, setClaseNav] = useState(
    obtenerClaseNav(window.location.pathname)
  );

  useEffect(() => {
    const nuevaClaseNav = obtenerClaseNav(location.pathname);
    setClaseNav(nuevaClaseNav);
    localStorage.setItem("claseNav", nuevaClaseNav);
  }, [location]);

  const handleClickNav = (nav) => {
    setClaseNav(nav);
    localStorage.setItem("claseNav", nav);
  };

  // funcion para el toggle de "PERFIL"
  const [active, setActive] = useState(() => {
    const estadoGuardado = localStorage.getItem("toggleState");
    return estadoGuardado ? JSON.parse(estadoGuardado) : true;
  });

  useEffect(() => {
    localStorage.setItem("toggleState", JSON.stringify(active));
  }, [active]);

  const toggleClass = () => {
    setActive((estadoPrevio) => !estadoPrevio);
  };

  //calcular el total (precio y cantidad) de los productos
  const losProductos =
    JSON.parse(localStorage.getItem("productoSeleccionado")) || [];

  const calcularTotales = () => {
    let totalPrecio = 0;
    let totalCantidad = 0;

    losProductos.forEach((produc) => {
      totalPrecio += produc.precio;
      totalCantidad += produc.cantidad;
    });

    return { totalPrecio, totalCantidad };
  };
  const { totalPrecio, totalCantidad } = calcularTotales();

  //funcion para actualizar los pedidos
  const [edit, setEdit] = useState(false);

  const handleEditarProd = () => {
    console.log("probando");
    setEdit(!edit);
  };

  // funcion para eliminar un prod
  const [prodEliminados, setLosProductos] = useState([]);
  const handleDeleteProd = (id) => {
    const productosActualizados = losProductos.filter(
      (produc) => produc.id !== id
    );

    setLosProductos(productosActualizados);

    localStorage.setItem(
      "productoSeleccionado",
      JSON.stringify(productosActualizados)
    );
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
        precioCalculado,
        claseNav,
        handleClickNav,
        toggleClass,
        active,
        losProductos,
        calcularTotales,
        handleEditarProd,
        edit,
        handleDeleteProd,
      }}
    >
      {children}
    </FuncionesContext.Provider>
  );
};

export { FuncionesContext, FuncionProvider };
