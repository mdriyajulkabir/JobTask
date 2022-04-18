import React from 'react';
import NavBar from '../NavBar/NavBar';
import AdvertisingNumber from './AdvertisingNumber/AdvertisingNumber';
import BusinessPartnership from './BusinessPartnership/BusinessPartnership';
import Complaints from './Complaints/Complaints';

const AdvertisingSolutions = () => {
    return (
        <div>
            <NavBar/>
            <AdvertisingNumber/>
            <Complaints/>
            <BusinessPartnership/>
        </div>
    );
};

export default AdvertisingSolutions;