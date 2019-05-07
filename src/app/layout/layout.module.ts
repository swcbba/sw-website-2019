import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavDirective } from './navbar/sidenav.directive';
import { LanguageButtonComponent } from './navbar/language-button/language-button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LanguageButtonComponent,
    SidenavDirective
  ],
  exports: [NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule, TranslateModule]
})
export class LayoutModule {}
