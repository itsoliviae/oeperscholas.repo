import { Component, OnInit } from '@angular/core';
import Cake from '../cake';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cakes: Cake[] = [
    {
      cakeName: 'Red Velvet',
      mainIngredient: 'Main Ingredients: Cocoa powder, red food coloring',
      tagline: 'Secretly just a chocolate cake...'
    },
    {
      cakeName: 'Carrot Cake',
      mainIngredient: 'Main Ingredient: carrots',
      tagline: 'Rabbits love this!'
    },
    {
      cakeName: 'Lemon Cake',
      mainIngredient: 'Main Ingredients: lemon zest, lemon juice',
      tagline: 'Just the right amount of tang!'
    }
  ]
}
