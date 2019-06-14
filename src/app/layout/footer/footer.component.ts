import { Component, OnInit } from '@angular/core';

import { SocialLink } from '../../shared/models/social-link.model';

@Component({
  selector: 'sw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number;
  socialLinks = [
    new SocialLink(
      'Facebook',
      'https://www.facebook.com/StartupWeekendCochabamba/',
      'fa-facebook'
    ),
    new SocialLink('Twiter', 'https://twitter.com/swcbba/', 'fa-twitter'),
    new SocialLink('Instagram', 'https://instagram.com/swcbba/', 'fa-instagram')
  ];

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
