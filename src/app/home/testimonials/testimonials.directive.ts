import { Directive, ElementRef, AfterViewInit } from '@angular/core';

import { Carousel } from 'materialize-css';

@Directive({
  selector: '[swCarousel]'
})
export class TestimonialsDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    Carousel.init(this.elementRef.nativeElement, {
      fullWidth: true,
      indicators: true
    });
  }
}
