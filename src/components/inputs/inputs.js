import React from "react";
import InputPassword from "./inputPassword";
import InputEmail from "./inputEmail";
import RadioButton from "../radio-buttons/radio-buttons";
import InputName from "./inputName";


// create inputs
const Inputs = (props) => (
    <form className="inputs" action="#">
        <h1 className="inputs__header">Form</h1>
        <p className="inputs__text">{props.text}</p>
        <InputName/>
        <InputPassword/>
        <InputEmail/>
        <RadioButton/>
    </form>
);

export default Inputs;