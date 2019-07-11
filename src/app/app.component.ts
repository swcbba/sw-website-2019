import { Component, OnInit } from '@angular/core';

import * as Aos from 'aos';

import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    Aos.init();
    this.languageService.setDefaultLanguage();
  }
}
