import React from 'react';
import './Home.css';
import { useLanguage } from '../LanguageContext';

const Home = ({backgroundImageIndex}) => {
  const { language } = useLanguage();

  const homeStyles = {
    1: {
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
      color: '#520e05',
      borderColor: '#520e05',  
    },
    2: {
      background: 'rgba(295, 207, 10, 0.6)',
      color: 'black',
      borderColor: 'black',
    },
    3: {
      background: 'rgba(144, 238, 144, 0.7)',
      color: 'white',
      borderColor: 'white',
    },
    4: {
      background: 'rgba(100, 90, 110, 0.5)',
      color: 'white',
      borderColor: 'white',
    },
  };

  const currentStyles = homeStyles[backgroundImageIndex] || {};

  return (
    <div className="home-container">
      {language === 'hr' && (
        <h1 style={currentStyles} className="home-title">Vina Ivas</h1>
      )}
      {language === 'en' && (
        <h1 style={currentStyles} className="home-title">Ivas Wines</h1>
      )}
      {language === 'de' && (
        <h1 style={currentStyles} className="home-title">die Weine Ivas</h1>
      )}
    </div>
  );
}

export default Home;
