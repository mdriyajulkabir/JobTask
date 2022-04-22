import React from 'react';
import Footer from '../../Pages/Home/Footer/Footer';
import WorkWithUs from '../AdvertisingSolutions/WorkWithUs/WorkWithUs';
import NavBar from '../NavBar/NavBar';
import AceVideo from './AceVideo/AceVideo';
import GallerySlider from './GallerySlider/GallerySlider';
import YourSuccess from './YourSuccess/YourSuccess'
const AceRewards = () => {
    return (
        <div>
            <NavBar/>
            <AceVideo/>
            <GallerySlider/>
            <YourSuccess/>
            <WorkWithUs/>
            <Footer/>
        </div>
    );
};

export default AceRewards;