import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private dataBase: AngularFirestore) { }

  getPartners(): any {
    return this.dataBase.collection('partners').valueChanges();
  }
}
