import { Component, OnInit } from '@angular/core';
import { SocialLink  } from '../../shared/models/social-link.component';

@Component({
  selector: 'sw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number;
  socialLinks = [
    new SocialLink('Facebook', 'https://es-la.facebook.com/'),
    new SocialLink('Twiter', 'https://twitter.com/'),
    new SocialLink('Instagram', 'https://www.instagram.com/')
  ];

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
