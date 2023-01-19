const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
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


            vehicles: [],
            planets: [],
            characters: [],
            favourites: [],
            detallesCharacters: {},
            detallesPlanets: {},
            detallesVehicles: {},

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


            // favourites: () => {
            //     console.log("favoritofunciona")

            // },



            agregarFavorito: (item) => {
                let store = getStore()
                console.log(store);
                console.log(item);

                if (store.favourites.includes(item)) {
                    getActions().nofavourites(item);
                } else {
                    setStore({
                        favourites: [...store.favourites, item]
                    })

                }
            },

            nofavourites: (item) => {
                let store = getStore()
                setStore({
                    favourites: store.favourites.filter((elemento) => elemento !== item)
                })

            },



            obtenerPlanets: () => {

                fetch("https://swapi.dev/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planets: data.results
                    }))
                    .catch(err => console.error(err))

            },

            obtenerVehicles: () => {

                fetch("https://swapi.dev/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({
                        vehicles: data.results
                    }))
                    .catch(err => console.error(err))
            },

            obtenerCharacters: () => {
                fetch("https://swapi.dev/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        characters: data.results
                    }))
                    .catch(err => console.error(err))
            },


            obtenerInformationDeCharacter: (id) => {
                fetch("https://swapi.dev/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detallesCharacters: data
                    }))
                    .catch(err => console.error(err))
            },
            obtenerInformationDePlanet: (id) => {
                fetch("https://swapi.dev/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detallesPlanets: data
                    }))
                    .catch(err => console.error(err))
            },
            obtenerInformationDeVehicle: (id) => {
                fetch("https://swapi.dev/api/vehicles/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detallesVehicles: data
                    }))
                    .catch(err => console.error(err))
            },
            changeColor: (item) => {
                let store = getStore()
                if (store.favourites.includes(item)) {
                    return "fa fa-heart text-warning fs-4";
                } else {
                    return "far fa-heart text-warning fs-4"
                }
            }
        },
    }
};


export default getState;