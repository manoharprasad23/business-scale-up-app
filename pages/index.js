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
                <img src={require("../images/who-benefits-from-us.png")} alt="who-benefits-from-us" />
                <BlogPost />
                <ServicesFooter />
            </React.Fragment>
        );
    }
}

export default Index;