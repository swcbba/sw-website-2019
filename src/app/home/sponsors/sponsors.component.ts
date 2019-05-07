import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'sw-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {

  items: Observable<any>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('sponsors').valueChanges();
  }

}
