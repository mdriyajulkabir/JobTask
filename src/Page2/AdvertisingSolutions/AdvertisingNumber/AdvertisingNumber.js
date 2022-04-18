import React from 'react';
import './AdvertisingNumber.css'
const AdvertisingNumber = () => {
    return (
        <div className='pb-5 advertising-main'>
            <div className="row text-center advertisingNumber-container" >
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                    <h1>70 million</h1>                    
                    <p>Monthly Page Views</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                    <h1>88%</h1>
                    <p>Organic Traffic</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                    <h1>7.8 million</h1>
                    <p>Number of Individual Members</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
                    <h1>20 million</h1>
                    <p>Monthly Visitor</p>
                </div>
            </div>
        </div>
    );
};

export default AdvertisingNumber;