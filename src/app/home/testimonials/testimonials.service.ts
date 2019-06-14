import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../../shared/models/data-service.model';
import { Testimonial } from '../../shared/models/testimonial.model';
import { FirestoreCollection } from '../../shared/models/firestore-collection.enum';

@Injectable()
export class TestimonialsService extends DataService<Testimonial> {
  constructor(db: AngularFirestore) {
    super(db, FirestoreCollection.testimonials);
  }
}
