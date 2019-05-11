import { Directive, ElementRef, OnInit } from '@angular/core';

import { Sidenav } from 'materialize-css';

@Directive({
  selector: '[swSidenav]'
})
export class SidenavDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    Sidenav.init(this.elementRef.nativeElement);
  }
}
