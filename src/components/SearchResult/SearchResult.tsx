import React from 'react';
import * as S from './SearchResult.style';

interface SearchResultTypes {
  productName: any;
  brand: any;
}

function SearchResult({ productName, brand }: SearchResultTypes) {
  return (
    <S.ResultSection>
      <S.PillImg src="/images/pill-orange.png" />
      <S.ProductInfo>
        <S.CategoryInfoText>
          <S.ProductCategory>제품명</S.ProductCategory>
          <S.ResultFont>{productName}</S.ResultFont>
        </S.CategoryInfoText>
        <S.CategoryInfoText>
          <S.ProductCategory>브랜드</S.ProductCategory>
          <S.ResultFont>{brand}</S.ResultFont>
        </S.CategoryInfoText>
      </S.ProductInfo>
    </S.ResultSection>
  );
}

export default SearchResult;
