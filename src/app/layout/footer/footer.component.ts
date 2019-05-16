import { Component, OnInit } from '@angular/core';
import { NetworkLink  } from './network-link.component';

@Component({
  selector: 'sw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number;
  nameLinks = [
    new NetworkLink("Facebook", "https://es-la.facebook.com/"),
    new NetworkLink("Twiter", "https://twitter.com/"),
    new NetworkLink("Instagram", "https://www.instagram.com/")
  ];

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
