import React, { useEffect, useState } from 'react';
import { formattingString } from '../../utils';
import * as S from './Test.style';

interface Idata {
  productName: string;
  brand?: string;
  id: number;
}

function Test() {
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
    const newInput = formattingString(searchInput);
    return newProductName.includes(newInput);
  });

  return (
    <div>
      <input type="text" onChange={handleInput} />
      {data &&
        filteredData.map((el: Idata) => {
          return (
            <>
              <div>{el.productName}</div>
              <div>{el.brand}</div>
            </>
          );
        })}
    </div>
  );
}

export default Test;
