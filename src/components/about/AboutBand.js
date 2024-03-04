import React from 'react';
import './AboutBand.css'; 
import svgRabisco from '../../assets/rabisco band 1.svg';
import guitarSvg from '../../assets/vector-guitar.svg';

const AboutBand = () => {
  return (
    <div className="band-history">
      <img src={svgRabisco} className="svg-band-rabisco1" />
      
      <div className="title-section">
          <h1 className="pink-title">Band History</h1>
          <img src={guitarSvg} className="titleSVG" />
      </div>
      <p>
        Founded in São Paulo in mid-August 2023, the pop-punk band CrashDolls 
        is composed of Lua (Singer), André (Bassist), Caio (Pianist), Heitor (Bassist) and Marcos (Drummer). 
        Our influences range from Paramore, Bring Me The Horizon, Blink-182, Green Day, Maneskin, MUSE, NX Zero, White Stripes
        among others...
        </p>
    </div>
  );
};

export default AboutBand;
