import React from 'react';
import * as S from './SearchResult.style';

import Highlighter from 'react-highlight-words';

interface SearchResultTypes {
  productName: string;
  brand: string;
  input: string;
}

function SearchResult({ productName, brand, input }: SearchResultTypes) {
  return (
    <S.ResultSection>
      <S.PillImg src="/images/pill-orange.png" />
      <S.ProductInfo>
        <S.CategoryInfoText>
          <S.ProductCategory>제품명</S.ProductCategory>
          <S.ResultFont>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[input]}
              autoEscape={true}
              textToHighlight={productName}
            />
          </S.ResultFont>
        </S.CategoryInfoText>
        <S.CategoryInfoText>
          <S.ProductCategory>브랜드</S.ProductCategory>
          <S.ResultFont>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[input]}
              autoEscape={true}
              textToHighlight={brand}
            />
          </S.ResultFont>
        </S.CategoryInfoText>
      </S.ProductInfo>
    </S.ResultSection>
  );
}

export default SearchResult;
