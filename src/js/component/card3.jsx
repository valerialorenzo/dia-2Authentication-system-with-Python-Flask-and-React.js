import React from "react";
import {Link} from "react-router-dom"


export const Card3 = (props) => {
    let id = parseInt(props.id)+1;

    console.log (props);
return (
// {/* <div className="container">
//     <h1 className="text-danger">Characters</h1> */}
    // <div className="row row-cols-1 row-cols-md-3 g-4">s
    <div className="col m-4">
<div className="card h-100" style={{ width: "15rem"}}>                <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(id)+".jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.vehicle}</h5>
                    <p className="card-text">Capacity: {props.capacidad}</p>
                    <p className="card-text">Consumables: {props.consumo}</p>
                    <p className="card-text">Create: {props.creado}</p>
                    <div className="d-flex justify-content-between">
                    <Link type="button" className="btn btn-outline-primary" to={"/single/" +id}>Learn More</Link>
                        <Link type="button" className="btn btn-outline-warning "><i className="fa fa-heart outline-white"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    

);
};