interface Idata {
  productName: string;
  brand: string;
  both: string;
}

export const formattingString = (string: string) => {
  const newString = string.replaceAll(' ', '').toLowerCase();

  return newString;
};

export const orderingData = (data: Idata[]) => {
  const dataCopied = [...data];
  const result = dataCopied.sort((a, b) => b.brand.length - a.brand.length);

  return result;
};

export const filteringBrandList = (data: Idata[]) => {
  const result: string[] = [];

  const brandList = data.reduce((acc: any, current: any) => {
    acc.findIndex(({ brand }: { brand: any }) => brand === current.brand) ===
      -1 && acc.push(current);

    return acc;
  }, []);

  brandList.map((el: any) => {
    return result.push(el.brand);
  });

  const newResult = result.filter(Boolean);

  return newResult;
};
