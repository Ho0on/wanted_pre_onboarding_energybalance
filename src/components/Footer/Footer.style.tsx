import styled, { css } from 'styled-components';

export const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1050px;
  padding: 0px 20px;
  background-color: white;
  border-top: solid 1px #dedede;

  @media screen and (max-width: 640px) {
    margin-top: 40px;
  }
`;

export const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 40px;
`;

export const GuideSection = styled.div``;
