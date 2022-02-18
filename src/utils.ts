interface Idata {
  productName: string;
  brand?: string;
  id: number;
}

export const formattingString = (string: string) => {
  const newString = string.replaceAll(' ', '').toLowerCase();

  return newString;
};

export const orderingData = (data: Idata[], str: string) => {
  const dataWithStr = data.filter((el: any) => el.hasOwnProperty(str));
  const dataWithoutStr = data.filter((el: any) => !el.hasOwnProperty(str));

  return [...dataWithStr, ...dataWithoutStr];
};

// export const orderingData = (data, mark) => {
//   const dataCopied = [...data];
//   const result = dataCopied.sort(
//     (a, b) => b.mark.length - a.mark.length
//   );
//
//   return result;
// };
