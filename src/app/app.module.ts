import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvComponent } from './tv/tv.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MovieDetailsComponent,
    TvComponent,
    TvDetailsComponent,
    PeopleComponent,
    PeopleDetailsComponent,
    NavbarComponent,
    PagenotfoundComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
