import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { EventsComponent } from './events/events.component';
import { EventsService } from './events/events.service';
import { SharedModule } from '../shared/shared.module';
import { LocationComponent } from './location/location.component';
import { environment } from 'src/environments/environment';
import { AboutComponent } from './about/about.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    EventsComponent,
    LocationComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot(environment.googleMaps),
    TranslateModule
  ],
  providers: [EventsService]
})
export class HomeModule {}
