import React from 'react';
import './Vineyard.css';
import { useLanguage } from '../LanguageContext';

const Vineyard = () => {
  const { language } = useLanguage();

  return (
    <div className="vineyard-container">
      <div className="vineyard-content">
        <h1 className="vineyard-title">
          {language === 'hr'
            ? 'Vinograd'
            : language === 'en'
            ? 'Vineyard'
            : 'Weinberg'}
        </h1>
        <h2 className="vineyard-subtitle">
          {language === 'hr'
            ? 'Naslov na hrvatskom'
            : language === 'en'
            ? 'Subtitle in English'
            : 'Untertitel auf Deutsch'}
        </h2>
        <p className="vineyard-text">
          {language === 'hr'
            ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
            : language === 'en'
            ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'}
        </p>
      </div>
    </div>
  );
};

export default Vineyard;