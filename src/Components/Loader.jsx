import React from 'react';
import Src from '../Components/ms1.png';
import Ink from '../assets/ink_lv2.gif'
import '../Components/loader.css';
function Loader() {
  return (
    <>
    <div className="banner">
  <div className="content">
    <div className="title">
      <img className="Load-logo" src={Src} alt="Loading" />
    </div>
    <img className="background-gif" src={Ink} alt="Background" />
  </div>
</div>

    </>
  )
}

export default Loader