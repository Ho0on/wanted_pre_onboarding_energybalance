import styled, { css } from 'styled-components';

const contentsFontsSize = css`
  font-size: 14px;
`;

const letterSpacing = css`
  letter-spacing: -0.4px;
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`;

export const MainBox = styled.div`
  width: 1240px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  @media screen and (max-width: 640px) {
    height: 60px;
  }
`;

export const Logo = styled.img`
  width: 105px;
  height: 30px;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    width: 88px;
    height: 25px;
  }
`;

export const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const Title = styled.div`
  margin-bottom: 50px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1.2px;
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    width: 600px;
  }
`;

export const SearchText = styled.div`
  ${contentsFontsSize}
  ${letterSpacing}
  margin-right: 20px;
  font-weight: 600;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;
export const SearchBar = styled.input`
  ${contentsFontsSize}
  width: 75%;
  height: 45px;
  padding: 0 15px;
  margin-right: 10px;
  border: solid 2px #ff9c00;
  border-radius: 5px;

  @media screen and (max-width: 640px) {
    height: 35px;
    margin-right: 5px;
  }
`;

export const SearchBtn = styled.button`
  ${letterSpacing}
  ${contentsFontsSize}
  width: 100px;
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: #ff9c00;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    width: 80px;
    height: 36px;
  }
`;

export const DetailSearchSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  margin-top: 30px;

  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
  }
`;

export const DetailSearchText = styled.div`
  ${contentsFontsSize}
  ${letterSpacing}
  display: flex;
  align-items: center;
  width: 100px;
  height: 45px;
  font-weight: 600;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const DetailSearchCategory = styled.div`
  ${contentsFontsSize}
  ${letterSpacing}
  display: flex;
  align-items: center;
  width: 120px;
  height: 45px;
  padding-left: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #ff9c00;
  color: white;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const DetailSearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;

  @media screen and (max-width: 640px) {
    border-radius: 5px;
  }
`;

export const DetailSearchContents = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 45px;
  padding: 0 10px;
  /* border: solid 2px #ff9c00; */
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #ededed;

  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
    margin-right: 2px;
    margin-left: 3px;
    padding: 0;
    width: 100%;
    height: 35px;
    border-radius: 5px;
  }
`;
