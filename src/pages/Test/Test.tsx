import React, { useEffect, useState } from 'react';
import * as S from './Test.style';

export interface Idata {
  id: number;
  key: string;
  productName: string;
  brand: string;
  both: object;
  name: string;
}

function Test() {
  const [data, setData] = useState([]);

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
  return (
    <div>
      <input type="text" />
      {data &&
        data.map((el: any) => {
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
