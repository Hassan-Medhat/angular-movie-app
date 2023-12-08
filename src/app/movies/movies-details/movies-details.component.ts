import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../movies-api.service';
import { take } from 'rxjs/operators';
import { Moive } from 'src/app/shared/interfaces/moive';
import { Cast, Crew } from 'src/app/shared/interfaces/people';





@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  movieId: number;
  movieDetails: Partial<Moive>;
  movieGenres: any;
  movieOverview: string;
  movieCasts: Array<Cast> = [];
  movieCastsLength: number;
  movieCrews: Array<Crew> = [];
  movieCrewsLength: number;

  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  video: string;

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
    const result = data.results;
    for(let i=0; i<result.length;i++) {
      if(result[i].type === "Trailer" ||
      result[i].type === "Featurette" ||
      result[i].type === "Behind the Scenes" ||
      result[i].type === "Teaser" ||
      result[i].type === "Clip" ) {
        this.video=`https://www.youtube.com/watch?v=${result[i].key}`;
      }
    }
  })



}

getMovieCredit() {
  this.moviesApiService.getMovieCredit(this.movieId).pipe(take(1)).subscribe((data)=> {
    this.movieCastsLength = data.cast.length;
    const cast = data.cast;
    for(let i=0; i<this.movieCastsLength; i++) {
      this.movieCasts.push(cast[i]);
    }
    this.movieCrewsLength=data.crew.length;
    const crew = data.crew;
    for(let i=0; i<this.movieCrewsLength; i++) {
      this.movieCrews.push(crew[i]);
    }
    
  })

}



  aroundRating(rating:any) {
    rating = Number(rating).toFixed(1);
    return rating;
  }
}
