import React from 'react';
import './CrashDollsPage.css'; // Import the CSS file for styling
import yourSvgIcon from '../../assets/rabisco face.svg';
import Header from '../mainpage/Header';

const CrashDollsPage = () => {
    return (
    <div className="page-container">
        <div className="background-image">
            <Header />
        </div>
        

        <div className="text-container">
            <p className="text">Crash dolls</p>
            <p className="slogan">The time is ours</p>
            <img src={yourSvgIcon} alt="Your SVG Icon" className="svg-icon" />
        </div>


    </div>
    );
};

export default CrashDollsPage;
