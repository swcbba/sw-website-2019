import { Component } from '@angular/core';

import { Location } from '../../shared/constants/location.constant';

@Component({
  selector: 'sw-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  eventLocationInfo = Location;
  zoom = 18;
  mapUrl = `https://www.google.com/maps/search/?api=1&query=${
    this.eventLocationInfo.latitude
  },${this.eventLocationInfo.longitude}`;
}
