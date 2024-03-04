import React from "react";
import "./EditProfile.css";
import { Link } from "react-router-dom";

const EditProfile = () => {
    return (

        <div className="end-register-container">

        <div className="title">Edit Profile</div>

        <Link to="/MainMenu">
            <div className="button-big">
                <div className="text">NEXT</div>
            </div>
        </Link>

        </div>

    );
};

export default EditProfile;
