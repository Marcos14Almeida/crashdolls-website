import React from "react";
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className="login-container">
            <button className="button-login">
                <div className="login">LOGIN</div>
            </button>
            
            <Link to="/Register">
            <button className="button-register">
                <div className="register">REGISTER</div>
            </button>
            </Link>

        </div>
    );
};

export default Login;
