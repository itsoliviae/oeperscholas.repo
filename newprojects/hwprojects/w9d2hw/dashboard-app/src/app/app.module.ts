import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AverageRatingComponent } from './average-rating/average-rating.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { VisitorsComponent } from './visitors/visitors.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    ReviewsComponent,
    AverageRatingComponent,
    SentimentAnalysisComponent,
    VisitorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
