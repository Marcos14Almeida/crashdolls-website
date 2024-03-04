import React from "react";
import "./SelectedBands.css";
import { Link, useLocation } from "react-router-dom";

const SelectedBands = () => {

    const location = useLocation();
    const selectedBands = location.state?.selectedBands || [];

    return (
        <div className="end-register-container">
        <div className="top-bar">
            <Link to="/ListBands">
                <i className="material-icons" style={{ fontSize: '24px', color: 'black' }}>arrow_back</i>
            </Link>

            <div className="top-bar-title">My Selected Bands</div>
            <div></div>
        </div>

        <div>
            <ul>
                {selectedBands.map((band, index) => (
                <div className={`bands-list`} key={index}>
                    <img className="image" alt="Image" src={band.image} />
                    <div className="band-name">{band.text}</div>
                </div>
                ))}
            </ul>
        </div>

        </div>
    );
};

export default SelectedBands;
