import React from 'react';
import imageAqua from "./image/aqua.png";
import videoAqua from "./videos/Kingdom Hearts - 'Aqua's Theme' - ORIGINAL LYRICS - Lizz Robinett & @Dysergy.mp4";
import HoverVideoPlayer from 'react-hover-video-player';

function FirstComponent(){
	return(
		<div style = {{flex: '1 1 35%', marginRight: '12px', position: 'relative'}}>
                <HoverVideoPlayer videoSrc = {videoAqua} pausedOverlay = { <img src = {imageAqua} alt = "first" style = {{width: '100%', height: '100%', objectFit: 'cover', position: 'relative'}} /> } />
                </div>
	);
}

export default FirstComponent;

