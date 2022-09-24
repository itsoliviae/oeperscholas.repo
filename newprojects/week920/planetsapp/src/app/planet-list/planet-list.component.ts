import { Component, OnInit } from '@angular/core';
import { Planet } from '../Planet';
import { PlanetsServiceService } from '../planets-service.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];
  constructor(private planetsService: PlanetsServiceService) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(): void {
    this.planetsService.getPlanets()
    .subscribe(data => this.planets = data.results);

  }

}
