import React from 'react';
import './Wines.css';
import { useLanguage } from '../LanguageContext';
import temp1 from './slikeKomponenti/temp1.jpg';

const Wines = () => {
  const { language } = useLanguage();

  const wineData = [
    {
      title: {
        hr: 'Vino 1',
        en: 'Wine 1',
        de: 'Wein 1',
      },
      description: {
        hr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        de: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus (German).',
      },
      price: '$19.99',
      altText: 'Slika 1',
      image: temp1,
    },
    {
      title: {
        hr: 'Vino 2',
        en: 'Wine 2',
        de: 'Wein 2',
      },
      description: {
        hr: 'Consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.',
        en: 'Consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.',
        de: 'Consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor (German).',
      },
      price: '$24.99',
      altText: 'Slika 2',
      image: temp1,
    },
    {
      title: {
        hr: 'Vino 3',
        en: 'Wine 3',
        de: temp1,
      },
      description: {
        hr: 'Dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        en: 'Dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        de: 'Dignissim sit amet, adipiscing nec, ultricies sed, dolor (German).',
      },
      price: '$29.99',
      altText: 'Slika 3',
      image: temp1,
    },
    {
      title: {
        hr: 'Vino 4',
        en: 'Wine 4',
        de: 'Wein 4',
      },
      description: {
        hr: 'Cras elementum ultrices diam. Maecenas ligula massa, varius a.',
        en: 'Cras elementum ultrices diam. Maecenas ligula massa, varius a.',
        de: 'Cras elementum ultrices diam. Maecenas ligula massa, varius a (German).',
      },
      price: '$34.99',
      altText: 'Slika 4',
      image: temp1,
    },
    {
      title: {
        hr: 'Vino 5',
        en: 'Wine 5',
        de: 'Wein 5',
      },
      description: {
        hr: 'Semper congue, euismod non, mi.',
        en: 'Semper congue, euismod non, mi.',
        de: 'Semper congue, euismod non, mi (German).',
      },
      price: '$39.99',
      altText: 'Slika 5',
      image: temp1,
    },
  ];

  return (
    <div className="wines-container">
      {wineData.map((wine, index) => (
        <div className="wine-item" key={index}>
          <h2 className="wine-title">{wine.title[language]}</h2>
          <img src={wine.image} alt={wine.altText} className="wine-image" />
          <p className="wine-description">{wine.description[language]}</p>
          <p className="wine-price">{wine.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Wines;