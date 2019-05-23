import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MetricsService } from './metrics.service';
import { Metric } from 'src/app/shared/models/metric';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'sw-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  metrics$: Observable<Metric[]>;

  constructor(
    private metricsService: MetricsService,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
    this.metrics$ = this.metricsService.getAll();
  }
}
