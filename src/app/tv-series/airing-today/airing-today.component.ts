import { Component , OnInit , OnDestroy} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TvApiService } from '../tv-api.service';




@Component({
  selector: 'app-airing-today',
  templateUrl: './airing-today.component.html',
  styleUrls: ['./airing-today.component.scss']
})
export class AiringTodayComponent implements OnInit , OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  airingTodayTvShows:any[] = [];
  page:number;
  term:string='';


  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };

  constructor(private tvApiService:TvApiService) { }


  ngOnInit(): void {
    this.getAiringToday();
}


getAiringToday() {
  for(this.page=1; this.page<101; this.page++) {
    this.tvApiService.getAiringToday(this.page)
    .pipe(takeUntil(this.unsubscribe)).subscribe((data)=> {
      this.airingTodayTvShows = [...this.airingTodayTvShows , ...data.results];
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
