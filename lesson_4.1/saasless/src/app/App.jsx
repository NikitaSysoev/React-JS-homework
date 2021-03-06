import React, {Component} from 'react';

import './App.scss';

// import "../../../ssls-login-form/src/LoginForm/LoginForm.scss";
// import LoginForm from "../../../ssls-login-form/src/LoginForm/LoginForm.jsx";
import LoginForm from 'ssls-login-form';
import 'ssls-login-form/dist/css/bundle.css';

export default class App extends Component {
    render() {
        return (
            <div className="ssls-app">
                <header className="ssls-header"/>
                <div className="ssls-content">
                    <LoginForm/>
                </div>
                <footer className="ssls-footer"/>
            </div>
        )
    }
}
