import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MainApiService {
  apiKey: string;

  constructor(private httpClient:HttpClient) {
    this.apiKey = environment.theMovieDBApi;
   }


  getTrending(mediaType: string , time: string): Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/${time}?api_key=${this.apiKey}&language=en-US`);
  }
}
