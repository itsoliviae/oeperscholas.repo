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
      cakeName: 'Chocolate cake',
      mainIngredient: 'Cocoa powder',
      category: 'dessert'
    }
  ]
}
