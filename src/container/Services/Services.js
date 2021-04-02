import React from 'react';

import './Services.scss';
import engineerLogo from '../../assets/engineering.svg';
import windowLogo from '../../assets/window.svg';
import buildingLogo from '../../assets/building.svg';
import sketchLogo from '../../assets/sketch.svg'

const Services = () => {
    return (
        <div id="services" className="services">
            <p className="services-title">SERVICES</p>
            <div className="services-container">
                <div className="service">
                    <img alt="engineerLogo" src={sketchLogo} />
                    <div className="service-title">
                        <h2>Service 1</h2>
                        <div className="bottom-border"><div></div></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id pulvinar est, et tincidunt tellus. Aliquam lobortis condimentum sem hendrerit porta.</p>
                </div>
                <div className="service">
                    <img alt="buildingLogo" src={buildingLogo} />
                    <div className="service-title">
                        <h2>Service 2</h2>
                        <div className="bottom-border"><div></div></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id pulvinar est, et tincidunt tellus. Aliquam lobortis condimentum sem hendrerit porta.</p>
                </div>
                <div className="service">
                    <img alt="windowLogo" src={windowLogo} />
                    <div className="service-title">
                        <h2>Service 3</h2>
                        <div className="bottom-border"><div></div></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id pulvinar est, et tincidunt tellus. Aliquam lobortis condimentum sem hendrerit porta.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;

