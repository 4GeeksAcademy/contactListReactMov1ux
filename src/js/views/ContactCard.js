import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const ContactCard = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">
				Nombre usuario: {store.demo[params.theid].title}
			</h1>
			<h1 className="display-4 btn btn-succes" onClick={()=> {
				actions.updateInfo()
			}}>
				Actualizar Datos: {store.demo[params.theid].title}
			</h1>
			<h1 className="display-4">
				Id usuario: {store.demo[params.theid].id}
			</h1>
			<hr className="my-4" />
			

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back to contact list
				</span>
			</Link>
		</div>
	);
};

ContactCard.propTypes = {
	match: PropTypes.object
};