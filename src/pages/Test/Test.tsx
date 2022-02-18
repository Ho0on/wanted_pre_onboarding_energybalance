import React, { useEffect, useState } from 'react';
import * as S from './Test.style';

interface Idata {
  productName: string;
  brand?: string;
  id: number;
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

  console.log(data);

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
