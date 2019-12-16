import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from '../../lib/style-utils';

const Wrapper = styled.div`
    /* width: 100%; */
    width: 700px;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 1rem;
    background: black; /* 테스트용 색상, 추후 지워짐 */

     /* 모바일 크기 */
     ${media.mobile`
        width: 100%;    
    `}
`;

const Container = () => (
  <Wrapper>
    <h1>Container</h1>
  </Wrapper>
);

export default Container;
