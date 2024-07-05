import { useContext } from "react";
import { FuncionesContext } from "../../context/Funciones";
import { Link } from "react-router-dom";
import "./pedido.scss";

export const Pedido = () => {
  const { losProductos, calcularTotales, handleClickNav } =
    useContext(FuncionesContext);
  const { totalPrecio, totalCantidad } = calcularTotales();

  const enviarMensajeWhatsApp = (losProductos) => {
    // Construir el texto en el formato deseado para todos los productos
    let texto = losProductos
      .map((producto) => {
        return `nombre: "${producto.nameProduc}"\ndescripción: "${producto.description}"\ncantidad: "${producto.cantidad}"`;
      })
      .join("\n\n");

    // Número de teléfono al que quieres enviar el mensaje (debe estar en formato internacional)
    let numeroWhatsApp = "+543402483866"; // Reemplaza con tu número de teléfono

    // Construir el enlace de WhatsApp
    let enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      texto
    )}`;

    // Abrir el enlace en una nueva ventana (o puedes usar window.location.href para redirigir)
    window.open(enlaceWhatsApp, "_blank");

    // reiniciar el array del localStorage
    localStorage.setItem("productoSeleccionado", JSON.stringify([]));

    window.location.reload();
  };

  return (
    <section className="listadoPedido">
      <h1 className="titlePedido">Resumen de pedido</h1>

      {totalCantidad === 0 ? (
        <>
          <div className="containerVacio">
            <h4 className="sinProduc">No hay ningun producto seleccionado</h4>
            <Link to={"/"} onClick={() => handleClickNav("inicio")}>
              <button className="btnFinalizarCompra">Realizar pedido</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <p className="editar">
            Editar Pedido{" "}
            <strong className="svgEdit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="lapizSvg"
                viewBox="0 0 16 16"
              >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
              </svg>
            </strong>
          </p>
          {losProductos.map(
            ({ id, img, alt, nameProduc, description, cantidad, precio }) => (
              <section className="contenedorProductos" key={id}>
                <div className="containerProduc">
                  <div className="containerImg">
                    <img src={img} alt={alt} />
                    <div className="infoProdc">
                      <p className="nameProd">{nameProduc}</p>
                      <p className="description">{description}</p>
                      <p className="cantidadItem">
                        Cantidad: <strong className="numero">{cantidad}</strong>
                      </p>
                    </div>
                  </div>
                  <p className="precio">${precio}</p>
                </div>
              </section>
            )
          )}
          <div className="detalleCompra">
            <h4 className="detalleProd">Detalle de la compra</h4>
            <p className="cantidadTotal">
              Cantidad de productos totales{" "}
              <strong className="numeroTotal">{totalCantidad}</strong>
            </p>
            <p className="priceTotal">
              Precio Total{" "}
              <strong className="precioNumber">${totalPrecio}</strong>
            </p>
            <button
              className="btnFinalizarCompra"
              onClick={() => enviarMensajeWhatsApp(losProductos)}
            >
              Finalizar pedido
            </button>
          </div>
        </>
      )}
    </section>
  );
};
