import { Component  , OnInit , OnDestroy} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { MoviesApiService } from '../movies-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';





@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit , OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  nowPlayingMovies:any[] = [];
  page:number;
  term:string='';

  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };

  constructor(private moviesApiService:MoviesApiService) { }



  ngOnInit(): void {
      this.getNowPlaying();
  }


  getNowPlaying() {
    for(this.page=1; this.page<101; this.page++) {
      this.moviesApiService.getNowPlaying(this.page)
      .pipe(takeUntil(this.unsubscribe)).subscribe((data)=> {
        this.nowPlayingMovies = [...this.nowPlayingMovies , ...data.results];
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
