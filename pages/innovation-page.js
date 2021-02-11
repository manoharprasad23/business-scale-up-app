import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import InnovationContent from '../components/InnovationContent/InnovationContent';

class InnovationPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <InnovationContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default InnovationPage;