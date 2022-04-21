import React from 'react';
import './AceVideo.css'
const AceVideo = () => {
    return (
        <div className='ace-video'>
            <video autoPlay muted loop id='myVideo'>
                <source src='https://cdn.sikayetvar.com/public/images/ace/ace_podyum_led.mp4?v1' type='video/mp4' />
            </video>
        </div>
    );
};

export default AceVideo;