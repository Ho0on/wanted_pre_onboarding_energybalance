import styled, { css } from 'styled-components';

const letterSpacing = css`
  letter-spacing: -0.4px;
`;

export const BoxSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: '';
  }
`;

export const SelectboxSection = styled.select`
  ${letterSpacing}
  width: 550px;
  height: 30px;
  margin-left: 9px;
  padding: 0 5px;
  border: none;
  border-radius: 5px;
  background-color: #ededed;
  color: black;
  font-size: 14px;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    width: 530px;
    margin: 0;
    padding: 0;
  }
`;
