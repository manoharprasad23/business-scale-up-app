import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import DownloadResultContent from '../components/DownloadResultContent/DownloadResultContent';
import Footer from '../components/Layout/Footer';
import PageBanner from '../components/Common/PageBanner';
class Result extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Download Result" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Download Result" 
                /> 
                <DownloadResultContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Result;