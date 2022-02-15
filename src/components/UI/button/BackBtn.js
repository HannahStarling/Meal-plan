import React from 'react';
import { useHistory } from 'react-router-dom';

function BackBtn() {
  const history = useHistory();

  return (
    <button className='button button_type_back' onClick={() => history.goBack()}>
      ⟵ Go back
    </button>
  );
}

export default BackBtn;
