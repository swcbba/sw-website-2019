import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxDirective } from './directives/parallax.directive';
import { TransparentNavbarDirective } from './directives/transparent-navbar.directive';
import { TwoDigitsTransformPipe } from './pipes/two-digits-transform.pipe';

@NgModule({
  declarations: [ParallaxDirective, TransparentNavbarDirective, TwoDigitsTransformPipe],
  exports: [ParallaxDirective, TransparentNavbarDirective, TwoDigitsTransformPipe],
  imports: [CommonModule]
})
export class SharedModule {}
