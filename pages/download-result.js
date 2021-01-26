import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import DownloadResultContent from '../components/DownloadResultContent/DownloadResultContent';
import Footer from '../components/Layout/Footer';

class Result extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <DownloadResultContent />
            </React.Fragment>
        );
    }
}

export default Result;