import React from 'react';
import styled from 'styled-components';
import { LoginButotn } from '../components';

const S = {
  Wrapper: styled.div`
    width:100%;
    height:100%;
  `,
};
const login = () => (
  <S.Wrapper>
    <LoginButotn />
  </S.Wrapper>
);
export default login;
