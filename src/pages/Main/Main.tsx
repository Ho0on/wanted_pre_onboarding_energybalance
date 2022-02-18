import React, { useEffect, useState } from 'react';
import {
  formattingString,
  orderingData,
  filteringBrandList,
} from '../../utils';
import * as S from './Main.style';

export interface Idata {
  id: number;
  key: string;
  productName: string;
  brand: string;
  both: object;
  name: string;
}

function Main() {
  const [data, setData] = useState([]);
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
  const [resultData, setResultData] = useState<Idata[]>([]);

  const getData = async () => {
    const json = await (await fetch('/data/mockData.json')).json();
    setData(json.result);
  };

  useEffect(() => {
    getData();
  }, []);
  const filteringBrand = data.filter((el: Idata) =>
    Object.keys(el).includes('brand')
  );

  let newArr: any = [];

  filteringBrand.forEach((el: Idata) => {
    newArr.push({ name: `${el.productName}${el.brand}` });
  });

  useEffect(() => {
    getData();
  }, []);

  console.log(newArr);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const onClickSubmit = () => {
    const filteredData = data.filter(product => {
      const newProductName = formattingString(product.productName);
      const newBrand = formattingString(product.brand);
      const newInput = formattingString(searchInput);

      return newProductName.includes(newInput) || newBrand.includes(newInput);
    });
    setResultData(filteredData);
  };

  const brandListData = filteringBrandList(data);

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
          <S.DetailSearchSection>
            <S.DetailSearchText>상세검색</S.DetailSearchText>
            <S.DetailSearchBox>
              <S.DetailSearchCategory>브랜드</S.DetailSearchCategory>
              <S.DetailSearchContents>
                <Selectbox data={brandListData} />
              </S.DetailSearchContents>
            </S.DetailSearchBox>
          </S.DetailSearchSection>
        </S.ContentsSection>
        {(resultData.length === 0
          ? orderingData(data)
          : orderingData(resultData)
        ).map((el: Idata, idx: number) => {
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
