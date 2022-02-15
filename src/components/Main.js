import React from 'react';
import { Route, Switch } from 'react-router-dom';

function Main() {
  return (
    <main className='content'>
      <Switch>
        <Route exact path='/'>
          <section>Welcome to planing App!</section>
        </Route>
        <Route path='/recipes'>
          <section className='recipes'>Not any recipes yet!</section>
        </Route>
        <Route path='/newrecipe'>
          <section className='recipes'>Form coming soon...</section>
        </Route>
        <Route path='/calendar'>
          <section className='recipes'>Drag and drop avalible soon...</section>
        </Route>
        <Route path='*'>
          <section>404 Not found</section>
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
