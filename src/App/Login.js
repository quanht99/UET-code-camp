import React, {Component} from "react";
import PropTypes from "prop-types";

class LoginPage extends Component {
    render() {
        return (
            <div className="LoginPage">
                <h1>Login page</h1>
            </div>
        );
    }
}

LoginPage.propTypes = {
    any: PropTypes.any
};

export default LoginPage;