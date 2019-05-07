import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';
import { Languages } from '../../../shared/constants/languages.constant';

@Component({
  selector: 'sw-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss']
})
export class LanguageButtonComponent {
  constructor(public language: LanguageService) {}

  changeLanguage(): void {
    const newLanguage =
      this.language.currentLanguage === Languages.spanish
        ? Languages.english
        : Languages.spanish;
    this.language.switchLanguage(newLanguage);
  }
}
