import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxDirective } from './directives/parallax.directive';
import { TransparentNavbarDirective } from './directives/transparent-navbar.directive';

@NgModule({
  declarations: [ParallaxDirective, TransparentNavbarDirective],
  exports: [ParallaxDirective, TransparentNavbarDirective],
  imports: [CommonModule]
})
export class SharedModule {}
