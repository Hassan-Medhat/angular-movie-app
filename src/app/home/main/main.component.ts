import { Component , OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MainApiService } from '../main-api.service';
import { take } from 'rxjs/operators';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoWidth: true,
    navSpeed: 700,
    // autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    animateIn: true,
    animateOut: true,
    dotsSpeed: 700,
    slideBy: 'page',
    slideTransition: 'ease-out',
    // navText: ['&#8249', '&#8250;'],
    // responsive: {
    //   0: {
    //     items: 1 
    //   },
    //   400: {
    //     items: 2
    //   },
    //   760: {
    //     items: 3
    //   },
    //   1000: {
    //     items: 4
    //   }
    // },
    // nav: true
  }

  TabList = ['Today', 'This Week'];
  selectedMovieTab = 0;
  selectedTvTab = 0;
  selectedPersonTab = 0;

  trendingMovies:any[] =[];
  trendingTvShows:any[] =[];
  trendingPeople:any[] =[];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;

  

  constructor(private mainApiService:MainApiService) { }

  ngOnInit(): void {
      this.getMovies('day',0,10);
      this.getTVs('day',0,10);
      this.getPeoples('day',0,10);
  }


  tabMovieChange(event: any) {
    this.selectedMovieTab = event.index;
    if (event.index === 0) {
      this.getMovies('day',0,9);
    } else if (event.index === 1) {
      this.getMovies('week',10,20);
    }
  }


  tabTvChange(event: any) {
    this.selectedTvTab = event.index;
    if (event.index === 0) {
      this.getTVs('day',0,9);
    } else if (event.index === 1) {
      this.getTVs('week',10,20);
    }
  }


  tabPeopleChange(event: any) {
    this.selectedPersonTab = event.index;
    if (event.index === 0) {
      this.getPeoples('day',0,9);
    } else if (event.index === 1) {
      this.getPeoples('week',10,20);
    }
  }



  getMovies(time: string , num1: number , num2: number): void {
    this.mainApiService.getTrending('movie', time).pipe(take(1)).subscribe(data => {
      this.trendingMovies = data.results.slice(num1,num2);
    });
  }


  getTVs(time: string , num1: number , num2: number): void {
    this.mainApiService.getTrending('tv', time).pipe(take(1)).subscribe(data => {
      this.trendingTvShows = data.results.slice(num1,num2);
    });
  }


  getPeoples(time: string , num1: number , num2: number): void {
    this.mainApiService.getTrending('person', time).pipe(take(1)).subscribe(data => {
      this.trendingPeople = data.results.slice(num1,num2);
    });
  }


}
