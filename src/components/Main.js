import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { recipesData } from '../utils/data';
import NotFound from './NotFound';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';

function Main() {
  const [recipes, setRecipes] = useState([...recipesData]);

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
          <section className='recipes'>
            {recipes.map(({ id, ...recipe }) => (
              <Recipe key={id} {...recipe} />
            ))}
          </section>
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
