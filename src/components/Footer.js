import React from 'react';
import BackBtn from './UI/button/BackBtn';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>&copy; {new Date().getFullYear()} Hannah</p>
      <BackBtn />
    </footer>
  );
};

export default Footer;
