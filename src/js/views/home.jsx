import React, {useEffect, useState, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Card2 } from "../component/card2.jsx";
import { Card3 } from "../component/card3.jsx"
import { Context } from "../store/appContext";

export const Home = () => {

// 	const [characters, setCharacters] = useState([])
// 	const [planets, setPlanets] = useState([])
//   const [vehicles, setVehicles] =useState ([])
const {store} = useContext (Context)



//   function obtenerVehicles(){
    
// // 		// fetch("https://swapi.dev/api/vehicles/")
// // .then(res => res.json())
// // .then(data => setVehicles(data.results))
// // .catch(err => console.error(err))
//   }

// console.log(store.vehicles)

// 	function obtenerPlanets(){
    
// fetch("https://swapi.dev/api/planets/")
// .then(res => res.json())
// .then(data => setPlanets(data.results))
// .catch(err => console.error(err))
	// }

	// function obtenerCharacters(){
	// 	fetch("https://swapi.dev/api/people/")
	// 	.then(res => res.json())
	// 	.then(data => setCharacters(data.results))
	// 	.catch(err => console.error(err))
	// }

	// useEffect(()=>{
	// 	obtenerCharacters()
	// 	obtenerPlanets()
    // obtenerVehicles()
	// },[])
	
	return(
    <div>
	<div className=" ">
<h1 className="text-danger">Characters</h1>
<div className= "d-flex scrollable">
  
	
		
	{store.characters.map((item,index)=><Card nombre={item.name} genero= {item.gender} ojos= {item.eye_color} pelo= {item.hair_color} id= {index}/>)}
  </div>
  </div>

<div className="container">
<h1 className="text-danger">Planets</h1>
<div className= "d-flex scrollable">
	{store.planets.map((item,index)=><Card2 planeta={item.name} terreno={item.terrain} key={item} poblacion= {item.terrain}id= {index}/>)}



  </div>
  </div>

<div className="container">
<h1 className="text-danger">Vehicles</h1>
<div className= "d-flex scrollable">

  {store.vehicles.map((item,index)=><Card3 vehicle={item.name} creado= {item.created} capacidad= {item.cargo_capacity} consumo={item.consumables} key={item} id= {index}/>)}
  </div>
	
</div>
</div>
);}