import React, { useState, useEffect } from 'react';

import './Services.scss';
import engineerLogo from '../../assets/engineering.svg';
import windowLogo from '../../assets/window.svg';
import buildingLogo from '../../assets/building.svg';
import sketchLogo from '../../assets/sketch.svg'

import data from '../../en';

const Services = () => {

    const [services, setService] = useState(data.services.service);

    useEffect(() => {
        console.log(data.services.service)
        setService(data.services.service);
    })

    return (
        <div id="services" className="services">
            <p className="services-title">SERVICES</p>
            <div className="services-container">
                    {
                        services.map( service => {

                            console.log(service)

                            return (
                                <div className="service">
                                    <img alt="engineerLogo" src={engineerLogo} />
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

export default Services;

