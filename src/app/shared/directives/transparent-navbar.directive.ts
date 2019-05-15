import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[swTransparentNavbar]'
})
export class TransparentNavbarDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const range = 300;
    const banner = this.elementRef.nativeElement;
    const scrollTop = window.scrollY;
    const height = banner.offsetHeight;
    const offset = height / 1.1;
    const calc = 1 - (scrollTop - offset + range) / range;

    banner.style.opacity = calc.toString();

    if (calc > 1) {
      banner.style.opacity = '1';
    } else if (calc < 0) {
      banner.style.opacity = '0';
    }
  }
}
