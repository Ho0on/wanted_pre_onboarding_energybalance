import React from 'react';
import * as S from './Selectbox.style';

function Selectbox({ data }: { data: string[] }) {
  return (
    <S.BoxSection>
      <S.SelectboxSection>
        {data.map((el: string, idx: number) => {
          return <option key={idx}>{el}</option>;
        })}
      </S.SelectboxSection>
    </S.BoxSection>
  );
}

export default Selectbox;
