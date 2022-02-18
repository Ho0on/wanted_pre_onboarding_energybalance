import React, { useEffect, useState } from 'react';
import {
  formattingString,
  orderingData,
  filteringBrandList,
} from '../../shared/utils';
import Idata from '../../shared/types';
import Nav from '../../components/Nav/Nav';
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
    // console.log(brandFilteredData);

    setResultData(filteredData);
  };

  const brandListData = filteringBrandList(resultData);

  // console.log(resultData);

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
        {orderingData(resultData).map((el: Idata, idx: number) => {
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
};

export default Main;
