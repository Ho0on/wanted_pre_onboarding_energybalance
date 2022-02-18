import React from 'react';
import { ISelectProps } from '../../shared/types';
import * as S from './Selectbox.style';

function Selectbox({ data, resultData, setResultData }: ISelectProps) {
  const handleSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const brandFilteredData = resultData.filter(product =>
      product.brand.includes(e.target.value)
    );

    setResultData(brandFilteredData);
  };

  return (
    <S.BoxSection>
      <S.SelectboxSection onChange={handleSelectBox}>
        <option>브랜드 이름을 선택해주세요.</option>
        {data.map((el: string, idx: number) => {
          return (
            <option key={idx} value={el}>
              {el}
            </option>
          );
        })}
      </S.SelectboxSection>
    </S.BoxSection>
  );
}

export default Selectbox;
