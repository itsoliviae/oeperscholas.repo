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
      cookieName: 'Chocolate Chip',
      mainIngredient: 'Main Ingredient: chocolate chips',
      tagline: 'A classic!'
    },
    {
      cookieName: 'Snickerdoodle',
      mainIngredient: 'Main Ingredient: cinnamon',
      tagline: 'Perfect for fall!'
    },
    {
      cookieName: 'Oatmeal Raisin',
      mainIngredient: 'Main Ingreidents: oats, raisins',
      tagline: 'No one actually likes these, right?'
    }
  ]
}
