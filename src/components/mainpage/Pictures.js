import React from 'react';
import './Pictures.css'; 
import musicalNoteSVG from '../../assets/vector-camera.svg';
import InstagramFeed from './InstagramFeed';
import PictureGrid from './PictureGrid';



const Pictures = () => {
    return (
        <div className="pictures">

            <div className="title-section">
                <h1 className="pink-title">Pictures</h1>
                <img src={musicalNoteSVG} className="titleSVG" />
            </div>

            <PictureGrid />

            <InstagramFeed />

        </div>
    );
};

export default Pictures;