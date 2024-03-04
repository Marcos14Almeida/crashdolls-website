import React from "react";
import "./EndRegister.css";
import { Link } from "react-router-dom";
import partyImage from '../../assets/davai/party.png';

const EndRegister = () => {
    return (

        <div className="end-register-container">

        <div className="title">Register done</div>

        <div className="center-block">
            <div className="sub-text">Now you can:</div>
            <div className="label">
                <p className="see-who-is-nearby">
                - See who is nearby
                <br />
                - Find music buddies
                <br />
                - Discover new activities around you
                </p>
            </div>
            <img src={partyImage} alt="Party" />

            <Link to="/MainMenu">
                <div className="button-big">
                    <div className="text">NEXT</div>
                </div>
            </Link>
        </div>

        </div>

    );
};

export default EndRegister;
