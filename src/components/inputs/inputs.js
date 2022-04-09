import React from "react";

const Inputs = (props) => (
    <form className="inputs" action="#">
        <h1 className="inputs__header">Inputs</h1>
        <p>{props.text}</p>
    </form>
);

export default Inputs;