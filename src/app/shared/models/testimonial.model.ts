import {DataType} from './data-type.model';

export interface Testimonial extends DataType {
  id: string;
  namePerson: string;
  profession: string;
}
