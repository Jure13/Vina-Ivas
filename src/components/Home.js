import React from 'react';
import './Home.css';
import { useLanguage } from '../LanguageContext';

const Home = () => {
  const { language } = useLanguage();

  return (
    <div className="home-container">
      {language === 'hr' && (
        <h1 className="home-title">Vina Ivas</h1>
      )}
      {language === 'en' && (
        <h1 className="home-title">Ivas Wines</h1>
      )}
      {language === 'de' && (
        <h1 className="home-title">die Weine Ivas</h1>
      )}
    </div>
  );
}

export default Home;
