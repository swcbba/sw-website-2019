import { Directive, OnInit, ElementRef } from '@angular/core';

import { Parallax } from 'materialize-css';

@Directive({
  selector: '[swParallax]'
})
export class ParallaxDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    Parallax.init(this.element.nativeElement);
  }
}
