import { Component } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { SharedapiService } from 'src/app/sharedapi.service';

@Component({
  selector: 'app-on-the-air',
  templateUrl: './on-the-air.component.html',
  styleUrls: ['./on-the-air.component.scss']
})
export class OnTheAirComponent {

  onTheAirTvShows:any[] = [];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  page:number;
  term:string='';


  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };

  constructor(private _SharedapiService:SharedapiService) {

    for(this.page=1; this.page<101; this.page++) {
      this._SharedapiService.getOnTheAir(this.page).subscribe((data)=> {
        this.onTheAirTvShows = [...this.onTheAirTvShows , ...data.results];
      })
    }

    

  }

  onPageChange(number: number) {
    this.config.currentPage = number;
}

imageError(event:any) {
  event.target.src = 'assets/image/error-image.jpg';
}

  aroundRating(rating:any) {
    rating = Number(rating).toFixed(1);
    return rating;
  }

}
