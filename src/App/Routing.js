import React, {Component} from 'react';
import "../MyStyle/MyCss.css";
import App from "./App";
import {Route, Switch} from "react-router-dom";
import LoginPage from "./Login";
import RegisterPage from "./RegisterPage";
import NavBar from "./NavBar";

import {getAuth} from "../service/StorageServices";

class Routing extends Component {

    state = {
        auth: false
    };

    componentDidMount() {
        const auth = getAuth();

        this.setState({
            auth: auth
        });
    }

    render() {
        const {auth}=this.state;

        return (
            <div id="app">
                <NavBar onAuth={this._onChangeAuth.bind(this)} auth={auth}/>

                <Switch>
                    <Route exact path="/" component={() => <App auth={auth}/>}/>
                    <Route exact path="/login"
                           component={() => <LoginPage onAuth={this._onChangeAuth.bind(this)} auth={auth}/>}/>
                    <Route exact path="/register"
                           component={() => <RegisterPage auth={auth}/>}/>
                </Switch>
            </div>
        );
    }

    _onChangeAuth(auth) {
        this.setState({
            auth: auth
        });
    }

}

export default Routing;