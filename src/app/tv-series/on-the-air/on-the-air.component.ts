import { Component , OnInit , OnDestroy} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TvApiService } from '../tv-api.service';
import { Tv } from 'src/app/shared/interfaces/tv';

@Component({
  selector: 'app-on-the-air',
  templateUrl: './on-the-air.component.html',
  styleUrls: ['./on-the-air.component.scss']
})
export class OnTheAirComponent implements OnInit , OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  onTheAirTvShows: Array<Tv> = [];
  page:number;
  term:string='';


  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };

  constructor(private tvApiService:TvApiService) { }


  ngOnInit(): void {
    this.getOnTheAir();
}


getOnTheAir() {
  for(this.page=1; this.page<101; this.page++) {
    this.tvApiService.getOnTheAir(this.page)
    .pipe(takeUntil(this.unsubscribe)).subscribe((data)=> {
      this.onTheAirTvShows = [...this.onTheAirTvShows , ...data.results];
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
