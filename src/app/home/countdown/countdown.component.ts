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
  finishDate: any;
  daysRemaining: number;
  hoursRemaining: number;
  minutesRemaining: number;
  secondsRemaining: number;
  isFinishDate: boolean;

  constructor() {
    this.isFinishDate = false;
  }

  ngOnInit(): void {
    this.finishDate = moment(this.date, 'DD-MM-YYYY HH:mm');
    setInterval(() => {
      const today = moment();
      this.daysRemaining = this.finishDate.diff(today, 'days') % 365;
      this.hoursRemaining = this.finishDate.diff(today, 'hours') % 24;
      this.minutesRemaining = this.finishDate.diff(today, 'minutes') % 60;
      this.secondsRemaining = this.finishDate.diff(today, 'seconds') % 60;
      this.isFinishDate = this.finishDate.isSameOrBefore(today);
    }, 1000);
  }
}
