import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './demo.css'; // Import the CSS file

const Demo = () => {
    const [mouseX, setMouseX] = useState(null);
    const [isMouseAbove, setIsMouseAbove] = useState(false);
    const pathRef = useRef(null);
    const curveRange = 200; // Distance on each side of the mouse where the curve applies

    useEffect(() => {
        if (mouseX !== null && pathRef.current) {
            // Determine the control point Y position based on whether the mouse is above or below the line
            const controlPointY = isMouseAbove ? 150 :-30; // 90 for above (line down), 10 for below (curve up)

            // Animate the path with GSAP
            gsap.to(pathRef.current, {
                attr: {
                    d: `M0,50 
                        L${mouseX - curveRange},50 
                        Q${mouseX},${controlPointY} ${mouseX + curveRange},50 
                        L1000,50`
                },
                duration: 0.5, // Adjust duration for smoothness
                ease: 'power2.out' // Easing for smoother animation
            });
        } else if (pathRef.current) {
            // Reset the path when mouse leaves
            gsap.to(pathRef.current, {
                attr: {
                    d: `M0,50 L1000,50`
                },
                duration: 0.5,
                ease: 'power2.out'
            });
        }
    }, [mouseX, isMouseAbove]); // Re-run when mouseX or isMouseAbove changes

    const handleMouseMove = (e) => {
        // Get mouse position relative to the SVG container
        const svgRect = e.currentTarget.getBoundingClientRect();
        const mouseXPosition = e.clientX - svgRect.left;
        const mouseYPosition = e.clientY;

        // Check if the mouse is above or below the line
        const lineYPosition = svgRect.top + 50; // Adjust based on line's middle Y position
        setIsMouseAbove(mouseYPosition < lineYPosition);
        setMouseX(mouseXPosition);
    };

    const handleMouseLeave = () => {
        setMouseX(null); // Reset when the mouse leaves
    };

    return (
        <div
            className="line-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <svg className="wave"  height="100" viewBox="0 0 1000 83">
                <path
                    ref={pathRef}
                    d={`M0,50 L1000,50`} // Initial straight path
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                />
            </svg>
        </div>
    );
};

export default Demo;
