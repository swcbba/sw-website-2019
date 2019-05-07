import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { EventsService } from './events.service';
import { Event } from '../../shared/models/event.model';

@Component({
  selector: 'sw-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events$: Observable<Event[]>;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.events$ = this.eventsService.getAll();
  }
}
