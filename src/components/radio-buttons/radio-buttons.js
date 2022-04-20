import React from "react";
import './radio-buttons.css';

class RadioButton extends React.Component {
    render() {
        return (
            <div className="radio-buttons">
                <br/>
                <h1>Radio buttons</h1>
                <div className="radio-buttons__wrap">
                    <input type="radio" className="radio-button radio-button_black" name="radio" id="radio_first"/>
                    <label for="radio_first">Radio Button 1</label>
                    <input type="radio" className="radio-button radio-button_grey" name="radio" id="radio_second"/>
                    <label for="radio_second">Radio Button 2</label>
                    <input type="radio" className="radio-button radio-button_purple" name="radio" id="radio_third"/>
                    <label for="radio_third">Radio Button 3</label>
                    <input type="radio" className="radio-button radio-button_pink" name="radio" id="radio_fourth"/>
                    <label for="radio_fourth">Radio Button 4</label>
                </div>
            </div>
        );
    }
}

export default RadioButton;