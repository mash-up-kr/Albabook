import React from 'react';
import styled from 'styled-components';
import { Hamburger, BackButton } from '../common';

const HeaderContent = styled.div`
  background: red;
  color: white;
  text-align: center;
`;

const Header = () => (
  <HeaderContent>
    <Hamburger />
    헤더
    <BackButton />
  </HeaderContent>

);

export default Header;
