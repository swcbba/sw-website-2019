import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners = []
  constructor() { }

  ngOnInit() {
  }

}
