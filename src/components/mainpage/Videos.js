import React from 'react';
import YouTube from 'react-youtube'; // Import the YouTube component
import './Videos.css';
import musicalNoteSVG from '../../assets/vector-musical-note.svg';
import luaAlbum from '../../assets/lua-album.jpg';
import soundcloudIcon from '../../assets/icons/soundcloud-icon.png';

const Videos = () => {
    const videos = [
        {
            id: 'JSNafIAdozw',
            name: 'Lua - Back to Black (Voice Cover)',
            spotify_link: '', 
            },
        {
            id: '9DrcYO9h8q8',
            name: 'Simple Plan - Shut Up! (Drum Cover)',
            spotify_link: '', 
            },
        {
            id: 'pZyaZEMdx4g',
            name: 'Paramore This Is Why (Drum Cover)',
            spotify_link: '',
            },
        {
            id: 't8f6ROkRB5k',
            name: 'Bring Me The Horizon - Drown (Drum Cover)',
            spotify_link: '',
            },
        {
            id: 'jym8Rs1Fpf4',
            name: 'Bruno Mars - Uptown Funk (LED Drum Cover)',
            spotify_link: '',
            },
    ];

    const playerOpts = {
        width: '350',
        height: '250',
    };

    const urlLuaGotOverRadio = 'https://soundcloud.com/lua-vieira-freitas/sets/ep-lua-v/s-EIoU4oGBrn5?utm_source=mobi&utm_campaign=social_sharing&utm_terms=gensim_w2v_annoy_variants.gensim_knn_annoy_190dims&si=d67b5cf199f94bb8be463ae3350d7007';

    return (
        <div className="band-video-section"  id="videos">

            <div className="title-section">
                <h1 className="pink-title">Cover Videos</h1>
                <img src={musicalNoteSVG} className="titleSVG" />
            </div>

            <div className="youtube-video-list">
                {videos.map((video, index) => (
                <div className="youtube-video" key={index}>
                    <YouTube videoId={video.id} opts={playerOpts} />
                    <p className="youtube-name">{video.name}</p>
                </div>
                ))}
            </div>

            <br></br>
            <br></br>

            <div className="title-section">
                <h1 className="pink-title">Music</h1>
                <img src={musicalNoteSVG} className="titleSVG" />
            </div>

            <a href={urlLuaGotOverRadio} target="_blank" rel="noopener noreferrer" className="image-link">
                <div className="image-container">
                    <div className="image-wrapper">
                    <img src={luaAlbum} alt="Icon 1" width="330px"  height="280px"/>
                    <img src={soundcloudIcon} alt="SoundCloud Icon" className="soundcloud-icon" />
                    </div>
                    <p className="youtube-name">EP Lua</p>
                </div>
            </a>

        </div>
    );
};

export default Videos;
