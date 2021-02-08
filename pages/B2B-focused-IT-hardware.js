import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import B2BFocusedITHardwareContent from '../components/CaseStudies/B2BFocusedITHardwareContent';

class B2BFocusedITHardwareContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <B2BFocusedITHardwareContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default B2BFocusedITHardwareContainer;