import { useContext } from "react";
import { FuncionesContext } from "../../context/Funciones";
import { Link } from "react-router-dom";
import "./pedido.scss";

export const Pedido = () => {
  const {
    losProductos,
    calcularTotales,
    handleClickNav,
  } = useContext(FuncionesContext);
  const { totalPrecio, totalCantidad } = calcularTotales();

  const enviarMensajeWhatsApp = (losProductos) => {
    let textoTotales = `Precio total: ${totalPrecio}\nCantidad prod: ${totalCantidad}\n`;

    let textoProductos = losProductos
      .map((producto) => {
        return `Nombre: "${producto.nameProduc}"\nDescripción: "${producto.description}"\nCantidad: "${producto.cantidad}"`;
      })
      .join("\n\n");

    const numeroWhatsApp = "+543402483866";

    let texto = textoTotales + textoProductos;

    let enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      texto
    )}`;
    window.open(enlaceWhatsApp, "_blank");

    // reiniciar el array del localStorage Y la pag
    localStorage.setItem("productoSeleccionado", JSON.stringify([]));
    setTimeout(() => {
      window.location.reload();
    }, "1000");
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
          {losProductos.map(
            ({ id, img, alt, nameProduc, description, cantidad, precio }) => (
              <section className="contenedorProductos" key={id}>
                <div className="containerProduc">
                  <div className="containerImg">
                    <img src={img} alt={alt} />
                    <div className="infoProdc">
                      <p className="nameProd">{nameProduc}</p>
                      <p className="description">{description}</p>
                      <p className="eliminar">Eliminar prod</p>
                      <p className="cantidadItem">
                        Cantidad: <strong className="numero">{cantidad}</strong>
                      </p>
                    </div>
                  </div>
                  <p className="precio">${precio}</p>
                  <div className="contador">
                    <button className="btnContador menos">-</button>
                    <p className="numer">{cantidad}</p>
                    <button className="btnContador mas">+</button>
                  </div>
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
