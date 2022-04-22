import React from "react";
import InputPassword from "./inputPassword";
import InputEmail from "./inputEmail";
import InputName from "./inputName";
import './inputs.css';


// create inputs
const Inputs = (props) => (
    <form className="inputs" action="#">
        <h1 className="inputs__header">Form</h1>
        <p className="inputs__text">{props.text}</p>
        <InputName/>
        <InputEmail/>
        <InputPassword/>
        <button type="submit" className="button button__submit">Log in</button>
    </form>
);

export default Inputs;