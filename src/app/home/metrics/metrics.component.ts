import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MetricsService } from './metrics.service';
import { Metric } from 'src/app/shared/models/metric';

@Component({
  selector: 'sw-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  metrics$: Observable<Metric[]>;

  constructor(private metricsService: MetricsService) { }

  ngOnInit() {
    this.metrics$ = this.metricsService.getAll();
  }

}
