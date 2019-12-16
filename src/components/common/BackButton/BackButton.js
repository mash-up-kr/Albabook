import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <button type="button" onClick={handleClick}>
      <IoIosArrowBack size="5rem" />
    </button>
  );
};

export default BackButton;
