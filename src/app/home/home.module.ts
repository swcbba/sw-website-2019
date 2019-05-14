import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { EventsComponent } from './events/events.component';
import { EventsService } from './events/events.service';
import { SharedModule } from '../shared/shared.module';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TranslateModule } from '@ngx-translate/core';
import { LocationComponent } from './location/location.component';
import { environment } from 'src/environments/environment';
import { SponsorsService } from './sponsors/sponsors.service';

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
