import React from "react";
import "./MainMenu.css";
import { Link } from "react-router-dom";
import fansImage from '../../assets/fans.png';

const profiles = [
    {
        name: "André Silva",
        image: fansImage,
        genres: ["Rock", "Pop Punk", "Emo"],
    },
    {
        name: "Roberto Gajo",
        image: fansImage,
        genres: ["Rock", "Pop Punk", "Emo"],
    },
    {
        name: "Gabriela",
        image: fansImage,
        genres: ["Pop", "Pop Punk", "Samba"],
    },
    {
        name: "Daniela",
        image: fansImage,
        genres: ["Pop", "Death Metal", "Samba"],
    },
    // Add more profiles here
];

const MainMenu = () => {
    return (

        <div className="main-menu-container">
        
        <div className="top-bar">
            <Link to="/Login">
                <i className="material-icons" style={{ fontSize: '24px', color: 'black' }}>arrow_back</i>
            </Link>
            <div className="top-bar-title">Users</div>
            <Link to="/ListBands">
            <i className="material-icons" style={{ fontSize: '24px', color: 'black' }}>sort</i>
            </Link>
        </div>


        <div className="frame">
            {profiles.map((profile, index) => (

                <div className="main-profile" key={index}>
                <Link to="/UserProfile">
                    <div className="overlap-group">
                        <img
                        className="user-profile"
                        alt="User profile"
                        src={profile.image}
                        />
                        <div className="ellipse" />
                    </div>

                    <div className="div">
                        <div className="name-wrapper">
                        <div className="name">{profile.name}</div>
                        </div>
                        <div className="div-2">
                        {profile.genres.map((genre, i) => (
                            <div className="genre-wrapper" key={i}>
                            <div className="genre-text">{genre}</div>
                            </div>
                        ))}
                        </div>
                    </div>
                </Link>

                <svg width="500" height="100">
                    <line x1="0" y1="88" x2="350" y2="88" stroke="rgba(0, 0, 0, 0.2)" strokeWidth="1" />
                </svg>

                </div>
            ))}
            </div>

        <div className="center-block">
            <Link to="/UserProfile">
                <div className="button-big">
                    <div className="text">MY PROFILE</div>
                </div>
            </Link>
        </div>

        </div>

    );
};

export default MainMenu;
