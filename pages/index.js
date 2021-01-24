import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/HomeOne/BannerSlider';
import Services from '../components/Services/ServicesStyleOne';
import BlogPost from '../components/Common/BlogPost';
import ServicesFooter from '../components/Services/ServicesFooter';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <BannerSlider />
                <Services />
                <BlogPost />
                <ServicesFooter />
            </React.Fragment>
        );
    }
}

export default Index;