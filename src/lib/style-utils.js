/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
        @media (max-width: 768px) {
            ${css(...args)}
        }
    `,
};
