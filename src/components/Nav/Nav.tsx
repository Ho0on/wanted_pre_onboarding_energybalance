import React from 'react';
import * as S from './Nav.style';

import { BsList } from 'react-icons/bs';
import { GrSearch } from 'react-icons/gr';

function Header() {
  return (
    <S.NavSection>
      <S.NavLeft>
        <S.ListIcon>
          <BsList size="30" />
        </S.ListIcon>
        <S.ListText>분석&nbsp; 추천&nbsp; 비교</S.ListText>
      </S.NavLeft>
      <S.NavRight>
        <S.NavSearchBox>
          <S.NavSearchInput />
          <S.NavSearchIcon>
            <GrSearch size="16" color="#ff9c00" />
          </S.NavSearchIcon>
        </S.NavSearchBox>
        <S.Login>로그인</S.Login>
      </S.NavRight>
    </S.NavSection>
  );
}

export default Header;
