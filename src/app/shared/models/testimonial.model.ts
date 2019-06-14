import {DataType} from './data-type.model';

export interface Testimonial extends DataType {
  id: string;
  namePerson: string;
  profession: string;
  testimonial: string;
  eventParticipation: string;
  urlPicture: string;
}
