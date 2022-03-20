import React from 'react';
import Banner from './Banner/Banner';
import Marka from './Marka/Marka';
import Sayılarla from './Sayılarla/Sayılarla';
import Tuketici from './Tüketici/Tuketici';
import Yıldız from './Yıldız/Yıldız';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Marka/> 
            <Sayılarla/>  
            <Tuketici/> 
            <Yıldız/>
        </div>
    );
};

export default Home;