import { Component, OnInit } from '@angular/core';
import Bread from '.'

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
      mainIngredient: 'bananas',
      category: 'breakfast'
    },
    {
      breadName: 'Pumpernickel',
      mainIngredient: 'brown sugar',
      category: 'dinner'
    },
    {
      breadName: 'Honey Oat',
      mainIngredient: 'oats',
      category: 'dinner'
    }
  ]

}
