import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxDirective } from './directives/parallax.directive';
import { TransparentNavbarDirective } from './directives/transparent-navbar.directive';
import { NumberTransformPipe } from './pipes/number-transform/number-transform.pipe';

@NgModule({
  declarations: [ParallaxDirective, TransparentNavbarDirective, NumberTransformPipe],
  exports: [ParallaxDirective, TransparentNavbarDirective, NumberTransformPipe],
  imports: [CommonModule]
})
export class SharedModule {}
