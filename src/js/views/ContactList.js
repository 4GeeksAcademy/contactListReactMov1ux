import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ContactList = () => {
    const { store, actions } = useContext(Context);

    const handleDelete = (index) => {
        actions.deleteContact(index);
    };

    return (
        <div className="container">
            <ul className="list-group">
                {store.demo.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                            style={{ background: item.background }}>
                            <div>
                                <Link to={"/ContactCard/" + index} className="text-decoration-none">
                                    <h3>Name: {item.name}</h3>
                                    <h5>Number: {item.number}</h5>
                                    <h5>Email: {item.email}</h5>
                                    <h5>Location: {item.location}</h5>
                                </Link>
                            </div>
                            <div>
                                <button className="btn btn-success me-2" onClick={() => actions.changeColor(index, "orange")}>
                                    Change Color
                                </button>
                                <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <br />
            <Link to="/AddNewContact">
                <button className="btn btn-primary">Add New Contact</button>
            </Link>
        </div>
    );
};