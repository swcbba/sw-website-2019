import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../../shared/models/data-service.model';
import { Sponsor } from '../../shared/models/sponsor.model';
import { FirestoreCollection } from '../../shared/models/firestore-collection.enum';

@Injectable()
export class SponsorService extends DataService<Sponsor> {
  constructor(db: AngularFirestore) {
    super(db, FirestoreCollection.sponsors);
  }
}
