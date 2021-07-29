import React, { Component } from 'react';

import './Services.scss';
import product from '../../assets/product.svg';
import engineer from '../../assets/engineer.svg';
import design from '../../assets/design.svg';
import analysis from '../../assets/analysis.svg';
import drawings from '../../assets/drawings.svg';

import data from '../../en';

class Services extends Component {
    
     getLogo = (iconNumber) => {
        switch(iconNumber) {
            case 1:
                return design;
            case 2:
                return analysis;
            case 3:
                return product;
            case 4: 
                return engineer;
            case 5:
                return drawings;
            default:
                break;
        }
    }
    

    render() {
        return (
            <div id="services" className="services">
                <p className="services-title">SERVICES</p>
                <div className="services-container">
                        {
                            data.services.service.map( service => {    
                                return (
                                    <div key={service.title} className="service">
                                        <img alt={service.title} src={this.getLogo(service.icon)} />
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
}


export default Services;

