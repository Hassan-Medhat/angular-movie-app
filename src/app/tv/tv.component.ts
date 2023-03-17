import { Component } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { SharedapiService } from '../sharedapi.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {

  topRatingTvShows:any[] = [];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  page:number;
  term:string='';


  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };

  constructor(private _SharedapiService:SharedapiService) {

    for(this.page=1; this.page<101; this.page++) {
      this._SharedapiService.getTopRating('tv',this.page).subscribe((data)=> {
        this.topRatingTvShows = [...this.topRatingTvShows , ...data.results];
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
