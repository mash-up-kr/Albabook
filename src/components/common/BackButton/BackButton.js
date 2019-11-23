import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BackButton = () => (
  <div>
    <Link to="/">
      <IoIosArrowBack />
    </Link>
  </div>
);

export default BackButton;
