import React from 'react';
import Link from 'next/link';

const HowFutureReadyIsYourBusinessContent = () => {
    return (
        <div className="growth-tips">
            <div className="container">
                        <div className="section-title header-padding">
                            <h2>How Future Ready is Your Business</h2>
                            <div className="bar"></div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="projects-details-desc">
                                    <h3>Future Readiness of Companies
                                    </h3>
                                    <p>The best way to predict the future is to create one, goes the famous saying. But alas, not every company can be next Google, Facebook or Apple. So, it’s imperative to prepare the business and the people involved in the business for the changing future, that you may not have created.
                                    </p>
                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> What is “Future Readiness”?
                                    </h4>
                                    <p>An Organization is <b>future ready</b>, if it’s able to successfully respond to changes in its environment, both internally and externally, which allows it to survive and thrive. In its simplest form, this is Future Readiness. 
                                    </p>
                                </div>

                                <div className="features-text">
                                <h4><i className="flaticon-tick"></i> Why is being “Future Ready” important?
                                </h4>
                                <p>In today’s fast-paced competitive environment, consumer needs and preferences are changing constantly, which is both challenging and demanding. This is altering the competitive landscape and leading to transformation in company operating models. A key determinant of organizational success is the ability to always be ready for what is coming next. <b>Companies are left with no choice to be future ready, not only to grow business but to even sustain the business.</b>
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                        <div className="projects-details-desc">
                                <h3>What makes a business “Future ready”?
                                </h3>
                                <p>According to a detailed Meta data study conducted, common characteristics of a ‘future ready’ Organizations are:
                                </p>
                            <div className="features-text">
                                <h4><i className="flaticon-tick"></i> Resilience in the face of disruption
                                </h4>
                                <p>‘Future ready’ businesses see the crisis as a time to experiment   
                                and excel with new ways of working, enabled by the smarter investments in new technology.
                                </p>
                            </div>
                    
                            <div className="features-text">
                            <h4><i className="flaticon-tick"></i> Adapting to the times, trend, and technology(ies)
                            </h4>
                            <p>They aren’t afraid to adapt and take risks - Highly adaptable
                            </p>
                        </div>
                    
                        <div className="features-text">
                            <h4><i className="flaticon-tick"></i> Nurturing talent 
                            </h4>
                            <p>A business is only as good as its people and accommodating the modern workforce has never been a greater challenge. Using technology as enabler, making it easier for all kinds of employees to work more flexibly, with a focus on their wellbeing, always
                            </p>
                        </div>
                    
                        <div className="features-text">
                            <h4><i className="flaticon-tick"></i> A data centric Outlook 
                            </h4>
                            <p>In god we trust; rest all bring data to the table. Data based decision, securing and processing data is internalized in future ready companies
                            </p>
                        </div>
                        </div>
                    </div>  
                        
                    <div className="col-lg-12 col-md-12">
                        <div className="projects-details-desc">
                                <h3>Areas to focus for Future Readiness
                                </h3>
                                <p>It’s back to basics and back to future ! The areas to focus on being future ready are simple. Simple, not easy though. Stay focused, always.
                                </p>
                        </div>

                        <div className="project-details-image spacing-custom">
                                <img src={require("../../images/innovation/how-future-ready-1.png")} alt="projects" />
                        </div>
                    </div>

        <div className="col-lg-12 col-md-12">
            <div className="projects-details-desc">
                    <h3>How Future ready is your Business?
                    </h3>
                    <p>Our <b>“How Future ready is your business ?”</b> template helps you assess your readiness ! 
                    </p>

                    <p>To reassure you that you are indeed on the right track for the future or spot areas to help your plans & execution more robust to succeed in the future.
                    </p>

                    <Link href="/quiz">
                    <button className="default-btn">
                    How Future ready is your business?
                    Check Now - Free
                    </button>
                    </Link>
                    <br/>   
                    <ul className="spacing-custom">
                        <li><p>You will get a summary on your Future readiness now </p></li>
                        <li><p>You could also download a detailed 5 page report on the key success factors to help your business strategies & and execution succeed. 
                        </p></li>
                    </ul>
            </div>
        </div>
           </div>
        </div>
    )
}

export default HowFutureReadyIsYourBusinessContent;