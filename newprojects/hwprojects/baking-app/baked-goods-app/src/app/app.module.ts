import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakesComponent } from './cakes/cakes.component';
import { CookiesComponent } from './cookies/cookies.component';
import { BreadsComponent } from './breads/breads.component';
import { BakedGoodsListComponent } from './baked-goods-list/baked-goods-list.component';
import { RecipesComponent } from './recipes/recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    CakesComponent,
    CookiesComponent,
    BreadsComponent,
    BakedGoodsListComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
