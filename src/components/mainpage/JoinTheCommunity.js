import React from "react";
import "./JoinTheCommunity.css";
import { Link } from 'react-router-dom';

const JoinTheCommunity = () => {
    return (
        <div className="join-the-community"  id="app">
            <div className="group">

                <Link to="/Login">
                    <div className="button-design">
                        <div className="black-background">
                            <div className="rectangle" />
                            <div className="button-text">Download the app</div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="overlap-wrapper">
                <div className="button-design">
                    <div className="black-background">
                        <div className="rectangle" />
                        <div className="button-text">Newsletter</div>
                    </div>
                </div>
            </div>

            <p className="meet-other-fans-meet">
                - Meet other fans
                <br />
                - Meet more bands
                <br />
                - New music alert
                <br />
                - Shows alert
                <br />
                - Rate our new songs
            </p>
            <div className="new-music-alert">
                - New music alert
                <br />
                - Shows alert
            </div>
            <div className="title">Join the community</div>
        </div>
    );
};

export default JoinTheCommunity;