import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { EventsComponent } from './events/events.component';
import { SharedModule } from '../shared/shared.module';
import {SponsorsComponent} from './sponsors/sponsors.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent, EventsComponent, SponsorsComponent],
  imports: [CommonModule, SharedModule]
})
export class HomeModule {}
