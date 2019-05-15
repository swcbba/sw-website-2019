import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';

import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { EventsComponent } from './events/events.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { LocationComponent } from './location/location.component';
import { SponsorsService } from './sponsors/sponsors.service';
import { EventsService } from './events/events.service';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    EventsComponent,
    SponsorsComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    AgmCoreModule.forRoot(environment.googleMaps)
  ],
  providers: [EventsService, SponsorsService]
})
export class HomeModule {}
