import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = [
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c1k1N5rrA6NGhKUZ6hOYR0Am9Ss.jpg',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8Hi3GI4q1oR6EImrDWrAQFn8Ha.jpg',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vGIIl89vglo66yUfbuTxzNAs4y5.jpg',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Ar8jquseIADaFtMH6dQpskLwDYf.jpg',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n8eF3o2ldX4ifR5m4G51cjClBP5.jpg',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg'
  ];

  constructor() {}

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    nav: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      }
    },
  };

  ngOnInit() {
    for (let i = 0; i < this.images.length; i++) {
      let image = this.images[i];
    }
  }
}
