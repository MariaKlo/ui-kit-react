import React from "react";

class InputName extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
    }

    // check valid name
    validateName = name => {
        const regex = /[A-Za-z]{1,}/;
    
        return !regex.test(name)
          ? "The name must contain at least one letter. Numbers and special characters are not allowed."
          : "";
    };

    // user leaves form
    onFirstBlurName = () => {
        const { firstName } = this.state; // equivalent of: const firstName = this.state.firstName;
        const firstNameError = this.validateName(firstName);
        return this.setState({firstNameError});
    }

    // show change of name
    onFirstNameChange = event => 
    this.setState({
        firstName: event.target.value
    });

    render() {
        const { firstName, firstNameError } = this.state;

        return (
            <div>
                <label>First name: {firstName}
                    <br/>
                    <input 
                    type="text"
                    name="firstName"
                    className="input__name"
                    onChange={this.onFirstNameChange}
                    onBlur={this.onFirstBlurName}
                    />
                    {firstNameError && <div>{firstNameError}</div>}
                    <br/>
                </label>
            </div>
        );
    }
}

export default InputName;