import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
    return (

        <div className="register-container">

        <div className="title">Register</div>

        <div  className="center-block">
            <div  className="form-field">
                <div className="text-wrapper">Name</div>
            </div >
            <div  className="form-field">
                <div className="text-wrapper">Email address</div>
            </div >
            <div  className="form-field">
                <div className="text-wrapper">Password</div>
            </div >

            <div className="privacy-police">
            <div className="checkbox" />
                <p className="i-agree-with-the">
                    <span className="text-wrapper">I agree with the</span>
                    <span className="span"> User Terms</span>
                    <span className="text-wrapper-2">&nbsp;</span>
                    <span className="text-wrapper-3">and the</span>
                    <span className="text-wrapper-2">&nbsp;</span>
                    <span className="span">Privacy Police</span>
                </p>
            </div>

        <Link to="/EndRegister">
            <div className="button-big">
                <div className="text">NEXT</div>
            </div>
        </Link>

        </div>


        </div>

    );
};

export default Register;
