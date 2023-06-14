import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleComponent } from './people/people.component';
import { NowPlayingComponent } from './movies/now-playing/now-playing.component';
import { PopularComponent } from './movies/popular/popular.component';
import { UpcomingComponent } from './movies/upcoming/upcoming.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { TopRatedComponent } from './movies/top-rated/top-rated.component';
import { AiringTodayComponent } from './tv-series/airing-today/airing-today.component';
import { OnTheAirComponent } from './tv-series/on-the-air/on-the-air.component';
import { TvDetailComponent } from './tv-series/tv-detail/tv-detail.component';
import { TopRatedTvComponent } from './tv-series/top-rated-tv/top-rated-tv.component';
import { PopularTvComponent } from './tv-series/popular-tv/popular-tv.component';


















const routes: Routes = [
{path:'home' , component:HomeComponent},
{path:'' , redirectTo:'/home' , pathMatch:'full'},
{path:'nowplaying' , component:NowPlayingComponent},
{path:'popular' , component:PopularComponent},
{path:'upcoming' , component:UpcomingComponent},
{path:'toprated' , component:TopRatedComponent},
{path:'moviedetail/:id' , component:MoviesDetailsComponent},
{path:'onair' , component:OnTheAirComponent},
{path:'airingtoday' , component:AiringTodayComponent},
{path:'populartv' , component:PopularTvComponent},
{path:'topratedtv' , component:TopRatedTvComponent},
{path:'tvdetail/:id' , component:TvDetailComponent},
{path:'people' , component:PeopleComponent},
{path:'people/:id' , component:PeopleDetailsComponent},
{path:'**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
