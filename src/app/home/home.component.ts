import { Component } from '@angular/core';
import { SharedapiService } from '../sharedapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trendingMovies:any[] =[];
  trendingTvShows:any[] =[];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;

  constructor(private _SharedapiService:SharedapiService) { 
    this._SharedapiService.getTranding('movie','day').subscribe((data)=> {
      this.trendingMovies = data.results
    })
    this._SharedapiService.getTranding('tv','day').subscribe((data)=> {
      this.trendingTvShows = data.results;
    })
  }

  aroundRating(rating:any) {
    rating = Number(rating).toFixed(1);
    return rating;
  }

}
