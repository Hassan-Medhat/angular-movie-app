import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularComponent } from './popular/popular.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { SharedModule } from '../shared/shared.module';











@NgModule({
  declarations: [
    NowPlayingComponent,
    PopularComponent,
    UpcomingComponent,
    MoviesDetailsComponent,
    TopRatedComponent,

  ],
  imports: [
    AppRoutingModule,
    NgxPaginationModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ]
})
export class MoviesModule { }
