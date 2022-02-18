import styled, { css } from 'styled-components';

const categoryFontStyle = css`
  color: #ff9c00;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.4px;
`;

const resultFontStyle = css`
  padding-left: 10px;
  font-size: 14px;
  letter-spacing: -0.4px;
`;

export const ResultSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: solid 2px #ff9c00;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #ededed;
  }

  @media screen and (max-width: 640px) {
    border: none;
  }
`;

export const PillImg = styled.img`
  width: 60px;
  border-radius: 5px;
  background-color: #ededed;

  @media screen and (max-width: 640px) {
    background-color: white;
  }
`;

export const ProductInfo = styled.div`
  padding-left: 30px;
`;

export const CategoryInfoText = styled.div`
  display: flex;
  line-height: 25px;
`;

export const ProductCategory = styled.p`
  ${categoryFontStyle}

  @media screen and (max-width: 640px) {
  }
`;

export const ResultFont = styled.p`
  ${resultFontStyle}
`;
