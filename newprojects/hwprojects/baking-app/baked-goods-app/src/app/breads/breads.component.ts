import { Component, OnInit } from '@angular/core';
import Bread from 'src/Bread';


@Component({
  selector: 'app-breads',
  templateUrl: './breads.component.html',
  styleUrls: ['./breads.component.css']
})
export class BreadsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  breads: Bread[] = [
    {
      breadName: 'Banana Bread',
      mainIngredient: 'Main Ingredient: bananas',
      tagline: 'Breakfast (or dessert) in a loaf!'
    },
    {
      breadName: 'Zucchini',
      mainIngredient: 'Main Ingredient: zucchini',
      tagline: 'A great way to get your veggies in!'
    },
    {
      breadName: 'Monkey Bread',
      mainIngredient: 'Main Ingredients: brown sugar, cinnamon',
      tagline: 'No monkies are harmed in the making of this bread'
    }
  ]

 
}
