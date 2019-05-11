import { Component, OnInit } from '@angular/core';

import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.setDefaultLanguage();
  }
}
