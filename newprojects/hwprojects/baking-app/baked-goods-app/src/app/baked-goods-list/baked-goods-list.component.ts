import { Component, OnInit } from '@angular/core';
import Bread from 'src/Bread';

@Component({
  selector: 'app-baked-goods-list',
  templateUrl: './baked-goods-list.component.html',
  styleUrls: ['./baked-goods-list.component.css']
})
export class BakedGoodsListComponent implements OnInit {

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
