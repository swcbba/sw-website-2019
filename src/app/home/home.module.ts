import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { EventsComponent } from './events/events.component';
import { EventsService } from './events/events.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, BannerComponent, EventsComponent],
  imports: [CommonModule, SharedModule],
  providers: [EventsService]
})
export class HomeModule {}
