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
        bannerHeadingTitle: "Holistic Business mentoring to deliver higher growth and profits",
        knowMoreLink: "/service-details",
        enquireNowLink: "/service-details"
    }

    IndividualResult = [
        {
            title: "Future readiness as an organization",
            imageUlr: ''
        },
        {
            title: "Pillars of growth & Profitability developed & executed",
            imageUlr: ''
        },
        {
            title: "Entrepreneurial organization with strong systems & process",
            imageUlr: ''
        }
    ]

    render() {
        return (
            <div className="services-details-area ptb-100 service-line-one-content">
                <div className="container">
                    <div className="services-details">
                        <div className="text">
                            <h3>Scale Up to the Next Level</h3>
                            <ServicesBannerHeading bannerHeadingData={this.bannerHeadingData}/>
                        </div>
                    </div>
                </div>

                <div className="business-strategy-details">
                    <div className="title">
                        <h3>We understand your business</h3>
                        <h4>And partner you in your growth story</h4>
                    </div>
                    <div className="details">
                        <p>Every business strives to grow & increase profitability.</p>
                        <p>We work with you to plot your business strategies, align or growth plans and helps in flawless execution.</p>
                        <p>"Walk the talk" engagement</p>
                        <p>Impactful business transformation</p>
                        <p>Our engagement covers all aspects of Business strategy & execution</p>
                    </div>
                </div>

                <div className="business-strategy-details approach-and-methodology">
                    <div className="title">
                        <h3>Our approach & methodology</h3>
                        <h4>Covers all aspects of your business</h4>
                    </div>
                    <div className="approach-design">
                        <div className="firstCircle circle">
                            <p>Detailed assignment - How Future Ready are you?</p>
                        </div>
                        <div className="secondCircle circle">
                            <p>The next 1-3 years Growth Strategy and how to win?</p>
                        </div>
                        <div className="thirdCircle circle">
                            <p>Execution, Execution Execution, Support and reviews & corrections?</p>
                        </div>
                    </div>
                </div>

                <div className="business-strategy-details">
                    <div className="title">
                        <h3>The result</h3>
                        <h4>Delivering on our promise</h4>
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