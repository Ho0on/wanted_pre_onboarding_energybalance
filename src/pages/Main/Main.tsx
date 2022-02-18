import React, { useEffect, useState } from 'react';
import * as S from './Main.style';

import Nav from '../../components/Nav/Nav';
import Checkbox from '../../components/Checkbox/Checkbox';

function Main() {
  const [data, setData] = useState();

  const getData = async () => {
    const json = await (await fetch('/data/mockData.json')).json();
    setData(json.result);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <S.MainSection>
      <S.MainBox>
        <S.LogoSection>
          <S.Logo src="/images/logo.png" />
        </S.LogoSection>
        <Nav />
        <S.ContentsSection>
          <S.Title>상품검색</S.Title>
          <S.SearchSection>
            <S.SearchText>검색조건</S.SearchText>
            <S.SearchBar />
            <S.SearchBtn>검색하기</S.SearchBtn>
          </S.SearchSection>
          <S.DetailSearchSection>
            <S.DetailSearchText>상세검색</S.DetailSearchText>
            <S.DetailSearchBox>
              <S.DetailSearchCategory>브랜드</S.DetailSearchCategory>
              <S.DetailSearchContents>
                <Checkbox />
              </S.DetailSearchContents>
            </S.DetailSearchBox>
          </S.DetailSearchSection>
        </S.ContentsSection>
      </S.MainBox>
    </S.MainSection>
  );
}

export default Main;
