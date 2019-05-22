import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../../shared/models/data-service.model';
import { Partner } from '../../shared/models/partner.model';
import { FirestoreCollection } from '../../shared/models/firestore-collection.enum';

@Injectable()
export class PartnerService extends DataService<Partner> {
  constructor(db: AngularFirestore) {
    super(db, FirestoreCollection.partners);
  }
}
