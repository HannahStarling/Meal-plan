import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import RecipeForm from './RecipeForm';

function Main() {
  const [recipes, setRecipes] = useState([]);

  function createRecipe(recipe) {
    setRecipes([...recipes, recipe]);
  }

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
          <RecipeForm create={createRecipe} title='Add recipe:' buttonText='CREATE' />
        </Route>
        <Route path='/calendar'>
          <section className='recipes'>Drag and drop avalible soon...</section>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
