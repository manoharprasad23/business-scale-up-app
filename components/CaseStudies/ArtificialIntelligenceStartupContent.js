import React, { Component } from 'react';

class ArtificialIntelligenceStartupContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <section className="news-details-area case-studies-sub-component-container header-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Artifical Intelligence startup</h2>
                        <h4>Product ideas converted into Go To Market models – new Customer pipes</h4>
                        <div className="bar"></div>
                    </div>
                    <img src={require("../../images/artificial-intelligence-startup.jpg")} alt="image" />
                    <div className="row strategic-plans">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>First mover advantage in the market with product innovation through AI, ML & VR</p>
                                <p>Start Customer pilots for scaling up in 12 months</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <ul class="details-list">
                                    <li>Prioritize products focus basis market disruption & size </li>
                                    <li>Engage with customer segments for pilots & Proof of concept – 6 ~9 months</li>
                                    <li>Initiate scale up plans with newer customers & segments</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <ul class="details-list">
                                    <li>Products launched – Edutech, Retail, Medical segments</li>
                                    <li>Customer pilots underway – positive feedback</li>
                                    <li>Plans for scaleup underway</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ArtificialIntelligenceStartupContent;