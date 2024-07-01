/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import "./carrusel.scss";

export const Carrusel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      imgSrc: "./img/i1.jpg",
      alt: "img de una hamburguesa",
      descuento: "50%",
      precio: "$7.300",
      descripcion:
        "Big stomach es una hamburguesa delicada y deliciosa que tiene un tamaño grande.",
    },
    {
      imgSrc: "./img/i2.jpg",
      alt: "img de una hamburguesa",
      descuento: "50%",
      precio: "$7.300",
      descripcion:
        "Big stomach es una hamburguesa delicada y deliciosa que tiene un tamaño grande.",
    },
    {
      imgSrc: "./img/i3.jpg",
      alt: "img de una hamburguesa",
      descuento: "50%",
      precio: "$7.300",
      descripcion:
        "Big stomach es una hamburguesa delicada y deliciosa que tiene un tamaño grande.",
    },
  ];

  const showNextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(showNextSlide, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="containercarrusel">
        {slides.map((slide, i) => (
          <div
            className={`containerUno ${
              i === index
                ? ""
                : i === (index + 1) % slides.length
                ? "dere"
                : "izquierda"
            }`}
            key={i}
          >
            <div className="img">
              <img src={slide.imgSrc} alt={slide.alt} />
              <div className="descuento">
                <span className="porcentaje">{slide.descuento}</span>
                <span className="descuentoTexto">OFF</span>
              </div>
            </div>
            <div className="infoCarrusel">
              <h2 className="nombreProdCarrusel">
                Big stomach
                <span className="precioCarrusel">{slide.precio}</span>
              </h2>
              <p className="descripCarrusel">{slide.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
