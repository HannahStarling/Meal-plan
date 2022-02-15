import React from 'react';
import Logo from './Logo';
import Menu from './UI/nav/Menu';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <h1 className='content__title'>Meal&nbsp;planning</h1>
      <Menu className='menu__item' />
    </header>
  );
};

export default Header;
