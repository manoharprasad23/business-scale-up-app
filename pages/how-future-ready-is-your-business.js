import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import HowFutureReadyIsYourBusinessContent from '../components/HowFutureReadyIsYourBusiness/HowFutureReadyIsYourBusinessContent';

class HowFutureReadyIsYourBusiness extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <HowFutureReadyIsYourBusinessContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default HowFutureReadyIsYourBusiness;