import {DataType} from './data-type.model';

export interface Sponsor extends DataType {
  id: string;
  link: string;
  pictureURL: string;
  partner: string;
}
