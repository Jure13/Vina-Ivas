import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useLanguage } from '../LanguageContext';
import logo from './slikeKomponenti/logo.png';

const Header = ({ backgroundImageIndex }) => {
  const { language, toggleLanguage } = useLanguage();

  const headerStyles = {
    1: {
      backgroundColor: 'rgba(255, 165, 0, 0.3)',
      color: 'dark-crimson',
      
    },
    2: {
      background: 'rgba(295, 207, 10, 0.3)',
      color: 'dark-crimson',
    },
    3: {
      background: 'rgba(144, 238, 144, 0.3)',
      color: 'dark-crimson',
    },
    4: {
      background: 'rgba(100, 90, 110, 0.3)',
      color: 'dark-crimson',
    },
  };

  const currentStyles = headerStyles[backgroundImageIndex] || {};

  return (
    <header style={currentStyles} className="header-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              {language === 'hr' ? 'Početna' : language === 'en' ? 'Home' : 'Startseite'}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/vineyard" className="nav-link">
              {language === 'hr' ? 'Vinograd' : language === 'en' ? 'Vineyard' : 'Weinberg'}
            </Link>
          </li>
          <li>
            <img src={logo} alt="Nemoguće dohvatiti sliku!" className="logo" />
          </li>
          <li className="nav-item">
            <Link to="/wines" className="nav-link">
              {language === 'hr' ? 'Vina' : language === 'en' ? 'Wines' : 'Weine'}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              {language === 'hr' ? 'Kontakt' : language === 'en' ? 'Contact' : 'Kontakt'}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="language-buttons">
        <button
          className={`language-button ${language === 'hr' ? 'active' : ''}`}
          onClick={() => toggleLanguage('hr')}
        >
          HR
        </button>
        <button
          className={`language-button ${language === 'en' ? 'active' : ''}`}
          onClick={() => toggleLanguage('en')}
        >
          EN
        </button>
        <button
          className={`language-button ${language === 'de' ? 'active' : ''}`}
          onClick={() => toggleLanguage('de')}
        >
          DE
        </button>
      </div>
    </header>
  );
}

export default Header;