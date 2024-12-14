import React, { useState, useEffect } from 'react';
import '../Components/box3.css';
import Demo from './demo';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectShowcaseBox() {
    const projects = [
        { id: 1, name: "Project 1", img: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 2, name: "Project 2", img: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 3, name: "Project 3", img: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ];

    const [hoveredProjectId, setHoveredProjectId] = useState(null);

    useEffect(() => {
        // ScrollTrigger for project header spans
        ScrollTrigger.create({
            trigger: ".box3",
            start: "top 80%",
            end: "bottom 50%",
            markers: false,
            onEnter: () => {
                gsap.fromTo(
                    ".projects-header span",
                    { y: 100, opacity: 0, skewY: 7 },
                    {
                        y: 0,
                        opacity: 1,
                        skewY: 0,
                        duration: 1.5,
                        ease: "power4.out",
                        stagger: 0.2,
                    }
                );
            },
        });

        // ScrollTrigger for project cards
        document.querySelectorAll(".project-card").forEach((card) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top 50%",
                end: "bottom 5%",
                markers: false,
                onEnter: () => {
                    gsap.fromTo(
                        ".project-card",
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 2,
                            ease: "power3.out",
                            stagger: {
                                amount: 1,
                                from: "start",
                            },
                        }
                    );
                },
            });
        });

        // Cleanup ScrollTrigger instances on component unmount
        return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }, []);

    const handleViewAllClick = () => {
        document.body.style.overflow = 'hidden';
        // Animation for rotating and zooming out simultaneously
        gsap.to(".circle-button", {
            backgroundColor: '#fff', 
            color:'#fff',
            zIndex: 2,
            scale:30,
            rotation: 360,
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => 
                {
                document.body.style.overflow = '';
                window.location.href = "https://github.com/MohammedSaifMI?tab=repositories";
            },
        });
    };

    return (
        <div className="box3 project-showcase-container d-flex flex-column min-vh-100 text-white">
            {/* Top Navigation Links */}
            <div className="top-nav d-flex justify-content-between align-items-center px-4 py-3">
                <Demo />
                <p className="page-number">03/</p>
                <p>Projects</p>
                <p className="page-total">/04</p>
            </div>

            {/* Main Content - Projects Section */}
            <div className="content-wrapper d-flex flex-column flex-md-row align-items-center">
                {/* Left Section - View All Projects Button */}
                <div className="left-section">
                    <div
                        className="circle-button"
                        onMouseEnter={() => {
                            gsap.to(".circle-button", {
                                backgroundColor:'#fff',
                                color:'black',
                                scale: 1.2,
                                duration: 0.4,
                                ease: "elastic.out(1, 0.3)", // Elastic effect
                            });
                        }}
                        onMouseLeave={() => {
                            gsap.to(".circle-button", {
                                backgroundColor:'',
                                color:'#fff',
                                scale: 1,
                                duration: 0.4,
                                ease: "elastic.out(1, 0.3)", // Smoothly return to original scale
                            });
                        }}
                        onClick={handleViewAllClick} // Trigger the zoom-out and rotation animation
                    >
                        VIEW ALL PROJECTS
                    </div>
                </div>

                {/* Right Section - Header Text */}
                <div className="right-section">
                    <h2 className="projects-header">
                        <span>Here are some selected projects that exemplify</span><br />
                        <span>my passion for creating impactful web experiences</span><br />
                        <span>and innovative software solutions.</span>
                    </h2>
                </div>
            </div>

            {/* Center Section - Project Cards */}
            <div className="projects-center mt-4">
                <div className="projects-row">
                    {projects.map((project) => (
                        <div
                            className="project-card"
                            key={project.id}
                            onMouseEnter={() => setHoveredProjectId(project.id)}
                            onMouseLeave={() => setHoveredProjectId(null)}
                        >
                            <img
                                src={project.img}
                                alt={project.name}
                                className="project-image"
                                style={{
                                    opacity: hoveredProjectId && hoveredProjectId !== project.id ? 0.2 : 1,
                                }}
                            />
                            <div className="project-name">{project.name}</div>
                        </div>
                    ))}
                </div>
                {/* Centered Project Name */}
                {hoveredProjectId && (
                    <div
                        className="project-name"
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 100,
                            color: 'white',
                            fontSize: '2rem',
                            pointerEvents: 'none',
                        }}
                    >
                        {projects.find(p => p.id === hoveredProjectId).name}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectShowcaseBox;
