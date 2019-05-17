import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import {LanguageService} from '../../core/services/language.service';
import { EventsService } from './events.service';
import { Event } from '../../shared/models/event.model';

@Component({
  selector: 'sw-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events$: Observable<Event[]>;

  constructor(private eventsService: EventsService, public languageService: LanguageService) {}

  ngOnInit(): void {
    this.events$ = this.eventsService.getAll();
  }
}
