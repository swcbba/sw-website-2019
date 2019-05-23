import { DataType } from './data-type.model';

export interface Metric extends DataType {
  id: string;
  icon: string;
  nameSp: string;
  nameEn: string;
  number: string;
}
