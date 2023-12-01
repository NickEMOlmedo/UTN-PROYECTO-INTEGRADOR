import "./TaskItem.css";
import pendiente from "../assets/pendiente.png";
import comprobado from "../assets/comprobado.png";

const TaskItem = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="img-fluid .img-thumbail card-img-top"
          width="100%"
          height="180"
          role="img"
          src={pendiente}
        ></img>
        <div className="card-body">
          <h5 className="card-title">Título de la tarjeta</h5>
          <p className="card-text">
            Un texto de ejemplo rápido para desarrollar el título de la tarjeta
            y constituir la mayor parte del contenido de la tarjeta.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <a href="#" className="btn btn-primary mx-2">
              Marcar Lista
            </a>
            <a href="#" className="btn btn-primary">
              Eliminar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
