import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/ContactList">
				<span className="navbar-brand mb-0 h1">Contact List</span>
			</Link>
			<div className="ml-auto">
				<Link to="/AddNewContact">
					<button className="btn btn-primary">Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
