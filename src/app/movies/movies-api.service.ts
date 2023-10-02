import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(private httpClient:HttpClient) { }


  getNowPlaying(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US&page=${i}`)
  }


  getPopular(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US&page=${i}`)
  }

  getUpcoming(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US&page=${i}`)
  }

  getTopRatingMovies(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US&page=${i}`)
  }


  getMovieDetail(movie_id:any):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`)
  }

  getMovieVideo(movie_id:any):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`)
  }

  getMovieCredit(movie_id:any):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`)
  }
}
