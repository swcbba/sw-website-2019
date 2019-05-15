import { DataType } from './data-type.model';

export interface Sponsor extends DataType {
  id: string;
  link: string;
  logoUrl: string;
  name: string;
}
