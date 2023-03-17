import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SharedapiService {

  constructor(private _HttpClient:HttpClient) { }

  getTranding(mediaType:string , time:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/${time}?api_key=b305e6995ba2734b75884e1d6acc9986`);
  }

  getTopRating(mediaType:string , i:number):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US&page=${i}`)
  }

  getMovieDetail(movie_id:any):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`)
  }

  getMovieVideo(movie_id:any):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`)
  }

  getMovieCredit(movie_id:any):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`)
  }

  getTvDetail(tv_id:any):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`)
  }

  getTvVideo(tv_id:any):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`)
  }

  getTvCredit(tv_id:any):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`)
  }

  getPeople(i:number):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US&page=${i}`)
  }

  getPeopleDetails(person_id:any):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`)
  }
  
}
