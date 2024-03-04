import React from 'react';
import CrashDollsPage from './mainpage/CrashDollsPage';
import AudioPlayer from './mainpage/AudioPlayer'; // Import the AudioPlayer component
import Footer from './mainpage/Footer';
import Videos from './mainpage/Videos';
import NextShow from './mainpage/NextShow';
import Fans from './mainpage/Fans';
import Pictures from './mainpage/Pictures';
import JoinTheCommunity from './mainpage/JoinTheCommunity';


const MainPage = () => {
    return (
        <div className="App">
            <CrashDollsPage />
            <Videos />
            <NextShow />
            <Fans />
            <Pictures />
            <JoinTheCommunity />
            <Footer />
            <AudioPlayer />
        </div>
    );
};

export default MainPage;
