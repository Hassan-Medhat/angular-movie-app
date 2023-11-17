import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TvApiService {

  apiKey: string;

  constructor(private httpClient:HttpClient) { 

    this.apiKey = environment.theMovieDBApi;
  }

  getAiringToday(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${this.apiKey}&language=en-US&page=${i}`)
  } 

  getOnTheAir(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${this.apiKey}&language=en-US&page=${i}`)
  }

  getPopularTv(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=${i}`)
  }

  getTopRatingTv(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=${i}`)
  }

  getTvDetail(tv_id:any):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=${this.apiKey}&language=en-US`)
  }

  getTvVideo(tv_id:any):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=${this.apiKey}&language=en-US`)
  }

  getTvCredit(tv_id:any):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=${this.apiKey}&language=en-US`)
  }
}
