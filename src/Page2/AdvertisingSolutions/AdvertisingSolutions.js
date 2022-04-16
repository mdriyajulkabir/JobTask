import React from 'react';
import NavBar from '../NavBar/NavBar';
import AdvertisingNumber from './AdvertisingNumber/AdvertisingNumber';
import Complaints from './Complaints/Complaints';

const AdvertisingSolutions = () => {
    return (
        <div>
            <NavBar/>
            <AdvertisingNumber/>
            <Complaints/>
        </div>
    );
};

export default AdvertisingSolutions;