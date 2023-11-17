import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  apiKey: string;

  constructor(private httpClient:HttpClient) {

    this.apiKey = environment.theMovieDBApi;
   }


  getNowPlaying(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=${i}`)
  }


  getPopular(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${i}`)
  }

  getUpcoming(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=${i}`)
  }

  getTopRatingMovies(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=${i}`)
  }


  getMovieDetail(movie_id:any):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.apiKey}&language=en-US`)
  }

  getMovieVideo(movie_id:any):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${this.apiKey}&language=en-US`)
  }

  getMovieCredit(movie_id:any):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${this.apiKey}&language=en-US`)
  }
}
