import React from 'react';
import Hero from './Hero';
import Box2 from './Box2';
import Capabilites from './Capabilites';
import Connect from './Connect';
import Projectshowcasebox from './Projectshowcasebox';
import Nav2 from './Nav2';

function Home() {
  return (
    <>
      {/* Background Animation */}
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

      {/* Navigation */}
      <Nav2 />

      {/* Sections */}
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Box2 />
      </div>
      <div id="projects">
        <Projectshowcasebox />
      </div>
      <div id="capabilities">
        <Capabilites />
      </div>
      <div id="contact">
        <Connect />
      </div>
    </>
  );
}

export default Home;
