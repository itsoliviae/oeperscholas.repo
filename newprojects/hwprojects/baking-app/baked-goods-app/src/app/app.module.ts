import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CakesComponent } from './cakes/cakes.component';
import { CookiesComponent } from './cookies/cookies.component';
import { BreadsComponent } from './breads/breads.component';

@NgModule({
  declarations: [
    AppComponent,
    CakesComponent,
    CookiesComponent,
    BreadsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
