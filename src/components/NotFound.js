import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className='not-found'>
      <p className='not-found__note'>
        Page not found. For return press{' '}
        <Link className='not-found__link' to='/'>
          home
        </Link>
      </p>
    </section>
  );
}

export default NotFound;
