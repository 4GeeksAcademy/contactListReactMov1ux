import { number } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					name: "Javier Garcia",
					number: "1",
					email: "jav@jav",
					location: "Barcelona"
				},
				{
					name: "Pepe",
					number: "white",
					email: "Pepe@pepe",
					location: "Marte"
				},
				{
					name: "Pepa",
					number: "2",
					email: "pepa@pepa",
					location: "BCN"
				},
				
			],
		},
		actions: {
			deleteContact: (index) => {
				const store = getStore();
				const newDemo = store.demo.filter((_, i) => i !== index);
				setStore({ demo: newDemo });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addContact: (contact) => {
                const store = getStore(); // Obtiene el estado actual del store.
                const newDemo = [...store.demo, contact]; // Añade el nuevo contacto al array.
                setStore({ demo: newDemo }); // Actualiza el store con el nuevo array.
            },
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			},
			updateInfo : () =>{
				setStore({title: "Javi"})
			}
		}
	};
};

export default getState;
