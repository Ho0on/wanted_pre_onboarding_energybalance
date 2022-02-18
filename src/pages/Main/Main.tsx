import React, { useEffect, useState } from 'react';
import { formattingString, orderingData } from '../../utils';
import * as S from './Main.style';

import Nav from '../../components/Nav/Nav';
import Selectbox from '../../components/Checkbox/Selectbox';
import SearchResult from '../../components/SearchResult/SearchResult';

interface Idata {
  productName: string;
  brand: string;
}

function Main() {
  const [data, setData] = useState<Idata[]>([]);
  const [searchInput, setSearchInput] = useState('');

  const getData = async () => {
    const json = await (await fetch('/data/mockData.json')).json();
    setData(json.result);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const filteredData = data.filter(product => {
    const newProductName = formattingString(product.productName);
    const newBrand = formattingString(product.brand);

    const newInput = formattingString(searchInput);

    return newProductName.includes(newInput) || newBrand.includes(newInput);
  });

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
            <S.SearchBar type="text" onChange={handleInput} />
            <S.SearchBtn>검색하기</S.SearchBtn>
          </S.SearchSection>
          <S.DetailSearchSection>
            <S.DetailSearchText>상세검색</S.DetailSearchText>
            <S.DetailSearchBox>
              <S.DetailSearchCategory>브랜드</S.DetailSearchCategory>
              <S.DetailSearchContents>
                <Selectbox />
              </S.DetailSearchContents>
            </S.DetailSearchBox>
          </S.DetailSearchSection>
        </S.ContentsSection>
        {data &&
          orderingData(filteredData).map((el: Idata, idx: number) => {
            return (
              <SearchResult
                key={idx}
                productName={el.productName}
                brand={el.brand}
                input={searchInput}
              />
            );
          })}
      </S.MainBox>
    </S.MainSection>
  );
}

export default Main;
