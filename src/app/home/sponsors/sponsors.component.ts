import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SponsorsService} from './sponsors.service';
import {Sponsor} from '../../shared/models/sponsor.model';

@Component({
  selector: 'sw-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors$: Observable<Sponsor[]>;

  constructor(private sponsorService: SponsorsService) {}

  ngOnInit(): void {
    this.sponsors$ = this.sponsorService.getAll();
  }

}
