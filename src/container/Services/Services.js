import React, { useState, useEffect } from 'react';

import './Services.scss';
import engineerLogo from '../../assets/engineering.svg';
import windowLogo from '../../assets/window.svg';
import buildingLogo from '../../assets/building.svg';
import sketchLogo from '../../assets/sketch.svg'

import data from '../../en';

const Services = () => {

    const [services, setService] = useState(data.services.service);

    return (
        <div id="services" className="services">
            <p className="services-title">SERVICES</p>
            <div className="services-container">
                    {
                        services.map( service => {

                            return (
                                <div key={service.title} className="service">
                                    <img alt={service.title} src={sketchLogo} />
                                    <div className="service-title">
                                        <h2>{service.title}</h2>
                                        <div className="bottom-border"><div></div></div>
                                    </div>
                                    <p>{service.description}</p>
                                </div>
                            )

                        })
                    }
            </div>
        </div>
    )
}

const getLogo = (iconNumber) => {

    switch(iconNumber) {
        case 1:
            return engineerLogo;
        case 2:
            return windowLogo;
        case 3:
            return buildingLogo;
        case 4: 
            return sketchLogo;
        case 5:
            return buildingLogo;
        default:
            break;
    }

    return null;
}

export default Services;

