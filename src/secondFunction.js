import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import imageRoxas from "./image/roxas.png";
import videoRoxas from "./videos/'Roxas's Theme' (Kingdom Hearts) Original Lyrics by Lizz Robinett.mp4";

function SecondComponent(){
        return(
                <div style = {{flex: '1 1 35%', marginRight: '12px'}}>
                <HoverVideoPlayer videoSrc = {videoRoxas} pausedOverlay = { <img src = {imageRoxas} alt = "second" style = {{width: '100%', height: '100%', objectFit: 'cover'}} /> } />
                </div>
        );
}

export default SecondComponent;

