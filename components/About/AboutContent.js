import React, { Component } from 'react';
import Link from 'next/link';
import ServicesBannerHeading from '../Services/ServicesBannerHeading';

class AboutContent extends Component {

    bannerHeadingData = {
        bannerHeadingTitle: "We help business succeed and grow to their true potential",
        knowMoreLink: "",
        enquireNowLink: "/service-details"
    }

    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="about-section about-section-container ptb-100 bor-tb">
                <div className="container">
                    <div className="services-details">
                            <div className="text">
                                <h3>About Us</h3>
                                <ServicesBannerHeading bannerHeadingData={this.bannerHeadingData}/>
                            </div>
                    </div>
                </div>
                <div className="story-behind-scaleUp">
                    <h2>The story behind ScaleUp</h2>
                    <div className="story-behind-scaleUp-container">
                        <div class="story-behind-scaleUp-content">
                            <p>Entrepreneurship & business are magnets for people with unique minds, ideas & convictions, often armed with key traits of people, dedication and drive to succeed. The thought of controlling your own destiny - to do what you want, and your way is a huge attractive prospect.</p>
                            <p>But there is a noteworthy catch. Not everyone is equipped with deep knowledge & understanding about what it takes to succeed. And this limits the true potential of the business to succeed. As Jim Collins quipped, "Good is often the enemy of great"</p>
                            <p>On the other hand great (& successful) business combine thoughtful strategy, systematic implementation-execution and organizational accountability to drive business improvement, profile growth and success. And this is a result of experience! </p>
                            <p>The passion for sharing decades of business understanding, knowledge and hands-on experience to make business grow & succeed was the driving force behind the start of ScaleUp.</p>
                            <p>Our Vision is "To Empower business and individuals with ideas, tools and support to make them more successful"</p>
                            <p>And we will contribute to the success of as many business and individuals, as we can! And cherish the creation of a prosperous future.</p>
                        </div>
                        <div className="logo-and-sub-heading">
                            <img src={require("../../images/logo.png")} alt="logo" />
                            <h6>Great business stories happen when the passion to make a difference matched the ability to keep the long term execution going</h6>
                        </div>
                    </div>
                </div>
                <div className="about-founder-container">
                    <h2>About Founder</h2>
                    <div className="about-founder-content">
                        <img src={require("../../images/logo.png")} alt="logo" />
                        <div className="about-founder-text">
                            <p>Uday Bhat is a leader with a successful track record of over 28 years in making business win!</p>
                            <p>Uday's experience is the result of the leadership challenges he has handled in three world class organization: Samsung Electronics, Hewlett Packard & Xerox</p>
                            <p>His leadership roles have been success stories in both B2C & B2B business - be it setting up new business, turning around business into profitable ones or scaling up existing business into multi million, profitable ventures.</p>
                            <p>Business success & scale is the result of merging the speed, energy, enthusiasm of an entrepreneur with the systems & processes of Corporate system - a philosophy that has been the cornerstone of Uday's leadership</p>
                            <p>These experiences and learnings are the keys to help & support start ups, entrepreneurs and companies wade through this volatile, uncertain, complex and ambiguous business world! and Win!</p>
                        </div>
                    </div>
                </div>
                <div className="container vision-mission-values">
                    <div class="vision-mission-values-content">
                        <h3>Our Vision</h3>
                        <p>To motivate, enable and support business for growth and create a prosperous future</p>
                    </div>
                    <div class="vision-mission-values-content">
                        <h3>Our Mission</h3>
                        <p>Empower business with our ideas, tools and support to make them more successful and prosperous</p>
                    </div>
                    <div class="core-values">
                        <h3>Our Core Values</h3>
                        <p>Our work would be guided & recognized by our philosophy of trust, integrity and respect.</p>
                        <ul>
                            <li><strong>Common beliefs</strong> - We work with business, who share our beliefs and not just do business because it has to be done.</li>
                            <li><strong>Simplicity</strong> - Our business approach would be simple, straight forward and impactful.</li>
                            <li><strong>Empowerment</strong> - Our knowledge and tools would Empower our customers to turn them into growth engines. We would be partners with them in this journey.</li>
                            <li><strong>Social impact</strong> - We would strive to create success stories with as many business as possible and create a multiplier positive impact on the society.</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutContent;