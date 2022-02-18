import React from 'react';
import * as S from './Nav.style';

import { BsList } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

function Header() {
  return (
    <S.NavSection>
      <S.NavLeft>
        <S.ListIcon>
          <BsList size="30" />
        </S.ListIcon>
        <S.ListText>분석</S.ListText>
        <S.ListText>추천</S.ListText>
        <S.ListText>비교</S.ListText>
      </S.NavLeft>
      <S.NavRight>
        <S.NavSearchBox>
          <S.NavSearchInput />
          <S.NavSearchIcon>
            <BiSearch size="16" color="white" />
          </S.NavSearchIcon>
        </S.NavSearchBox>
        <S.Login>로그인</S.Login>
      </S.NavRight>
    </S.NavSection>
  );
}

export default Header;
