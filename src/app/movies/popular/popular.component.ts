import { Component , OnInit , OnDestroy} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { MoviesApiService } from '../movies-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit , OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  popularMovies:any[] = [];
  page:number;
  term:string='';

  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };

  constructor(private moviesApiService:MoviesApiService) { }


  ngOnInit(): void {
    this.getPopular();
}


getPopular() {
  for(this.page=1; this.page<101; this.page++) {
    this.moviesApiService.getPopular(this.page)
    .pipe(takeUntil(this.unsubscribe)).subscribe((data)=> {
      this.popularMovies = [...this.popularMovies , ...data.results];
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
