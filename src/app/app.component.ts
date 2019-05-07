import { Component, OnInit } from '@angular/core';
import { LanguageButtonService } from './layout/navbar/language-button/language-button.service';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private languageService: LanguageButtonService) {}

  ngOnInit() {
    this.languageService.setDefaultLanguage();
  }
}
