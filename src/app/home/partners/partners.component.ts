import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PartnerService } from './partner.service';
import { Partner } from '../../shared/models/partner';

@Component({
  selector: 'sw-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners$: Observable<Partner[]>;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partners$ = this.partnerService.getPartners()
  }

}
