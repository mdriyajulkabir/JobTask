import React from 'react';
import NavBar from '../NavBar/NavBar';
// import KurumsalBanner from './KurumsalBanner/KurumsalBanner';
import KurumsalFeature from './KurumsalFeature/KurumsalFeature';

const Kurumsal = () => {
    return (
        <div>
            <NavBar/>
            {/* <KurumsalBanner/> */}
            <KurumsalFeature/>
        </div>
    );
};

export default Kurumsal;