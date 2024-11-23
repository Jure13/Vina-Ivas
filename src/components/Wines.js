import React from 'react';
import './Wines.css';
import { useLanguage } from '../LanguageContext';
import boc1 from './slikeKomponenti/boc1.jpg';
import boc2 from './slikeKomponenti/boc2.jpg';
import boc3 from './slikeKomponenti/boc3.jpg';
import boc4 from './slikeKomponenti/boc4.jpg';

const Wines = () => {
  const { language } = useLanguage();

  const wineData = [
    {
      title: {
        hr: 'Crno Vino \'Ivas\'',
        en: 'Red wine \'Ivas\'',
        de: 'Rotwein \'Ivas\'',
      },
      description: {
        hr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        de: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus (German).',
      },
      altText: 'Slika 1',
      image: boc1,
    },
    {
      title: {
        hr: 'Chardonnay \'Ivas\'',
        en: 'Chardonnay \'Ivas\'',
        de: 'Chardonnay \'Ivas\'',
      },
      description: {
        hr: 'Consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.',
        en: 'Consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.',
        de: 'Consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor (German).',
      },
      altText: 'Slika 2',
      image: boc2,
    },
    {
      title: {
        hr: 'Maraština \'Ivas\'',
        en: 'Malvasia Bianca Lunga \'Ivas\'',
        de: 'Malvasia Bianca Lunga \'Ivas\'',
      },
      description: {
        hr: 'Dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        en: 'Dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        de: 'Dignissim sit amet, adipiscing nec, ultricies sed, dolor (German).',
      },
      altText: 'Slika 3',
      image: boc3,
    },
    {
      title: {
        hr: 'Rosé \'Lijepa Plavka\'',
        en: 'Rosé wine \'Lijepa Plavka\'',
        de: 'Roséwein \'Lijepa Plavka\'',
      },
      description: {
        hr: 'Cras elementum ultrices diam. Maecenas ligula massa, varius a.',
        en: 'Cras elementum ultrices diam. Maecenas ligula massa, varius a.',
        de: 'Cras elementum ultrices diam. Maecenas ligula massa, varius a (German).',
      },
      altText: 'Slika 4',
      image: boc4,
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