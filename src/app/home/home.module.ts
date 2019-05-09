import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { EventsComponent } from './events/events.component';
import { EventsService } from './events/events.service';
import { SharedModule } from '../shared/shared.module';
import { PartnersComponent } from './partners/partners.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [HomeComponent, BannerComponent, EventsComponent, PartnersComponent],
  imports: [
    CommonModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [EventsService]
})
export class HomeModule { }
