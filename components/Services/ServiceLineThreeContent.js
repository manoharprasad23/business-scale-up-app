import React, { Component } from 'react';
import ServicesBannerHeading from './ServicesBannerHeading';
import Link from 'next/link';
import IndividualResult from './IndividualResult';
import ServiceCaseStudies from './ServiceCaseStudies';
import ServicesFooter from './ServicesFooter';

class ServiceLineOneContent extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    bannerHeadingData = {
        bannerHeadingTitle: "Strategic connections & eco system to scaleup your business",
        knowMoreLink: "/service-details",
        enquireNowLink: "/service-details"
    }

    IndividualResult = [
        {
            title: "New connects for business success",
            imageUlr: ''
        },
        {
            title: "Capital raised for business growth",
            imageUlr: ''
        },
        {
            title: "Organized skill & ready for the future",
            imageUlr: ''
        }
    ]

    render() {
        return (
            <div className="services-details-area ptb-100 service-line-one-content">
                <div className="container">
                    <div className="services-details">
                        <div className="text">
                            <h3>Connect to ScaleUp</h3>
                            <ServicesBannerHeading bannerHeadingData={this.bannerHeadingData}/>
                        </div>
                    </div>
                </div>

                <div className="business-strategy-details">
                    <div className="title">
                        <h3>Connections to scaleup your business</h3>
                        <h4>We help you win in the market place</h4>
                    </div>
                    <div className="details">
                        <p>We bring our eco system expertise to help you in creating new success</p>
                        <p>Facilitating growth - Help you establish connects for business engagement & sales success: Be it a customer connect or a new channel</p>
                        <p>Raising capital - help you raise capital: Financial Institutions to VC</p>
                        <p>Personal coaching to Leadership training to Sales development program - every aspect of organization capability building is addressed</p>
                        <p>Marketing success: Marketing Engine & Digital impact actions</p>
                        <p>And many more......</p>
                    </div>
                </div>

                <div className="business-strategy-details approach-and-methodology">
                    <div className="title">
                        <h3>Our approach & methodology</h3>
                        <h4>Address Key need of client</h4>
                    </div>
                    <div className="approach-design-concept">
                        <div className="circle">
                            <p>Your new plan</p>
                        </div>
                        <div className="circle">
                            <p>Our eco system</p>
                        </div>
                        <div className="image-container">
                            <img src={require("../../images/shape/shape4.png")} alt="image" />
                        </div>
                    </div>
                </div>

                <div className="business-strategy-details">
                    <div className="title">
                        <h3>The result</h3>
                        <h4>New ways to increase Sales & Profits</h4>
                    </div>
                    <div className="results-container">
                        <IndividualResult results={this.IndividualResult} />
                        <div className="image-container">
                            <img src={require("../../images/shape/shape4.png")} alt="image" />
                        </div>
                    </div>
                </div>

                <div className="business-strategy-details business-case-studies">
                    <div className="results-container">
                        <ServiceCaseStudies />
                    </div>
                </div>
                <ServicesFooter />
            </div>
        );
    }
}

export default ServiceLineOneContent;