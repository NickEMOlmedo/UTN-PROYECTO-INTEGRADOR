import "./NavBar.css";
import logo from "../assets/lista-de-tareas.png";

const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="80"
              height="70"
              className="d-inline-block align-text-center"
            />
            <b>Administrador de Tareas</b>
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
