import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SponsorService } from './sponsor.service';
import { Sponsor } from '../../shared/models/sponsor.model';
import { EventResources } from '../../shared/constants/event-resources.constant';

@Component({
  selector: 'sw-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors$: Observable<Sponsor[]>;
  briefUrl = EventResources.briefUrl;

  constructor(private sponsorService: SponsorService) {}

  ngOnInit(): void {
    this.sponsors$ = this.sponsorService.getAll();
  }
}
