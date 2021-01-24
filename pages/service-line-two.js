import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import ServiceLineTwoContent from '../components/Services/ServiceLineTwoContent';
import Footer from '../components/Layout/Footer';

class ServiceLineOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <ServiceLineTwoContent />
            </React.Fragment>
        );
    }
}

export default ServiceLineOne;