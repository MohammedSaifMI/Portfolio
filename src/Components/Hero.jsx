import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import gsap from 'gsap';
import '../Components/hero.css';

function Hero() {
    useEffect(() => {
        // GSAP animations
        gsap.fromTo(
            '.Hero-sl-text p',
            { y: 115, opacity: 0 },
            { y: 0, opacity: 1, delay: 0.2, duration: 0.5, ease: 'power3.out' }
        );

        gsap.fromTo(

            '.span1',
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, delay: 0.2, duration: 1.5, ease: 'power3.out' }
        );
        gsap.fromTo(
            '.span2',
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, delay: 0.4, duration: 1.5, ease: 'power3.out' }
        );
        gsap.fromTo(
            '.span3',
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, delay: 0.6, duration: 1.5, ease: 'power3.out' }
        );
    }, []);

    return (
        <div className="Home d-flex flex-column justify-content-between text-white">
            {/* Scroll Section */}

            <div className="home_scroll position-absolute start-0 mt-5">
                <p className="m-0 ms-4">
                    <span className="home_scroll_text">
                        01 // 04 <span className="scroll_hy"></span><span>SCROLL </span>
                    </span>
                    <span className="home_scroll_arrow">
                        <i className="fa-solid fa-arrow-down"></i>
                    </span>
                </p>
            </div>

            {/* Middle Section with the Title and Description */}
            <div className="container flex-grow-1 d-flex flex-lg-row flex-column align-items-center justify-content-center text-center text-lg-start">
                <div className="Hero-title mx-lg-5 mb-lg-0">
                    <table className="table-borderless">
                        <tbody>
                            <tr>
                                <td><span className="span1 ms-5">Multi-</span></td>
                            </tr>
                            <tr>
                                <td><span className="span2">Disciplinary</span></td>
                            </tr>
                            <tr>
                                <td><span className="span3 ms-5">Designer</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Animated Hero-sl-text */}
                <div className="Hero-sl-text lead">
                    <p>
                        Creative thinking and problem <br />
                        solving are where my mind wanders, <br />
                        using my knowledge and passion for <br />

                        design as my medium.
                    </p>
                </div>
            </div>

            {/* Bottom Section with the Button */}
            <div className="Arrow-btn mb-3 text-center">
            <ScrollLink
                    to="next-section"
                    smooth={true}
                    duration={500}
                >
                    <button className="btn btn-custom rounded-circle">
                        <i className="fa-solid fa-arrow-down"></i>
                    </button>
                </ScrollLink>
            </div>
        </div>
    );
}

export default Hero;