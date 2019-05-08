import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'sw-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {
  sponsors: Observable<any>;
  sponsorFormURL: string;

  constructor(db: AngularFirestore) {
    this.sponsors = db.collection('sponsors').valueChanges();
    this.sponsorFormURL = 'https://goo.gl/BA6fSS';
  }

}
