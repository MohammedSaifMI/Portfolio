import React, { useEffect } from 'react';
import '../Components/box2.css';
import Demo from './demo';
import ImageDis from './ImageDis';
import Resume from '../assets/SaifResume.pdf';
import { gsap } from 'gsap';

function Box2() {
    useEffect(() => {
        // Animation for Learn More button hover effect
        const button = document.querySelector(".btn-responsive");
        
        if (button) {
            button.addEventListener("mouseenter", () => {
                gsap.to(".btn-responsive", {
                    backgroundColor: "#fff",
                    color: "#222",
                    scale: 1.2,
                    duration: 0.4,
                    ease: "elastic.out(1, 0.3)",
                });
            });

            button.addEventListener("mouseleave", () => {
                gsap.to(".btn-responsive", {
                    backgroundColor: "",
                    color: "#fff",
                    scale: 1,
                    duration: 0.4,
                    ease: "elastic.out(1, 0.3)",
                });
            });
           
        }

        return () => {
            if (button) {
                button.removeEventListener("mouseenter", () => {});
                button.removeEventListener("mouseleave", () => {});
            }
        };
    }, []);

    const handleButtonClick = (e) => {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        gsap.to(".btn-responsive", {
            scale: 30,
            zIndex:2,
            rotation: 360,
            backgroundColor: "#fff",
            color: "#fff",
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => {
                window.location.href = Resume;
            },
        });
    };

    return (
        <div className="box2 text-white">
            {/* Top Navigation Links */}
            <Demo />
            <div className="top-nav d-flex justify-content-between align-items-center px-4 py-3">
                <p className="page-number">02/</p>
                <p><span>About</span></p>
                <p><span>EMAIL / GITHUB / TWITTER / LINKEDIN</span></p>
                <p className="page-total">/04</p>
            </div>

            {/* Main Content Grid */}
            <div className="main-content-grid container-fluid">
                {/* Text Content */}
                <div className="intro">
                    <p className="intro-text">
                        HELLO, MY NAME'S Saif, I THRIVE ON<br />
                        TURNING IDEAS INTO REALITY CRAFTING <br />
                        PRODUCTS, DYNAMIC WEBSITES.
                    </p>
                </div>

                {/* Centered Image */}
                <div className="center-image-container">
                    <ImageDis />
                </div>

                <div className="animated-text">
                    <marquee className="text1">
                        Mohammed Saif - Mohammed Saif - Mohammed Saif - Mohammed Saif
                        Mohammed Saif - Mohammed Saif - Mohammed Saif - Mohammed Saif
                        Mohammed Saif - Mohammed Saif - Mohammed Saif - Mohammed Saif
                    </marquee>
                </div>

                {/* Learn More Button with animation */}
                <div className="learn-more">
                    <a onClick={handleButtonClick}>
                        <button className="btn btn-outline-light rounded-circle btn-responsive">
                            CV
                        </button>
                    </a>
                </div>
                {/* Animated Text */}
            </div>
        </div>
    );
}

export default Box2;
