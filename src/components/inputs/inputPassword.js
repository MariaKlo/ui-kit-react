import React from "react";

class InputPassword extends React.Component {
    state = {
        password: "",
        passwordError: "",
    }

    // check valid password
    checkValidPassword = password => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        return !regex.test(password)
        ? "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        : "";
    }

    // user leaves form
    onPasswordBlur = () => {
        const { password } = this.state;
        const passwordError = this.checkValidPassword(password);
        return this.setState({passwordError});
    }

    render() {
        const { passwordError } = this.state;

        return (
            <label> Password:
                <br/>
                <input
                type="password"
                name="password"
                onBlur={this.onPasswordBlur}
                />
                {passwordError && <div>{passwordError}</div>}
                <br/>
            </label>
        );
    }
}

export default InputPassword;