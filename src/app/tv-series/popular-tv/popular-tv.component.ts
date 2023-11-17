import { Component , OnInit , OnDestroy} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TvApiService } from '../tv-api.service';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.component.html',
  styleUrls: ['./popular-tv.component.scss']
})
export class PopularTvComponent implements OnInit , OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  PopularTvShows:any[] = [];
  page:number;
  term:string='';


  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };

  constructor(private tvApiService:TvApiService) { }

  ngOnInit(): void {
    this.getPopularTv();
}


getPopularTv() {
  for(this.page=1; this.page<101; this.page++) {
    this.tvApiService.getPopularTv(this.page)
    .pipe(takeUntil(this.unsubscribe)).subscribe((data)=> {
      this.PopularTvShows = [...this.PopularTvShows , ...data.results];
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
