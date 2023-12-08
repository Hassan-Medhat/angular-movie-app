import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take} from 'rxjs/operators';
import { TvApiService } from '../tv-api.service';
import { Tv } from 'src/app/shared/interfaces/tv';
import { Cast, Crew } from 'src/app/shared/interfaces/people';



@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {

  tvId: number;
  tvDetails: Partial<Tv>;
  tvGenres:any;
  tvOverview: string;
  tvCasts: Array<Cast> = [];
  tvCastsLength: number;
  tvCrews: Array<Crew> = [];
  tvCrewsLength: number;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  video: string;

  constructor(private activatedRoute:ActivatedRoute , private tvApiService:TvApiService) { }

  ngOnInit(): void {
    this.getTvDetail();
    this.getTvVideo();
    this.getTvCredit();
}

getTvDetail() {
  this.tvId = this.activatedRoute.snapshot.params.id;
  this.tvApiService.getTvDetail(this.tvId).pipe(take(1)).subscribe((data)=> {
  this.tvDetails=data;
  this.tvGenres=data.genres;
  (this.tvOverview = data.overview) === "" ? this.tvOverview = `We don't have an overview translated in English. Help us expand our database by adding one.`: this.tvOverview;

})

}

getTvVideo() {
this.tvApiService.getTvVideo(this.tvId).pipe(take(1)).subscribe((data)=> {
    const result = data.results;
    for(let i=0; i<result.length;i++) {
      if(result[i].type === 'Trailer' ||
       data.results[i].type === 'Teaser' ||
       data.results[i].type === 'Opening Credits' ||
       data.results[i].type === 'Behind the Scenes' ) {
        this.video=`https://www.youtube.com/watch?v=${result[i].key}`
      }
    }
  })

}

getTvCredit() {
  this.tvApiService.getTvCredit(this.tvId).pipe(take(1)).subscribe((data)=> {
    this.tvCastsLength=data.cast.length;
    const cast = data.cast;
    for(let i=0; i<this.tvCastsLength; i++) {
      this.tvCasts.push(cast[i]);
    }
    this.tvCrewsLength=data.crew.length;
    const crew = data.crew;
    for(let i=0; i<this.tvCrewsLength; i++) {
      this.tvCrews.push(crew[i]);
    }
  })

}
  

  imageError(event:any) {
    event.target.src = 'assets/image/error-image.jpg';
  }


  aroundRating(rating:any) {
    rating = Number(rating).toFixed(1);
    return rating;
  }


}
