import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../movies-api.service';
import { take } from 'rxjs/operators';





@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  movieId:any;
  movieDetails:any;
  movieGenres:any;
  movieOverview:any;
  movieCasts:any[] = [];
  movieCastsLength:any;
  movieCrews:any[] = [];
  movieCrewsLength:any;

  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  video:any;

  constructor(private activatedRoute:ActivatedRoute , private moviesApiService:MoviesApiService) { }


  ngOnInit(): void {
    this.getMovieDetail();
    this.getMovieVideo();
    this.getMovieCredit();
}

getMovieDetail() {
  this.movieId = this.activatedRoute.snapshot.params.id;
  this.moviesApiService.getMovieDetail(this.movieId).pipe(take(1)).subscribe((data)=> {
    this.movieDetails=data;
    this.movieGenres=data.genres;
    (this.movieOverview = data.overview) === "" ? this.movieOverview = `We don't have an overview translated in English. Help us expand our database by adding one.`: this.movieOverview;

  })

}

getMovieVideo() {
  this.moviesApiService.getMovieVideo(this.movieId).pipe(take(1)).subscribe((data)=> {
    for(let i=0; i<data.results.length;i++) {
      if(data.results[i].type === 'Trailer') {
        this.video=`https://www.youtube.com/watch?v=${data.results[i].key}`;
      }
    }
  })

}

getMovieCredit() {
  this.moviesApiService.getMovieCredit(this.movieId).pipe(take(1)).subscribe((data)=> {
    this.movieCastsLength = data.cast.length;
    for(let i=0; i<data.cast.length; i++) {
      this.movieCasts.push(data.cast[i]);
    }
    this.movieCrewsLength=data.crew.length;
    for(let i=0; i<data.crew.length; i++) {
      this.movieCrews.push(data.crew[i]);
    }
    
  })

}



  aroundRating(rating:any) {
    rating = Number(rating).toFixed(1);
    return rating;
  }
}
