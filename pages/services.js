import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import Footer from '../components/Layout/Footer';

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Our Services" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Our Services" 
                /> 
                <ServicesStyleOne />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services;