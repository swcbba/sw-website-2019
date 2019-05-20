import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { LanguageService } from '../../core/services/language.service';
import { EventService } from './event.service';
import { Event } from '../../shared/models/event.model';

@Component({
  selector: 'sw-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events$: Observable<Event[]>;

  constructor(
    private eventsService: EventService,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.events$ = this.eventsService.getAll();
  }
}
