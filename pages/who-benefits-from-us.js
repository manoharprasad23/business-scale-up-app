import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import PageBanner from '../components/Common/PageBanner';
import WhoBenefitsFromUs from '../components/About/WhoBenefitsFromUs';
class Result extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                {/* <div className="container">
                    <div className="section-title">
                            <h2>Who benefits from us?</h2>
                            <div className="bar"></div>
                        </div>
                    <img src={require("../images/1-02-02-02.png")} alt="image" />
                </div> */}
                <WhoBenefitsFromUs/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Result;