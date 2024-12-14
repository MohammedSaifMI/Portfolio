import React from 'react';
import '../Components/box4.css';
import Demo from './demo';

function Capabilities() {
    return (
        <>
            <div className="box4 capabilities-showcase d-flex flex-column text-white">
                <div className="top-nav d-flex justify-content-between align-items-center px-4 py-3">
                    <Demo />
                    <p className="page-number">04/</p>
                    <p><span>Capabilities</span></p>
                    <p className="page-total">/04</p>
                </div>

                {/* Main Content */}
                <div className="capabilities-content d-flex flex-column align-items-center justify-content-center text-center">
                    <h1 className="main-title"> SPECIALIZE IN</h1>
                    <div className="app-container">
                        {/* Row 1 */}
                        <div className="row">
                            <img src="https://www.svgrepo.com/show/452228/html-5.svg" alt="HTML" className="icon" />
                            <img src="https://www.svgrepo.com/show/373535/css.svg" alt="CSS" className="icon" />
                            <img src="https://www.svgrepo.com/show/349419/javascript.svg" alt="JavaScript" className="icon" />
                            <img src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" alt="Bootstrap" className="icon" />
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="icon" />
                            <img src="https://seeklogo.com/images/G/greensock-gsap-icon-logo-13BB451E88-seeklogo.com.png" alt="GSAP" className="icon" />
                        </div>
                        {/* Row 2 */}
                        <div className="row">
                            <img src="https://www.svgrepo.com/show/353924/java.svg" alt="Java" className="icon" />
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="icon" />
                            <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Spring Boot" className="icon" />
                            <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="MongoDB" className="icon" />
                            <img src="https://www.svgrepo.com/show/439233/mysql.svg" alt="MySQL" className="icon" />
                        </div>
                        {/* Row 3 */}
                        <div className="row">
                            <img src="https://www.svgrepo.com/show/373595/firebase.svg" alt="Firebase" className="icon" />
                            <img src="https://www.svgrepo.com/show/439171/github.svg" alt="GitHub" className="icon" />
                            <img src="https://www.svgrepo.com/show/452210/git.svg" alt="Git" className="icon" />
                        </div>
                        {/* Footer Row */}
                        <div className="row">
                            <img src="https://www.svgrepo.com/show/353733/figma.svg" alt="Figma" className="icon" />
                            <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman" className="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Capabilities;
