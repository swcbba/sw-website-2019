import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  collectionName = 'partners';

  constructor(private database: AngularFirestore) { }

  getPartners(): any {
    return this.database.collection(this.collectionName).valueChanges();
  }
}
