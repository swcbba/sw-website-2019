import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { DataType, DataOrder } from './data-type.model';
import { FirestoreCollection } from './firestore-collection.enum';

export abstract class DataService<T extends DataType> {
  dataCollection: AngularFirestoreCollection<T>;

  constructor(
    protected db: AngularFirestore,
    protected collectionName: FirestoreCollection
  ) {
    this.dataCollection = db.collection<T>(collectionName);
  }

  getAll(): Observable<T[]> {
    return this.dataCollection.valueChanges();
  }

  getAllSorted(
    field: string,
    order: DataOrder,
    maxLimit?: number
  ): Observable<T[]> {
    return this.db
      .collection<T>(this.collectionName, ref => {
        let query = ref.orderBy(field, order);
        if (maxLimit) {
          query = query.limit(maxLimit);
        }
        return query;
      })
      .valueChanges();
  }
}
