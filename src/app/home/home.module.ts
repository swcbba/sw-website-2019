import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { EventsComponent } from './events/events.component';
import { EventsService } from './events/events.service';
import { SharedModule } from '../shared/shared.module';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent, BannerComponent, EventsComponent, SponsorsComponent],
  imports: [CommonModule, SharedModule, TranslateModule],
  providers: [EventsService]
})
export class HomeModule {}
