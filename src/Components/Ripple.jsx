import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.ripples';

const Ripple = ({ children }) => {
  useEffect(() => {
    // Initialize the ripple effect using jQuery
    $('#ripple').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });

    // Clean up function to remove ripple effect on component unmount
    return () => {
      $('#ripple').ripples('destroy');
    };
  }, []);

  return (
    <div id="ripple" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <div className="background">
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Ripple;
