interface Idata {
  productName: string;
  brand: string;
}

export const formattingString = (string: string) => {
  const newString = string.replaceAll(' ', '').toLowerCase();

  return newString;
};

// export const orderingData = (data: Idata[], str: string) => {
//   const dataWithStr = data.filter((el: Idata) => el.hasOwnProperty(str));
//   const dataWithoutStr = data.filter((el: Idata) => !el.hasOwnProperty(str));

//   return [...dataWithStr, ...dataWithoutStr];
// };

export const orderingData = (data: Idata[]) => {
  const dataCopied = [...data];
  const result = dataCopied.sort((a, b) => b.brand.length - a.brand.length);

  return result;
};
