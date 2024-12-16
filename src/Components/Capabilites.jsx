import React, { useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer'; // Import the intersection observer hook
import '../Components/box4.css'; // Assuming your CSS file is already set up
import Demo from './demo';

function Capabilities() {
  const [animationClass, setAnimationClass] = useState('');
  const [isInView, setIsInView] = useState(false);

  // Use Intersection Observer hook to detect when the section comes into view
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
    triggerOnce: false, // To trigger on every entry and exit
  });

  const handleInView = useCallback(() => {
    if (inView && !isInView) {
      setAnimationClass('animate-icons');
      setIsInView(true); // Set the section to be in view
    } else if (!inView && isInView) {
      setAnimationClass('');
      setIsInView(false); // Reset animation when section is out of view
    }
  }, [inView, isInView]);

  // Use useEffect to handle the logic on inView change
  React.useEffect(() => {
    handleInView();
  }, [handleInView]);

  return (
    <>
      <div className="box4 capabilities-showcase d-flex flex-column text-white" ref={ref}>
        <div className="top-nav d-flex justify-content-between align-items-center px-4 py-3">
          <Demo />
          <p className="page-number">04/</p>
          <p><span>Capabilities</span></p>
          <p className="page-total">/04</p>
        </div>

        {/* Main Content */}
        <div className={`capabilities-content d-flex flex-column align-items-center justify-content-center text-center ${animationClass}`}>
          <h1 className="main-title">SPECIALIZE IN</h1>
          <div className="app-container">
            {/* Row 1 */}
            <div className="row justify-content-center">
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/452228/html-5.svg" alt="HTML" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/373535/css.svg" alt="CSS" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/349419/javascript.svg" alt="JavaScript" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" alt="Bootstrap" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://seeklogo.com/images/G/greensock-gsap-icon-logo-13BB451E88-seeklogo.com.png" alt="GSAP" className="icon" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="row justify-content-center">
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/353924/java.svg" alt="Java" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Spring Boot" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="MongoDB" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/439233/mysql.svg" alt="MySQL" className="icon" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="row justify-content-center">
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/373595/firebase.svg" alt="Firebase" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/439171/github.svg" alt="GitHub" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/452210/git.svg" alt="Git" className="icon" />
              </div>
            </div>

            {/* Footer Row */}
            <div className="row justify-content-center">
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/353733/figma.svg" alt="Figma" className="icon" />
              </div>
              <div className="col-2 col-sm-1 d-flex justify-content-center">
                <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman" className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Capabilities;
