import React from 'react';
import { IoIosList } from 'react-icons/io';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ListButton = styled.div`
  width: 30px;
  height: 30px;
  background: purple;
`;

const Hamburger = () => (
  <Link to="/main">
    <ListButton>
      <IoIosList />
    </ListButton>
  </Link>


);

export default Hamburger;
