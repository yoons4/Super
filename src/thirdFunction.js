import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import imageTerra from "./image/terra.png";
import videoRiku from "./videos/Kingdom Hearts - 'Riku's Theme' - ORIGINAL LYRICS - Lizz Robinett.mp4";

function ThirdComponent(){
        return(
                <div style = {{flex: '1 1 35%', marginRight: '12px'}}>
                <HoverVideoPlayer videoSrc = {videoRiku} pausedOverlay = { <img src = {imageTerra} alt = "third" style = {{width: '100%', height: '100%', objectFit: 'cover'}} /> } />
                </div>
        );
}

export default ThirdComponent;

