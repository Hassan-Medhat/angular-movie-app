import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {

  apiKey: string;

  constructor(private httpClient:HttpClient) { 

    this.apiKey = environment.theMovieDBApi;
  }

  getPeople(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}&language=en-US&page=${i}`)
  }

  getPeopleDetails(person_id:any):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=${this.apiKey}&language=en-US`)
  }
}
