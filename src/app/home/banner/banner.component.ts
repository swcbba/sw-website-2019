import { Component } from '@angular/core';

import { EventResources } from '../../shared/constants/event-resources.constant';

@Component({
  selector: 'sw-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  registrationFormUrl = EventResources.registrationFormUrl;
}
