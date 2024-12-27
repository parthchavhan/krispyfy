'use client'
import { Link as Linkscroll } from 'react-scroll';
import SlideUp from "@/utils/animations/slideUp"

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3><i className="ri-bar-chart-line" /> Elevate Your Business <i className="ri-pie-chart-line" /> </h3>
                            <h2>Create Custom Videos & Scripts to Boost Your Reach.</h2>
                            <p>Boost your brand with engaging videos and tailored scripts, designed to expand your reach on Instagram and beyond. 
                                Start anytime—pause or cancel whenever you need.</p>
                            <div className="hero-btns">
                                <Linkscroll smooth={true} to="pricing" className="theme-btn">See our Work</Linkscroll>
                                <Linkscroll smooth={true} to="book" className="theme-btn differenct-color">Talk to us</Linkscroll>
                            </div>
                            <div className="dot-shape"><img src="/images/shapes/shape1.png" alt="Shape" /></div>
                            <div className="dot-shape2"><img src="/images/shapes/shape2.png" alt="Shape" /></div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero