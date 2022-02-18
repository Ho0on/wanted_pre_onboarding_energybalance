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
  margin: 0 auto;
  padding: 0px 20px;
  background-color: white;

  /* @media screen and (max-width: 640px) {
    width: 640px;
    background-color: red;
  } */
`;

export const MainBox = styled.div`
  max-width: 1240px;
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
export const Logo = styled.img`
  width: 105px;
  height: 30px;
  cursor: pointer;
`;

export const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 200px;
`;
export const Title = styled.div`
  margin-bottom: 50px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1.2px;
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
`;
export const SearchText = styled.div`
  ${contentsFontsSize}
  ${letterSpacing}
  width: 100px;
  font-weight: 600;
`;
export const SearchBar = styled.input`
  ${contentsFontsSize}
  width: 75%;
  height: 45px;
  padding: 0 15px;
  margin-right: 10px;
  border: solid 2px #ff9c00;
  border-radius: 5px;
`;

export const SearchBtn = styled.button`
  ${letterSpacing}
  ${contentsFontsSize}
  width: 100px;
  height: 48px;
  border: none;
  border-radius: 5px;
  background-color: #ff9c00;
  color: white;
  cursor: pointer;
`;

export const DetailSearchSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  margin-top: 30px;
`;
export const DetailSearchText = styled.div`
  ${contentsFontsSize}
  ${letterSpacing}
  display: flex;
  align-items: center;
  width: 100px;
  height: 45px;
  font-weight: 600;
`;

export const DetailSearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
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
`;
