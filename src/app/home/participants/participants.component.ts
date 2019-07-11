import { Component } from '@angular/core';

import { EventResources } from '../../shared/constants/event-resources.constant';

@Component({
  selector: 'sw-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent {
  registrationFormUrl = EventResources.registrationFormUrl;
}
