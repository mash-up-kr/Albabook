/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Hamburger, BackButton } from '../common';

const Wrapper = styled.div`
  /* 배치 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; /* 세로 정렬 */
  /* 색 */
  color: white;
  height: 5rem;
	background: ${oc.teal[6]};
  border-bottom: 1px solid ${oc.teal[8]};
  /* 폰트 */
  font-weight: 500;
  font-size: 1.5rem;
`;

const Header = () => (
  <Wrapper>
    <Hamburger />
    헤더
    <BackButton />
  </Wrapper>

);

export default Header;
