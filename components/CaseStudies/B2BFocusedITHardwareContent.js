import React, { Component } from 'react';

class B2BFocusedITHardwareContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <section className="news-details-area case-studies-sub-component-container header-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>B2B focused IT Hardware & Services company</h2>
                        <h4>Covid impact and reinventing the business model</h4>
                        <div className="bar"></div>
                    </div>
                    <img src={require("../../images/focused-IT-hardware.jpg")} alt="image" />
                    <div className="row strategic-plans">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>To regain business momentum</p>
                                <p>Set the base for 50% growth in the next Financial year</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <ul class="details-list">
                                    <li>Build a deeper customer connect program for wider range of services</li>
                                    <li>Focus on profitable products & services</li>
                                    <li>Streamline operations to reduce costs</li>
                                    <li>Marketing for demand generation</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <ul class="details-list">
                                    <li>Sales management skills built – top customers retained.New ones added.</li>
                                    <li>Shift to more profitable products & services : mix improved 30% to 50%</li>
                                    <li>Improved operations with 20% cost reduction</li>
                                    <li>Brand recognition</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default B2BFocusedITHardwareContent;