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
        hr: 'Crno vino bogatog okusa, mekanih tanina i voćnih nota.',
        en: 'Red wine with a rich taste, soft tannins, and fruity notes.',
        de: 'Rotwein mit reichhaltigem Geschmack, weichen Tanninen und fruchtigen Noten.',
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
        hr: 'Čuvena sorta bijelog vina, punog tijela i blagog voćnog okusa.',
        en: 'The famous white wine variety, full-bodied with a mild fruity taste.',
        de: 'Die berühmte weiße Rebsorte, vollmundig mit einem milden fruchtigen Geschmack.',
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
        hr: 'Aromatično bijelo vino cvjetnog mirisa, laganog i osvježavajućeg okusa.',
        en: 'Aromatic white wine with a floral aroma, light and refreshing taste.',
        de: 'Aromatischer Weißwein mit blumigem Duft, leichtem und erfrischendem Geschmack.',
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
        hr: 'Vino dobiveno od sorte \'Plavac\', lagane voćne svježine, savršeno za uživanje u toplim danima.',
        en: 'Wine made from the \'Plavac\' variety, with a light fruity freshness, perfect for enjoying on warm days.',
        de: 'Wein aus der Sorte \'Plavac\', mit einer leichten fruchtigen Frische, perfekt für warme Tage.',
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