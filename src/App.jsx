import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './Components/Loader';

function App() {
  const [loading, setLoading] = useState(true); // State to track loader visibility

  useEffect(() => {
    // Simulate a loading duration
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 3 seconds
    }, 6000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    // Show only the loader while loading is true
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

