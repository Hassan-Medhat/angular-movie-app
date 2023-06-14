import { Component } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { SharedapiService } from 'src/app/sharedapi.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent {

  topRatingMovies:any[] = [];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  page:number;
  term:string='';


  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };

  constructor(private _SharedapiService:SharedapiService) {

    for(this.page=1; this.page<101; this.page++) {
      this._SharedapiService.getTopRatingMovies(this.page).subscribe((data)=> {
        this.topRatingMovies = [...this.topRatingMovies , ...data.results];
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
