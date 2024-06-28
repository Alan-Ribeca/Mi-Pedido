import { Toggle } from "./Toggle";
import "./perfil.scss";

export const Perfil = () => {
  return (
    <>
      <section className="perfilUsuario">
        <div className="containerNombre">
          <img src="./img/avatare2.jpg" alt="img de perfil" />
          <p className="namePerfil">Nombre de usuario</p>
        </div>
        <div className="ajustePerfil">
          <h4 className="titleP PreferenciaApp">Preferencia de aplicación</h4>
          <p className="pDePerfil">
            Modo oscuro
            <span className="toggle">
              <Toggle />
            </span>
          </p>
          <p className="pDePerfil">Idioma</p>
        </div>

        <div className="ajustePerfil">
          <h4 className="personalizarCuenta">Personalizacion del perfil</h4>
          <p className="pDePerfil">Cambiar la imagen de perfil</p>
          <p className="pDePerfil">Cambiar el nombre de usuario</p>
        </div>

        <div className="ajustePerfil">
          <h4 className="titleP seguridad">Informacion de la cuenta</h4>
          <p className="pDePerfil">Cambiar usuario</p>
          <p className="pDePerfil">Cambiar contraseña</p>
          <p className="pDePerfil">Numero de telefono</p>
        </div>

        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Cerrar sesion&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Cerrar sesion&nbsp;
          </span>
        </button>
      </section>
    </>
  );
};
