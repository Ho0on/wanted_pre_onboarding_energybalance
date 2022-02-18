import styled, { css } from 'styled-components';

const navFontsSize = css`
  font-size: 16px;
`;

const letterSpacing = css`
  letter-spacing: -0.4px;
`;

export const NavSection = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  top: 0;
  padding-top: 6px;
  padding-bottom: 6px;
  border-bottom: solid 1px #dedede;
  background-color: white;
  z-index: 20;
`;
export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const ListIcon = styled.div`
  display: flex;
  margin-left: -4px;
  align-items: center;
  cursor: pointer;
`;
export const ListText = styled.div`
  ${navFontsSize}
  ${letterSpacing}
  margin-left: 20px;
  font-weight: 600;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
`;
export const NavSearchBox = styled.div`
  position: relative;
`;

export const NavSearchInput = styled.input`
  width: 180px;
  height: 28px;
  padding: 0 35px 0 15px;
  background-color: #ededed;
  border-style: none;
  border-radius: 20px;
  font-size: 16px;
`;
export const NavSearchIcon = styled.div`
  position: absolute;
  bottom: 4px;
  right: 10px;
  cursor: pointer;
`;

export const Login = styled.div`
  ${navFontsSize}
  ${letterSpacing}
  font-weight: 600;
  padding-left: 20px;
  cursor: pointer;
`;
