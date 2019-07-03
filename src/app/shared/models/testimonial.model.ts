import { DataType } from './data-type.model';

export interface Testimonial extends DataType {
  id: string;
  personName: string;
  profession: string;
  testimonialSp: string;
  testimonialEn: string;
  eventParticipation: string;
  picture: string;
}
