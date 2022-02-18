import React, { useEffect, useState } from 'react';
import {
  formattingString,
  orderingData,
  filteringBrandList,
} from '../../shared/utils';
import Idata from '../../shared/types';
import Selectbox from '../../components/Checkbox/Selectbox';
import SearchResult from '../../components/SearchResult/SearchResult';
import * as S from './Main.style';

const Main = () => {
  const [data, setData] = useState<Idata[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [resultData, setResultData] = useState<Idata[]>([]);

  const getData = async () => {
    const json = await (await fetch('/data/mockData.json')).json();
    setData(json.result);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const newArr = [...data];
    newArr.map((el: Idata) => {
      return (el.both = el.productName + el.brand);
    });
    setResultData(newArr);
  }, [data]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const onClickSubmit = () => {
    const filteredData = data.filter(product => {
      const newProductName = formattingString(product.both);
      const newInput = formattingString(searchInput);

      return newProductName.includes(newInput);
    });

    setResultData(filteredData);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchInput.length > 0 && e.key === 'Enter') {
      onClickSubmit();
    }
  };

  const brandListData = filteringBrandList(resultData);

  return (
    <S.MainSection>
      <S.MainBox>
        <S.LogoSection>
          <S.Logo src="/images/logo.png" />
        </S.LogoSection>
        <S.ContentsSection>
          <S.Title>상품검색</S.Title>
          <S.SearchSection>
            <S.SearchText>검색</S.SearchText>
            <S.SearchBar
              type="text"
              onChange={handleInput}
              onKeyPress={handleEnterPress}
              placeholder="상품명을 입력해주세요."
            />
            <S.SearchBtn onClick={onClickSubmit}>검색하기</S.SearchBtn>
          </S.SearchSection>
          {resultData.length !== data.length && (
            <S.DetailSearchSection>
              <S.DetailSearchText>상세검색</S.DetailSearchText>
              <S.DetailSearchBox>
                <S.DetailSearchCategory>브랜드</S.DetailSearchCategory>
                <S.DetailSearchContents>
                  <Selectbox
                    data={brandListData}
                    resultData={resultData}
                    setResultData={setResultData}
                  />
                </S.DetailSearchContents>
              </S.DetailSearchBox>
            </S.DetailSearchSection>
          )}
        </S.ContentsSection>
        {resultData.length !== data.length ? (
          orderingData(resultData).map((el: Idata, idx: number) => {
            return (
              <SearchResult
                key={idx}
                productName={el.productName}
                brand={el.brand}
                input={searchInput}
              />
            );
          })
        ) : (
          <S.TextWrapper>상품을 검색해주세요.</S.TextWrapper>
        )}
      </S.MainBox>
    </S.MainSection>
  );
};

export default Main;
