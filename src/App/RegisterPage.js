import React, {Component} from "react";
import PropTypes from "prop-types";
import {register} from "../service/APIService";
import {Redirect} from "react-router-dom";

class RegisterPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        success: false,
    };

    render() {
        const {name, email, password, success} = this.state;
        if(success){
            return <Redirect to="/login"/>;
        }

        return (
            <div className="inputLOG_REG">
                <div className="Log_Reg_Header">REGISTER</div>
                <form onSubmit={this._handleSubmit.bind(this)}>
                    <input onChange={this._handleChangeInput.bind(this, 'name')}
                           value={name} placeholder="Your name"
                           type="text"/>
                    <input
                        onChange={this._handleChangeInput.bind(this, 'email')}
                        value={email} placeholder="Your email" type="email"/>
                    <input
                        onChange={this._handleChangeInput.bind(this, 'password')}
                        value={password} placeholder="Your password" type="password"/>

                    <button>Register</button>
                </form>

            </div>
        );

}
    _handleChangeInput(field, e) {
        const {value} = e.target;

        this.setState({
            [field]: value
        });
    }

    _handleSubmit(e) {
        e.preventDefault();
        const {name, email, password} = this.state;

        register({name, email, password})
            .then(response => {
                const {success, message} = response;

                if (success) {
                    this.setState({
                        success: true
                    });
                } else {
                    alert(message);
                }
            });

    }
}


export default RegisterPage;