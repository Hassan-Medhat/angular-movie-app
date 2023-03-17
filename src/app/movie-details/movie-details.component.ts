import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedapiService } from '../sharedapi.service';




@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  movieId:any;
  movieDetails:any;
  movieGenres:any;
  movieCasts:any[] = [];
  movieCrews:any[] = [];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  video:any;

  constructor(private _ActivatedRoute:ActivatedRoute , private _SharedapiService:SharedapiService) {
    this.movieId= _ActivatedRoute.snapshot.params.id;
    this._SharedapiService.getMovieDetail(this.movieId).subscribe((data)=> {
      this.movieDetails=data;
      this.movieGenres=data.genres;

    })

    this._SharedapiService.getMovieVideo(this.movieId).subscribe((data)=> {
      for(let i=0; i<data.results.length;i++) {
        if(data.results[i].type == 'Trailer') {
          this.video=`https://www.youtube.com/watch?v=${data.results[i].key}`
        }
      }
    })

    this._SharedapiService.getMovieCredit(this.movieId).subscribe((data)=> {
      for(let i=0; i<data.cast.length; i++) {
        this.movieCasts.push(data.cast[i]);
      }
      for(let i=0; i<data.crew.length; i++) {
        this.movieCrews.push(data.crew[i]);
      }
    })

    
  }

  imageError(event:any) {
      event.target.src = 'assets/image/error-image.jpg';
  }


  aroundRating(rating:any) {
    rating = Number(rating).toFixed(1);
    return rating;
  }
}

