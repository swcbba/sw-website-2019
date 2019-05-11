import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {

  private metricsValue: {};

  constructor() {
    this.metricsValue = {
      versions: 7,
      participants: '+500',
      projects: '+120',
      ideas: '+200'
    };
  }

  ngOnInit() {
  }

}
