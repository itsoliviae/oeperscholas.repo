import { Injectable } from '@angular/core';
import { Planet, PlanetResponse } from './Planet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlanetsServiceService {
  url = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PlanetResponse> {
   return this.http.get<PlanetResponse>(this.url + 'planets');
  }

}
