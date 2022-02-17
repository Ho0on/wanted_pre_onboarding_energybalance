import React, { useEffect, useState } from 'react';
import * as S from './Main.style';

function Main() {
  const [data, setData] = useState();

  const getData = async () => {
    const json = await (await fetch('/data/mockData.json')).json();
    setData(json.result);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return <div>Main</div>;
}

export default Main;
