import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiringTodayComponent } from './airing-today/airing-today.component';
import { OnTheAirComponent } from './on-the-air/on-the-air.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TopRatedTvComponent } from './top-rated-tv/top-rated-tv.component';
import { PopularTvComponent } from './popular-tv/popular-tv.component';
import { SharedModule } from '../shared/shared.module';






@NgModule({
  declarations: [
    AiringTodayComponent,
    OnTheAirComponent,
    TvDetailComponent,
    TopRatedTvComponent,
    PopularTvComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule

  ]
})
export class TvSeriesModule { }
