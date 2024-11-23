import React from 'react';
import './Vineyard.css';
import { useLanguage } from '../LanguageContext';
import vinog1 from './slikeKomponenti/vinog1.jpg';
import vinog2 from './slikeKomponenti/vinog2.jpg';
import vinogvid from './slikeKomponenti/vinogvid.mp4';
import gro6 from './slikeKomponenti/gro6.jpg';
import gro7 from './slikeKomponenti/gro7.jpg';
import gro8 from './slikeKomponenti/gro8.jpg';

const Vineyard = () => {
  const { language } = useLanguage();

  return (
    <div className="vineyard-container">
      <div className="vineyard-content">
        <h1 className="vineyard-title">
          {language === 'hr'
            ? 'Vinova loza'
            : language === 'en'
            ? 'Grape vine'
            : 'die Weinrebe'}
        </h1>
        <div className="vineyard-media">
          <img src={vinog1} alt="Loza 1" className="vineyard-image" />
          <img src={vinog2} alt="Loza 2" className="vineyard-image" />
          <video controls className="vineyard-video">
            <source src={vinogvid} type="video/mp4" />
            {language === 'hr'
              ? 'Vaš preglednik ne podržava ovaj video.'
              : language === 'en'
              ? 'Your browser does not support the video tag.'
              : 'Ihr Browser unterstützt das Video-Tag nicht.'}
          </video>
        </div>
        <div className="vineyard-media">
          <img src={gro6} alt="Loza 1" className="vineyard-image" />
          <img src={gro7} alt="Loza 2" className="vineyard-image" />
          <img src={gro8} alt="Loza 2" className="vineyard-image" />
        </div>
      </div>
    </div>
  );
};

export default Vineyard;