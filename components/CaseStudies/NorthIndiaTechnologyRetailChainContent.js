import React, { Component } from 'react';

class NorthIndiaTechnologyRetailChainContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <section className="news-details-area case-studies-sub-component-container header-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>North India Technology Retail Chain</h2>
                        <h4>Helping reset business operations & drive higher profitability | Raise capital</h4>
                        <div className="bar"></div>
                    </div>
                    <img src={require("../../images/north-india-tech-retail-chain.jpg")} alt="image" />
                    <div className="row strategic-plans">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>Regain leadership position</p>
                                <p>Reset business operations for higher profitability</p>
                                <p>Raise capital for expansion</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <ul class="details-list">
                                    <li>Identifying Focus categories, brands & products to boost</li>
                                    <li>Strengthen operations to drive higher store sales & improved consumer experience</li>
                                    <li>Evaluate options for raising capital</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <ul class="details-list">
                                    <li>New categories introduced. Worked with top brands for improved margins & terms of trade</li>
                                    <li>Store operations strengthened – team skill sets, improved retail experience & stocks</li>
                                    <li>Raising capital through equity route</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NorthIndiaTechnologyRetailChainContent;