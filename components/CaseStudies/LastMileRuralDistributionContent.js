import React, { Component } from 'react';

class LastMileRuralDistributionContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <section className="news-details-area case-studies-sub-component-container header-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Last mile Rural Distribution & Logistics Company</h2>
                        <h4>Helping redraw strategies & execution plans for 10x growth</h4>
                        <div className="bar"></div>
                    </div>
                    <img src={require("../../images/last-mile-banner.jpg")} alt="image" />
                    <div className="row strategic-plans">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>Fulfil the aspirations of Rural India with a strong assisted e commerce play</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <ul class="details-list">
                                    <li>Finalize the Products & Services portfolio to deliver revenue and profits</li>
                                    <li>Roadmap of All India footprint for setting up Sale points in rural areas</li>
                                    <li>Plug the Last mile delivery issues with tech based platforms for efficiency</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <ul class="details-list">
                                    <li>Maximum profit portfolio of products & services developed</li>
                                    <li>Pilot started in 2 states – proof of concept success</li>
                                    <li>Hybrid logistics model for lower costs and fastest delivery </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LastMileRuralDistributionContent;