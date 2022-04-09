import React from "react";

const Buttons = () => (
    <div className="buttons">
        <h1 className="buttons__header">Buttons</h1>
        <div className="buttons__wrapper">
            <div className="buttons__wrapper_pink">
                <button className="button button_pink">Button</button>
                <button className="button button_pink">Button</button>
            </div>
            <div className="buttons__wrapper_black">
                <button className="button button_black">Button</button>
                <button className="button button_black">Button</button>
            </div>
            <div className="buttons__wrapper_grey">
                <button className="button button_grey">Button</button>
                <button className="button button_grey">Button</button>
            </div>
            <div className="buttons__wrapper_purple">
                <button className="button button_purple">Button</button>
                <button className="button button_purple">Button</button>
            </div>
        </div>
    </div>
);

export default Buttons;