import React from 'react';
import { IoIosList } from 'react-icons/io';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListButton = styled.div`
  width: 5rem;
  height: 5rem;
  color : white;
`;


const Hamburger = () => (
  <Link to="/main">
    <ListButton>
      <IoIosList size="5rem" />
    </ListButton>
  </Link>


);

export default Hamburger;
