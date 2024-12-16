import React, { useState, useEffect } from 'react';
import Hero from './Components/Hero';
import Box2 from './Components/Box2';
import Capabilites from './Components/Capabilites';
import Connect from './Components/Connect';
import Loader from './Components/Loader';
import Projectshowcasebox from './Components/Projectshowcasebox';
import Nav2  from './Components/Nav2';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // return <Loader />; 
  }

  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Nav2/>
       <Hero />
      <Box2 />
      <Projectshowcasebox/>
      <Capabilites />
      <Connect /> 
    </>
  );
}

export default App;
