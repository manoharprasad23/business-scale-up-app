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
        bannerHeadingTitle: "Business Consulting & Advisory Services to win in the market place",
        knowMoreLink: "/service-details",
        enquireNowLink: "/service-details"
    }

    IndividualResult = [
        {
            title: "Alignment with all our stakeholders on key plans developed for action",
            imageUlr: ''
        },
        {
            title: "Hand Hold and Kick start execution - the first step to success",
            imageUlr: ''
        }
    ]

    render() {
        return (
            <div className="services-details-area ptb-100 service-line-one-content">
                <div className="container">
                    <div className="services-details">
                        <div className="text">
                            <h3>Accelerate your growth</h3>
                            <ServicesBannerHeading bannerHeadingData={this.bannerHeadingData}/>
                        </div>
                    </div>
                </div>

                <div className="business-strategy-details">
                    <div className="title">
                        <h3>Need to build & Strengthen a key strategy?</h3>
                        <h4>We help you win in the market place</h4>
                    </div>
                    <div className="details">
                        <p>Every business - a startup or growth focussed one needs a strong business plan for successful execution</p>
                        <p>How do you address the parts of your strategy to Win in the market place? Our consulting expertise is available</p>
                        <div className="exp-guides">
                        <p>Our deep and varied experience guides and helps you put into motion key strategy pillars. A few example of our impactful consulting and advisory services are -</p>
                            <p>Comprehensive Strategic business plan for growth</p>
                            <p>Industry & market sizing</p>
                            <p>Product launches</p>
                            <p>Go To Market plans across geographises, channels and customer</p>
                            <p>Sales Management capability</p>
                            <p>Marketing and brand building</p>
                            <p>Build a future ready organization</p>
                        </div>
                    </div>
                </div>

                <div className="business-strategy-details approach-and-methodology">
                    <div className="title">
                        <h3>Our approach & methodology</h3>
                        <h4>Customized engagement</h4>
                    </div>
                    <div className="approach-design-concept">
                        <div className="circle">
                            <p>Detailed assignment of business</p>
                        </div>
                        <div className="circle">
                            <p>Identify key ares/s of building scale</p>
                        </div>
                        <div className="circle">
                            <p>Comprehensive plans & actions developed to help growth</p>
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
                            <img src={require("../../images/delivering-on-our promise-3.png")} alt="image" />
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