const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
		
		
		vehicles:[],
		planets:[],
		characters:[],
		favourites:[],
		
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},


favourites: () =>{
console.log("favoritofunciona")

},



favourites: (item) => {
	let store= getStore()
	if (store.favourites.includes(item)) {
getActions().deleteFavourite(item);
	

	} else {
		setStore ({
favourites: [...store.favourites,item]

		})
		
	}
},

nofavourites: (item) => {
getStore (item.filter((item,index) =>index !==item))
if (item.lenght===1){
	
}

},

			 obtenerPlanets:() => {
    
				fetch("https://swapi.dev/api/planets/")
				.then(res => res.json())
				.then(data => setStore({planets:data.results}))
				.catch(err => console.error(err))
			
			},

			 obtenerVehicles:()=>{
    
				fetch("https://swapi.dev/api/vehicles/")
				.then(res => res.json())
				.then(data => setStore({vehicles:data.results}))
				.catch(err => console.error(err))
				  },

			 obtenerCharacters:()=>{
				fetch("https://swapi.dev/api/people/")
				.then(res => res.json())
				.then(data => setStore({characters:data.results}))
				.catch(err => console.error(err))
			},
		


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
