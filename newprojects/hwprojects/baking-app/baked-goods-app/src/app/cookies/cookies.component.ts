import { Component, OnInit } from '@angular/core';
import Cookie from 'src/Cookie';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cookies: Cookie[] = [
    {
      cookieName: 'Chocolate chip',
      mainIngredient: 'chocolate chips',
      category: 'dessert'
    }
  ]
}
