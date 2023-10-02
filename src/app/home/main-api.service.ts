import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainApiService {

  constructor(private httpClient:HttpClient) { }


  getTrending(mediaType: string , time: string): Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/${time}?api_key=b305e6995ba2734b75884e1d6acc9986&language=en-US`);
  }
}
