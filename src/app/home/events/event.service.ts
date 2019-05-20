import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../../shared/models/data-service.model';
import { Event } from '../../shared/models/event.model';
import { FirestoreCollection } from '../../shared/models/firestore-collection.enum';

@Injectable()
export class EventService extends DataService<Event> {
  constructor(db: AngularFirestore) {
    super(db, FirestoreCollection.events);
  }
}
