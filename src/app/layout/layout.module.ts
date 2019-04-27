import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavDirective } from './navbar/sidenav.directive';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidenavDirective],
  exports: [NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule]
})
export class LayoutModule {}
