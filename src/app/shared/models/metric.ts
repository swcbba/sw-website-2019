import { DataType } from './data-type.model';

export interface Metric extends DataType {
  id: string;
  icon: string;
  name: string;
  number: string;
}
