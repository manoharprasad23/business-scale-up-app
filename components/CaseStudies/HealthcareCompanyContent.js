import React, { Component } from 'react';

class HealthcareCompanyContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <section className="news-details-area case-studies-sub-component-container header-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Healthcare company</h2>
                        <h4>Building a premium brand | Developing new products | New channels for growth</h4>
                        <div className="bar"></div>
                    </div>
                    <img src={require("../../images/last-mile-banner.jpg")} alt="image" />
                    <div className="row strategic-plans">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>Build a premium healthcare brand</p>
                                <p>Offer high quality personal protection  and wellness products to Indian consumers</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <ul class="details-list">
                                    <li>Build products with highest quality specifications</li>
                                    <li>Contract manufacturing tie-ups & Quality control</li>
                                    <li>Innovative Sales Channels</li>
                                    <li>Create high impact marketing actions</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <ul class="details-list">
                                    <li>Launched personal protection products for Indian market – high quality & CE certification</li>
                                    <li>Top contract manufacturing facilities developed</li>
                                    <li>Effective use of Digital marketing & Online channels</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HealthcareCompanyContent;