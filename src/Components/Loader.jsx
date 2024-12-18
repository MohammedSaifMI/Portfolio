import React, { useEffect, useState } from 'react';
import Src from '../Components/ms1.png';
import Ink from '../assets/ink_lv2.gif';
import '../Components/loader.css';

function Loader() {
  const [fadeOut, setFadeOut] = useState(false);

  // Trigger fade-out after ink effect is complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out after 5 seconds (duration of the ink animation + logo fade-in)
    }, 5000); // Match this with the animation duration

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <>
      <div className={`banner ${fadeOut ? 'fade-out' : ''}`}>
        <div className="content">
          <div className="title">
            <img className="Load-logo" src={Src} alt="Loading" />
          </div>
          <img className="background-gif" src={Ink} alt="Background" />
        </div>
      </div>
    </>
  );
}

export default Loader;
