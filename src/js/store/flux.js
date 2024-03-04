const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "Javier Garcia",
					id: "1",
					background: "white",
					initial: "white",
					Location: "Barcelona"
				},
				{
					title: "Second",
					background: "white",
					initial: "white"
				},
				{
					title: "Tercero",
					background: "white",
					initial: "white"
				},
				{
					title: "Cuarto",
					background: "white",
					initial: "white"
				}
			],
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
