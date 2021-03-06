import React from 'react';

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-around pt-3">
      <p className="mx-3 mb-0">
        Created by{' '}
        <a
          href="https://github.com/sandra-lewis"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sandra Rebecca Lewis
        </a>
      </p>
      <p>
        Data sourced from{' '}
        <a href="https://disease.sh/" target="_blank" rel="noopener noreferrer">
          disease.sh
        </a>
      </p>
    </footer>
  );
};

export default Footer;
