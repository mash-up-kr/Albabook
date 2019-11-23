import React from 'react';
import { IoIosList } from 'react-icons/io';
import styled from 'styled-components';

const ListButton = styled.div`
  width: 30px;
  height: 30px;
  background: blue;
`;

const Hamburger = () => (
  <ListButton>
    <IoIosList />
  </ListButton>
);

export default Hamburger;
