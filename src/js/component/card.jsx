import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
  let item = props.item;
  console.log(item);
  const { actions } = useContext(Context);

  let id = parseInt(props.id) + 1;

  return (
    <div className="col m-4">
      <div className="card h-100" style={{ width: "15rem" }}>
        <img
          src={
            "https://starwars-visualguide.com/assets/img/characters/" +
            id +
            ".jpg"
          }
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">Gender: {props.genero}</p>
          <p className="card-text">Hair color: {props.pelo}</p>
          <p className="card-text">Eye color: {props.ojos}</p>
{/* . */}
          <div className="d-flex justify-content-between">
            <Link
              type="button"
              className="btn btn-outline-primary"
              to={"/single/" + id}
            >
              Learn More
            </Link>

            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={() => actions.agregarFavorito(item)}
            >
              <i className={actions.changeColor(item)}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
