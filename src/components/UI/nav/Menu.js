import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu({ className }) {
  return (
    <nav className='menu'>
      <NavLink exact to='/' className={className} activeClassName={`${className}_current`}>
        about
      </NavLink>
      <NavLink to='/recipes' className={className} activeClassName={`${className}_current`}>
        recipes
      </NavLink>
      <NavLink to='/shoppinglist' className={className} activeClassName={`${className}_current`}>
        shopping&nbsp;list
      </NavLink>
      <NavLink to='/calendar' className={className} activeClassName={`${className}_current`}>
        calendar
      </NavLink>
      <NavLink to='/newrecipe' className={className} activeClassName={`${className}_current`}>
        new&nbsp;recipe
      </NavLink>
    </nav>
  );
}

export default Menu;
