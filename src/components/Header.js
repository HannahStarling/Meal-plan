import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <h1 className='content__title'>Meal&nbsp;planning</h1>
    </header>
  );
};

export default Header;
