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
import { SponsorService } from './sponsors/sponsor.service';
import { ParticipantsComponent } from './participants/participants.component';
import { EventService } from './events/event.service';
import { PartnersComponent } from './partners/partners.component';
import { PartnerService } from './partners/partner.service';
import { AboutComponent } from './about/about.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialsDirective } from './testimonials/testimonials.directive';
import { TestimonialsService } from './testimonials/testimonials.service';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    EventsComponent,
    SponsorsComponent,
    LocationComponent,
    ParticipantsComponent,
    PartnersComponent,
    AboutComponent,
    ScrollSpyDirective,
    TestimonialsComponent,
    TestimonialsDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    AgmCoreModule.forRoot(environment.googleMaps)
  ],
  providers: [EventService, SponsorService, PartnerService, TestimonialsService]
})
export class HomeModule {}
