import React from 'react';
import Link from 'next/link';

const ServiceCaseStudiesThree = () => {
    return (
        <div className="service-case-studies services-section">
            <div className="title">
                <h3>Case Studies</h3>
                <h5>We have the expertise in supporting business across industries</h5>
            </div>
            <div className="row">
                        <div className="col-lg-4 col-md-6">
                        <Link href="/north-india-technology-retail-chain">
                            <div className="single-services mouse-pointer">
                                <div className="icon">
                                    <i className="flaticon-it"></i>
                                </div>
                                
                                    <h3>North India Technology Retail Chain</h3>
                                
                                <p>Helping reset business operations & drive higher profitability</p>
                                <p>Raising capital</p>
                            </div>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6">
                        <Link href="/government-segment-focused-company">
                            <div className="single-services mouse-pointer">
                                <div className="icon">
                                    <i className="flaticon-setting"></i>
                                </div>
                                
                                    <h3>Government Segment Focused Company</h3>
                                
                                <p>Connection with new brands & product lines</p>
                                <p>Increased revenues & profitability</p>
                            </div>
                            </Link>
                        </div>
                    </div>
        </div>
    )
}

export default ServiceCaseStudiesThree;