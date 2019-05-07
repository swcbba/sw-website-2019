import { Component, OnInit } from '@angular/core';
import { LanguageButtonService } from './language-button.service';

import { Languages } from '../../../shared/constants/languages.constant';

@Component({
  selector: 'sw-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss']
})
export class LanguageButtonComponent {
  constructor(public language: LanguageButtonService) {}

  changeLanguage(): void {
    const newLanguage =
      this.language.currentLanguage === Languages.spanish
        ? Languages.english
        : Languages.spanish;
    this.language.switchLanguage(newLanguage);
  }
}
