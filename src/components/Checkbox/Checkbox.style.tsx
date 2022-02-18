import styled, { css } from 'styled-components';

const letterSpacing = css`
  letter-spacing: -0.4px;
`;

export const BoxSection = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

export const BrandName = styled.div`
  ${letterSpacing}
  font-size: 14px;
`;
