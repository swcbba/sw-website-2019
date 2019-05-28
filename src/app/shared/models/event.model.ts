import { firestore } from 'firebase';

import { DataType } from './data-type.model';

export interface Event extends DataType {
  id: string;
  name: string;
  link: string;
  place: string;
  logoUrl: string;
  descriptionEn: string;
  descriptionSp: string;
  date: firestore.Timestamp;
}
