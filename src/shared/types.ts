export default interface Idata {
  productName: string;
  brand: string;
  both: string;
}

export interface ISelectProps {
  data: string[];
  resultData: Idata[];
  setResultData: (brandFilteredData: Idata[]) => void;
}
