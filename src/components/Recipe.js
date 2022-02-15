import React from 'react';

const Recipe = ({ title, ingredients, img, method }) => {
  return (
    <article className='recipe'>
      <img className='recipe__img' alt={title} src={img} />
      <h3 className='recipe__title'>{title}</h3>
      <ul className='recipe__ingredients'>
         <h4 className='recipe__ingredients-subtitle'>Ingredients</h4>
      </ul>
      <h5 className='recipe__method-subtitle'>Method</h5>
      <p className='recipe__method'>{method}</p>
    </article>
  );
};

export default Recipe;
