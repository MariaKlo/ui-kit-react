import React from "react";
import './radio-buttons.css';

class RadioButton extends React.Component {
    render() {
        return (
            <div className="radio-buttons">
                <h1>Radio buttons</h1>
                <div className="radio-buttons__wrap">
                    <div className="radio-button__wrap">
                        <input type="radio" className="radio-button radio-button_black" name="radio" id="radio_first"/>
                        <label className="label" htmlFor="radio_first">Radio Button 1</label>
                    </div>
                    <div className="radio-button__wrap radio-button__wrap_grey">
                        <input type="radio" className="radio-button radio-button_grey" name="radio" id="radio_second"/>
                        <label className="label" htmlFor="radio_second">Radio Button 2</label>
                    </div>
                    <div className="radio-button__wrap radio-button__wrap_purple">
                        <input type="radio" className="radio-button radio-button_purple" name="radio" id="radio_third"/>
                        <label className="label" htmlFor="radio_third">Radio Button 3</label>
                    </div>
                    <div className="radio-button__wrap radio-button__wrap_pink">
                        <input type="radio" className="radio-button radio-button_pink" name="radio" id="radio_fourth"/>
                        <label className="label" htmlFor="radio_fourth">Radio Button 4</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default RadioButton;