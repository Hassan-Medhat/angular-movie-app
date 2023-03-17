import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleComponent } from './people/people.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvComponent } from './tv/tv.component';









const routes: Routes = [
{path:'home' , component:HomeComponent},
{path:'' , redirectTo:'/home' , pathMatch:'full'},
{path:'movie' , component:MovieComponent},
{path:'movie/:id' , component:MovieDetailsComponent},
{path:'tv' , component:TvComponent},
{path:'tv/:id' , component:TvDetailsComponent},
{path:'people' , component:PeopleComponent},
{path:'people/:id' , component:PeopleDetailsComponent},
{path:'**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
