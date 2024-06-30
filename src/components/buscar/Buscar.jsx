import "./buscar.scss";

export const Buscar = () => {
  return (
    <>
      <section className="containerBuscador">
        <h2 className="titleBusqueda">
          Lo que necesites, <strong className="titleColor">lo tienes.</strong>
        </h2>
        <div className="inputBuscador">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="inputB"
          />
        </div>
        <div className="gridsvg">
          <ul className="ulGrid">
            <li className="svgPedido">
              <img src="./svg/svgCarne.png" alt="svg de carne" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Carne</strong>
            </li>
            <li className="svgPedido">
              <img src="./svg/svgPollo.png" alt="svg de pollo" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Pollo</strong>
            </li>
            <li className="svgPedido">
              <img src="./svg/svgSalamin.png" alt="svg de salamin" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Embutidos</strong>
            </li>
            <li className="svgPedido">
              <img src="./svg/svgPizza.png" alt="svg de pizza" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Pizzas</strong>
            </li>
            <li className="svgPedido">
              <img src="./svg/svgHarina.png" alt="svg de harina" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Harina</strong>
            </li>
            <li className="svgPedido">
              <img src="./svg/svgPan.png" alt="svg de pan" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Pan</strong>
            </li>
            <li className="svgPedido">
              <img src="./svg/svgIngredientes.png" alt="svg de ingredientes" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Ingredientes</strong>
            </li>
            <li className="svgPedido">
              <img src="./svg/svgHuevo.png" alt="svg de huevo" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Huevo</strong>
            </li>
            <li className="svgPedido">
              <img src="./svg/svgVerdura.png" alt="svg de verdura" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Verduras</strong>
            </li>
            <li className="svgPedido">
              <img src="./svg/svgBebida.png" alt="svg de bebida" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Bedidas</strong>
            </li>
            <li className="svgPedido">
              <img src="./svg/svgMasita.png" alt="svg de masitas" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Masitas</strong>
            </li>
            <li className="svgPedido">
              <img src="./svg/svgChocolate.png" alt="svg de chocolate" className="ImgSvg"/>{" "}
              <strong className="nameSvg">Chocolates</strong>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
