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
  mapUrl = `https://maps.google.com/maps?ll=${this.eventLocationInfo.latitude},${
    this.eventLocationInfo.longitude
  }&z=${this.zoom}`;
}
