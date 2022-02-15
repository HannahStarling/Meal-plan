import React, { useState } from 'react';

function RecipeForm(props) {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', img: '', method: '' });

  function addRecipe(e) {
    e.preventDefault();
    props.create({
      ...recipe,
      id: Date.now(),
    });
    setRecipe({ title: '', ingredients: '', img: '', method: '' });
  }

  return (
    <form className='form'>
      <h2 className='form__title'>{props.title}</h2>
      <fieldset className='form__input-container'>
        <input
          name='title'
          type='text'
          onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
          value={recipe.title}
          className='form__input'
          placeholder='title'
        />
        <input
          name='ingredients'
          type='text'
          onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
          value={recipe.ingredients}
          className='form__input'
          placeholder='ingredients'
        />
        <input
          name='recipe-photo'
          type='url'
          onChange={(e) => setRecipe({ ...recipe, img: e.target.value })}
          value={recipe.img}
          className='form__input'
          placeholder='link on image'
        />
      </fieldset>
      <fieldset className='form__input-container'>
        <textarea
          name='method'
          onChange={(e) => setRecipe({ ...recipe, method: e.target.value })}
          value={recipe.method}
          className='form__input form__input_type_textarea'
          placeholder='method'
        />
      </fieldset>
      <button onClick={addRecipe} className='button form__btn form__btn_action_submit' type='submit'>
        {props.buttonText}
      </button>
    </form>
  );
}

export default RecipeForm;
