import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import PageBanner from '../components/Common/PageBanner';
class Result extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <img src={require("../images/1-02-02-02.png")} alt="image" />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Result;