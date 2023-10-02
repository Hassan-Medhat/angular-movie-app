import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {

  constructor(private httpClient:HttpClient) { }

  getPeople(i:number):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US&page=${i}`)
  }

  getPeopleDetails(person_id:any):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`)
  }
}
