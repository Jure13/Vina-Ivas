import React from 'react';
import './Contact.css';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="contact-container">
      <h1 className="contact-title">
        {language === 'hr' ? 'Kontaktirajte nas:' : language === 'en' ? 'Contact Us:' : 'Kontaktieren Sie uns:'}
      </h1>

      <div className="contact-info">
        <div className="contact-person">
          <h2 className="contact-name">{language === 'hr' ? 'Ivica Antunović' : language === 'en' ? 'Ivica Antunović' : 'Ivica Antunović'}</h2>
          <p className="contact-phone">
            {language === 'hr'
              ? 'telefon: +385 915 484 394'
              : language === 'en'
              ? 'phone: +385 915 484 394'
              : 'Telefon: +385 915 484 394'}
          </p>
        </div>

        <div className="contact-person">
          <h2 className="contact-name">{language === 'hr' ? 'Jure Antunović' : language === 'en' ? 'Jure Antunović' : 'Jure Antunović'}</h2>
          <p className="contact-phone">
            {language === 'hr'
              ? 'telefon: +385 989 610 125'
              : language === 'en'
              ? 'phone: +385 989 610 125'
              : 'Telefon: +385 989 610 125'}
          </p>
        </div>
      </div>

      <div className="winery-address">
        <h3 className="address-title">
          {language === 'hr' ? 'Adresa' : language === 'en' ? 'Address' : 'Adresse'}
        </h3>
        <p className="real-address">Otrić-Seoci 117, Pojezerje 20342</p>
        <p className="email-address">{language === 'hr' ? 'Email: kontakt@vina-ivas.hr' : language === 'en' ? 'Email: kontakt@vina-ivas.hr' : 'E-Mail: kontakt@vina-ivas.hr'}</p>
      </div>
    </div>
  );
};

export default Contact;
