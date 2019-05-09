import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  collectionName = 'sponsors';

  constructor(private dataBase: AngularFirestore) {
  }

  getSponsors(): any {
    return this.dataBase.collection(this.collectionName).valueChanges();
  }

}
