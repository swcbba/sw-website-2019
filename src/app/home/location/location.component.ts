import { Component, OnInit } from '@angular/core';

import { Location } from '../../shared/constants/location.constant';

@Component({
  selector: 'sw-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  eventLocationInfo = Location;
  zoom = 18;
  constructor() {}

  ngOnInit() {}
}
