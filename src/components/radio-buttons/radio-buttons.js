import React from "react";

class RadioButton extends React.Component {
    render() {
        return (
            <div>
                <button type="radio" name="radio">Radio button 1</button>
                <button type="radio" name="radio">Radio button 2</button>
                <button type="radio" name="radio">Radio button 3</button>
                <button type="radio" name="radio">Radio button 4</button>
            </div>
        );
    }
}

export default RadioButton;