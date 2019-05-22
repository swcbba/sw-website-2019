import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Metric } from 'src/app/shared/models/metric';
import { DataService } from 'src/app/shared/models/data-service.model';
import { FirestoreCollection } from 'src/app/shared/models/firestore-collection.enum';

@Injectable()
export class MetricsService extends DataService<Metric> {

  constructor(db: AngularFirestore) {
    super(db, FirestoreCollection.metrics);
   }
}
