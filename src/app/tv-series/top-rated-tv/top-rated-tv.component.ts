import { Component , OnInit , OnDestroy} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TvApiService } from '../tv-api.service';
import { Tv } from 'src/app/shared/interfaces/tv';

@Component({
  selector: 'app-top-rated-tv',
  templateUrl: './top-rated-tv.component.html',
  styleUrls: ['./top-rated-tv.component.scss']
})
export class TopRatedTvComponent implements OnInit , OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  topRatedTvShows: Array<Tv> = [];
  page:number;
  term:string='';


  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };

  constructor(private tvApiService:TvApiService) { }


  ngOnInit(): void {
    this.getTopRatingTv();
}


getTopRatingTv() {
  for(this.page=1; this.page<101; this.page++) {
    this.tvApiService.getTopRatingTv(this.page)
    .pipe(takeUntil(this.unsubscribe)).subscribe((data)=> {
      this.topRatedTvShows = [...this.topRatedTvShows , ...data.results];
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
