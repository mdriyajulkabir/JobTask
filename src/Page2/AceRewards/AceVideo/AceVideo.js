import React from 'react';
import aceVideo from '../../../Video/ace_podyum_led.mp4'
import './AceVideo.css'
const AceVideo = () => {
    return (
        <div className='ace-video'>
            <video autoPlay muted loop id='myVideo'>
                <source src={aceVideo} type='video/mp4' />
            </video>
            <h4>Award Ceremonies</h4>
            <h2>Watch the unforgettable moments <br />  of the <span>7th ACE Awards .</span> </h2>
            <a href="https://www.youtube.com/channel/UCe-UkKdYDJIA04yjGKBRy_w">Click to watch other videos.
</a>
        </div>
    );
};

export default AceVideo;