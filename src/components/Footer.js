import React from 'react';
import './Footer.css';

const Footer = ({ backgroundImageIndex }) => {
  const colors = {
    1: {
      background: 'rgba(0, 100, 0, 0.15)',
      color: 'orange',
    },
    2: {
      background: 'rgba(295, 207, 10, 0.3)',
      color: 'black',
    },
    3: {
      background: 'rgba(144, 238, 144, 0.5)',
      color: 'white',
    },
    4: {
      background: 'rgba(100, 90, 110, 0.8)',
      color: 'white',
    },
  };
  
  const currentStyles = colors[backgroundImageIndex] || {};

  return (
    <footer style={currentStyles} className="footer">
      <h2 className="footerTitle">
        &copy; 2023, Sva prava pridržana! <br />
        <strong>
          <a href="https://github.com/Jure13" target="_blank" rel="noopener noreferrer" style={currentStyles}>
            Jure
          </a>{" "}
          <a href="https://www.linkedin.com/in/jure-antunovi%C4%87-049758200/" target="_blank" rel="noopener noreferrer" style={currentStyles}>
            Antunović
          </a>
        </strong>
      </h2>
    </footer>
  );
}

export default Footer;
