import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: true,
    items: 1,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
}

class BannerSlider extends Component {

    state = { 
        display: false    
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <div className="main-banner-area">
                {this.state.display ? <OwlCarousel 
                    className="home-sliders owl-carousel owl-theme"
                    {...options}
                >
                    <div className="home-item item-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content">
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp" : ''
                                                    }
                                                >
                                                    We help businesses succeed & grow to achieve their true potential 

                                                </h1>

                                               
                                                
                                                <div 
                                                    className={
                                                        `banner-btn ${isVisible ? "animated fadeInUp" : ''}`
                                                    }
                                                >
                                                    <Link href="/contact">
                                                        <a className="default-btn">Enquire now</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            <div 
                                                className={
                                                    `banner-image ${isVisible ? "animated fadeInUp" : ''}`
                                                }
                                            >
                                                <img src={require("../../images/home-one/home-1-shape.png")} alt="Image" />
                                                <img src={require("../../images/home-one/home-1-img1.png")} className="banner-img" alt="image" />
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content-2">
                                                <div className="banner-heading growth-tips row">
                                                            <img className="slider-2-left-img" src={require("../../images/slider-2-left.png")} alt="Image" />
                                                        
                                                                <Link href="/quiz">
                                                                    <img className="slider-2-right-img" src={require("../../images/slider-2-right.png")} alt="Image" />
                                                                </Link>
                                                </div>

                                                <div 
                                                    className={
                                                        `banner-image ${isVisible ? "animated fadeInUp" : ''}`
                                                    }
                                                >
                                                    <img src={require("../../images/home-one/home-1-shape.png")} alt="Image" />
                                                    <img src={require("../../images/home-one/home-1-img2.png")} className="banner-img" alt="image" />
                                                
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content">
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp" : ''
                                                    }
                                                >
                                                    Helping you “ScaleUp to the next Level”
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp" : ''
                                                    }
                                                >
                                                    Last Mile Rural Distribution & Logistics company
                                                    Helped re draw strategies and execution plans for 10x growth
                                                </p>
                                                
                                                <div 
                                                    className={
                                                        `banner-btn ${isVisible ? "animated fadeInUp" : ''}`
                                                    }
                                                >
                                                    <Link href="/contact">
                                                        <a className="default-btn">Know more</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            <div 
                                                className={
                                                    `banner-image ${isVisible ? "animated fadeInUp" : ''}`
                                                }
                                            >
                                                <img src={require("../../images/home-one/home-1-shape.png")} alt="Image" />
                                                <img src={require("../../images/home-one/home-1-img3.png")} className="banner-img" alt="image" />
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg4">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content-4">
                                                <Link href="/contact">
                                                    <img src={require("../../images/slider-4.png")} alt="Image" />
                                                </Link>
                                            </div>
                                            
                                            <div 
                                                className={
                                                    `banner-image ${isVisible ? "animated fadeInUp" : ''}`
                                                }
                                            >
                                                <img src={require("../../images/home-one/home-1-shape.png")} alt="Image" />
                                                <img src={require("../../images/home-one/home-1-img3.png")} className="banner-img" alt="image" />
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        );
    }
}

export default BannerSlider;