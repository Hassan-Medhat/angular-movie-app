import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { MoviesModule } from './movies/movies.module';
import { TvSeriesModule } from './tv-series/tv-series.module';
import { PipeModuleModule } from './pipe-module/pipe-module.module';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    PeopleDetailsComponent,
    NavbarComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    PipeModuleModule
    // MoviesModule,
    // TvSeriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
