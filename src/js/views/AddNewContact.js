import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css"

export const AddNewContact = () => {
    const { actions } = useContext(Context);
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');

    const handleAddContact = () => {
        actions.addContact({ name: nombre, number: telefono, email: email, location: 'Default Location' });
        setNombre('');
        setTelefono('');
        setEmail('');
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-header">
                            <h2>Agregar nuevo contacto</h2>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    placeholder="Introduce el nombre"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Teléfono:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="telefono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    placeholder="Introduce el teléfono"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Introduce el email"
                                />
                            </div>
                            <button className="btn btn-primary" onClick={handleAddContact}>Agregar Contacto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};