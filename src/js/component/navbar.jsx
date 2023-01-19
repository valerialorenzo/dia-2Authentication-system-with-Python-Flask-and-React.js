import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-3 container">
        <Link to="/">
          <img
            className="bg-black"
            id="local-nav-logo-desktop"
            src="https://w7.pngwing.com/pngs/792/718/png-transparent-skellig-michael-chewbacca-star-wars-computer-icons-star-wars-text-logo-desktop-wallpaper.png"
            alt="Star Wars Logo"
            style={{ width: "70px" }}
          />
        </Link>

        <div className="dropdown d-flex">
          <button
            className="btn btn-lg btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favourite <span className="bg-secondary rounded-1 p-1 ">{store.favourites.length}</span>
          </button>
          <ul className="dropdown-menu">
            {store.favourites.map((item, id) => (
              <li className="dropdown-item float-start btnEliminar" key={id}>
                {item.name}
                {item.planeta}
                {item.vehiculo}
                <button
                  type="button"
                  className="btn border-0 float-end"
                  onClick={() => actions.nofavourites(item)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
