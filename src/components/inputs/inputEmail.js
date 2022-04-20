import React from 'react';

class InputEmail extends React.Component {
    state = {
        email: "",
        emailError: ""
    }

    checkValidEmail = email => {
        // eslint-disable-next-line no-useless-escape
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return !regex.test(email)
        ? "Please, enter valid email address"
        : "";
    }

    // user leaves form
    onEmailBlur = () => {
        const { email } = this.state;
        const emailError = this.checkValidEmail(email);
        return this.setState({emailError});
    }

    onEmailChange = event => 
    this.setState({
        email: event.target.value
    });

    render() {
        const { emailError } = this.state;

        return (
            <label> Email:
                <br/>
                <input
                type="email"
                name="email"
                className="input__email"
                onBlur={this.onEmailBlur}
                onChange={this.onEmailChange}
                />
                {emailError && <div>{emailError}</div>}
                <br/>
            </label>
        );
    }
}

export default InputEmail;