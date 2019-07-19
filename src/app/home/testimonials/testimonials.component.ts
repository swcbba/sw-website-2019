import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { TestimonialsService } from './testimonials.service';
import { Testimonial } from '../../shared/models/testimonial.model';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'sw-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonialsSub: Subscription;
  testimonials: Testimonial[];

  constructor(
    private testimonialService: TestimonialsService,
    public languageService: LanguageService) {}

  ngOnInit(): void {
    this.testimonialsSub = this.testimonialService
      .getAll()
      .subscribe((testimonials) => {
        this.testimonials = testimonials;
    });
  }

  ngOnDestroy(): void {
    this.testimonialsSub.unsubscribe();
  }
}
