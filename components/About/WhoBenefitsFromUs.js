import React, { Component } from 'react';
import Link from 'next/link';
import ServicesBannerHeading from '../Services/ServicesBannerHeading';

class WhoBenefitsFromUs extends Component {


    render() {
        return (
            <section className="about-section about-section-container who-benefits-from-us bor-tb">
                <div className="container">
                    <div className="services-details header-padding">
                            <div className="section-title">
                                    <h2>Who benefits from us?</h2>
                                    <div className="bar"></div>
                                </div>
                            <img src={require("../../images/1-02-02-02.png")} alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default WhoBenefitsFromUs;