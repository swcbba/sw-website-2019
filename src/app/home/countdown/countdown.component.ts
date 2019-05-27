import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'sw-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountDownComponent implements OnInit {
  @Input()
  date: string;
  eventDate: any;
  daysRemaining: number;
  hoursRemaining: number;
  minutesRemaining: number;
  secondsRemaining: number;
  eventAlreadyStarted: boolean;

  constructor() {
    this.eventAlreadyStarted = false;
  }

  ngOnInit(): void {
    this.eventDate = moment(this.date, 'DD-MM-YYYY HH:mm');
    setInterval(() => {
      const today = moment();
      this.daysRemaining = this.eventDate.diff(today, 'days') % 365;
      this.hoursRemaining = this.eventDate.diff(today, 'hours') % 24;
      this.minutesRemaining = this.eventDate.diff(today, 'minutes') % 60;
      this.secondsRemaining = this.eventDate.diff(today, 'seconds') % 60;
      this.eventAlreadyStarted = this.eventDate.isSameOrBefore(today);
    }, 1000);
  }
}
