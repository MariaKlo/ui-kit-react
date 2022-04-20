import React from "react";

class InputPassword extends React.Component {
    state = {
        password: "",
        passwordError: "",
    }

    // check valid password
    checkValidPassword = password => {
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

        return !regex.test(password)
        ? "Minimum eight characters, at least one uppercase letter,\n one lowercase letter, one number and one special character"
        : "";
    }

    // user leaves form
    onPasswordBlur = () => {
        const { password } = this.state;
        const passwordError = this.checkValidPassword(password);
        return this.setState({passwordError});
    }

    onPasswordChange = event => 
    this.setState({
        password: event.target.value
    });

    render() {
        const { passwordError } = this.state;

        return (
            <label> Password:
                <br/>
                <input
                type="password"
                name="password"
                className="input__password"
                onChange={this.onPasswordChange}
                onBlur={this.onPasswordBlur}
                />
                <br/>
                {passwordError && <div>{passwordError}</div>}
                <br/>
            </label>
        );
    }
}

export default InputPassword;