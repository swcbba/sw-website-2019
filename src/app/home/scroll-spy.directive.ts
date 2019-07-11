import { Directive, ElementRef, OnInit } from '@angular/core';

import { ScrollSpy } from 'materialize-css';

@Directive({
  selector: '[swScrollSpy]'
})
export class ScrollSpyDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    ScrollSpy.init(this.elementRef.nativeElement);
  }
}
