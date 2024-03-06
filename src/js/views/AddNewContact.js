import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css"

export const AddNewContact = ()=>{
    return (
        <div class="form-row">
            <div class="border border-secondary rounded-top-2 p-3 bg-light">
            <h2>Paga el cafe primer aviso</h2>
        </div>
        <div class="p-4 border-start border-end border-secondary">
            <div class="alert alert-danger" role="alert">
                Algunos archivos desaparecieron de la faz de la tierra
            </div>
            <div class="d-flex row">
                <fieldset class="col-5">
                    <label for="targeta" class="form-label">Targeta #:</label>
                    <input type="password" id="targeta" class="form-control" placeholder="xxxxxxxx"></input>
                </fieldset>
                <fieldset class="col-3">
                    <label for="targeta" class="form-label">Codigo de tu alma:</label>
                    <input type="password" id="targeta" class="form-control" placeholder="000"></input>
                </fieldset>
                <fieldset class="col-4">
                    <label for="targeta" class="form-label">Años de vida:</label>
                    <input type="password" id="targeta" class="form-control" placeholder="1♥ por cada 10 años"></input>
                </fieldset>
            </div>
            <div class="">
                <div class="row mt-3">
                    <fieldset class="col-6">
                        <label for="firstName" class="form-label">El nombre que te dieron tus padres:</label>
                        <input type="text" id="firstName" class="form-control" placeholder="Booleano"></input>
                    </fieldset>
                    <fieldset class="col-6">
                        <label for="lastName" class="form-label">El nombre que le robaste a tus padres:</label>
                        <input type="text" id="lastName" class="form-control" placeholder="JavaScript HTML"></input>
                    </fieldset>
                </div>
                <div class="row mt-3">
                    <fieldset class="col-6">
                        <label for="city" class="form-label">Casilla de salida:</label>
                        <input type="text" id="city" class="form-control" placeholder="Pueblo Paleta"></input>
                    </fieldset>
                    <fieldset class="col-3">
                        <label for="state" class="form-label">Tablero:</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Elige tu favorito</option>
                            <option value="1">Monopoli</option>
                            <option value="2">La oca</option>
                            <option value="3">Parchis</option>
                            <option value="4">Trivial</option>
                          </select>
                    </fieldset>
                    <fieldset class="col-3">
                        <label for="postCode" class="form-label">Lanzamiento inicial:</label>
                        <input type="text" id="postCode" class="form-control" placeholder="Dados: 1 al 6"></input>
                    </fieldset>
                    <div class="row mt-3">
                        <fieldset class="col-6">
                            <label for="weAccept" class="form-label">Escoge tu ficha:</label>
                            <div class="text-bg-secondary ps-1 col-6">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                                    <label class="form-check-label" for="inlineRadio1"><i class="fa-solid fa-car"></i></label>
                                  </div>
                                  <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                    <label class="form-check-label" for="inlineRadio2"><i class="fa-solid fa-hat-wizard"></i></label>
                                  </div>
                                  <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
                                    <label class="form-check-label" for="inlineRadio3"><i class="fa-solid fa-ship"></i></label>
                                  </div>
                            </div>
                        </fieldset>
                        <fieldset class="col-6">
                            <label for="message" class="form-label">Ultimas palabras:</label>
                            <textarea id="message" class="form-control" cols="30" rows="4" placeholder="Reza..."></textarea>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-grid gap-1 justify-content-end d-flex buttons border border-secondary rounded-bottom-2 bg-light p-4">
            <button type="button" class="btn btn-primary">Pastilla azul (salva tu alma)</button>
            <button type="button" class="btn btn-danger">Pastilla roja (te va la marcha)</button>
        </div>
        </div>
    )
}