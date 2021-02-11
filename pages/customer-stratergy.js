import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import CustomerStratergyContent from '../components/CustomerStratergy/CustomerStratergyContent';

class CustomerStratergy extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <CustomerStratergyContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default CustomerStratergy;