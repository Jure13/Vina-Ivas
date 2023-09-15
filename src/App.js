import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Vineyard from "./components/Vineyard";
import Wines from "./components/Wines";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LanguageProvider } from './LanguageContext';

const App = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex % 4) + 1);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [backgroundImageIndex]);
  // console.log(backgroundImageIndex);

  useEffect(() => {
    document.body.className = `image-${backgroundImageIndex}`;
  }, [backgroundImageIndex]);

  return (
    <LanguageProvider>
      <div className="App">
        <Router>
        <Header backgroundImageIndex={backgroundImageIndex} />
          <div>
            <Routes>
              <Route path="/" element={<Home backgroundImageIndex={backgroundImageIndex} />} />
              <Route path="/vineyard" element={<Vineyard />} />
              <Route path="/wines" element={<Wines />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer backgroundImageIndex={backgroundImageIndex} />
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
