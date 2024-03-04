import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css"

export const AddNewContact = ()=>{
    return (
        <div class="form-row">
            <label for="contact-form-name">Name:</label>
            <input id="contact-form-name" class="form-input" type="text" name="name" required/>
        </div>
    )
}