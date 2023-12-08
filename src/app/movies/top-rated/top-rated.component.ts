import { Component , OnInit , OnDestroy} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { MoviesApiService } from '../movies-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Moive } from 'src/app/shared/interfaces/moive';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit , OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  topRatingMovies: Array<Moive> = [];
  page:number;
  term:string='';


  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };

  constructor(private moviesApiService:MoviesApiService) { }


  ngOnInit(): void {
    this.getTopRatingMovies();
}


getTopRatingMovies() {
  for(this.page=1; this.page<101; this.page++) {
    this.moviesApiService.getTopRatingMovies(this.page)
    .pipe(takeUntil(this.unsubscribe)).subscribe((data)=> {
      this.topRatingMovies = [...this.topRatingMovies , ...data.results];
    })
  }
  
}


onPageChange(number: number) {
  this.config.currentPage = number;
}


ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
}
}
