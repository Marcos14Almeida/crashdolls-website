import React from 'react';
import './AudioPlayer.css';
//import soundcloudIcon from '../assets/icons/soundcloud-icon-white.png';
//import deezerIcon from '../assets/icons/deezer-icon-white.png';
import spotifyIcon from '../../assets/icons/spotify-icon.png';
import soundcloudIcon from '../../assets/icons/soundcloud-icon.png';

const AudioPlayer = () => {

  const urlLuaGotOverRadio = 'https://soundcloud.com/lua-vieira-freitas/sets/ep-lua-v/s-EIoU4oGBrn5?utm_source=mobi&utm_campaign=social_sharing&utm_terms=gensim_w2v_annoy_variants.gensim_knn_annoy_190dims&si=d67b5cf199f94bb8be463ae3350d7007';

  return (
    <div className="audio-player-bottom">

      <p className="song-title">Set It Off - Win Win</p>

      <audio controls autoPlay className="song-play">
        <source src="/song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="icon-buttons-container">

        <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
          <button className="icon-button">
            <img src={spotifyIcon} alt="Icon 1" />
          </button>
        </a>

        <a href={urlLuaGotOverRadio} target="_blank" rel="noopener noreferrer">
          <button className="icon-button">
            <img src={soundcloudIcon} alt="Icon 1" />
          </button>
        </a>

      </div>

    </div>
  );
};

export default AudioPlayer;
