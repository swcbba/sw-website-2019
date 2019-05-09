import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Sponsor} from '../../shared/models/sponsor.model';
import {SponsorsService} from '../../core/services/sponsors.service';

@Component({
  selector: 'sw-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors = new Observable<Sponsor[]>();

  constructor(private sponsorService: SponsorsService) {
  }

  loadSponsors(): void {
    this.sponsors = this.sponsorService.getSponsors();
  }

  ngOnInit(): void {
    this.loadSponsors();
  }

}
