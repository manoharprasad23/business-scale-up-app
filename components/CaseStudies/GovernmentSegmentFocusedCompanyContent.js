import React, { Component } from 'react';

class GovernmentSegmentFocusedCompanyContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <section className="news-details-area case-studies-sub-component-container header-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Government segment focused company</h2>
                        <h4>Connection with new brands & product lines | Increased revenues & profitability</h4>
                        <div className="bar"></div>
                    </div>
                    <img src={require("../../images/last-mile-banner.jpg")} alt="image" />
                    <div className="row strategic-plans">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>Deeper engagement with Government customers</p>
                                <p>Offer new brands and products – increase revenues & profitability</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <ul class="details-list">
                                    <li>Assessment of customer base – market sizing and opportunities</li>
                                    <li>Prioritize products to focus – customer acceptance & profitability</li>
                                    <li>Reach out to new brands</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <ul class="details-list">
                                    <li>Product lines prioritized for customers – added solutions and services portfolio : improved profitability</li>
                                    <li>Tie up with 3 new top brands & agreement on exclusivity, support & margins</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GovernmentSegmentFocusedCompanyContent;