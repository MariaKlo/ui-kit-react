import React from "react";

class RadioButton extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>Radio buttons</h1>
                <div className="radio-buttons__wrap">
                    <button type="radio" name="radio">Radio button 1</button>
                    <button type="radio" name="radio">Radio button 2</button>
                    <button type="radio" name="radio">Radio button 3</button>
                    <button type="radio" name="radio">Radio button 4</button>
                </div>
            </div>
        );
    }
}

export default RadioButton;