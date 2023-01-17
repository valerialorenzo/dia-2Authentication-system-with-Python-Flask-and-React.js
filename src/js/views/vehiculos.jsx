




 function obtenerVehicles(){
    
    fetch("https://swapi.dev/api/vehicles/")
.then(res => res.json())
.then(data => setVehicles(data.results))
.catch(err => console.error(err))
}
useEffect(()=>{
    obtenerPlanets()

},[])


