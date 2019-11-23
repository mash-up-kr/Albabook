import React from 'react';
import styled from 'styled-components';
import { Hamburger } from '../common';

const HeaderContent = styled.div`
  background: red;
  color: white;
  text-align: center;
`;


const Header = () => (
  <HeaderContent>
    <Hamburger />
    헤더
  </HeaderContent>
);

export default Header;
