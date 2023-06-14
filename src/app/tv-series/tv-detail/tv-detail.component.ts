import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedapiService } from 'src/app/sharedapi.service';


@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent {

  tvId:any;
  tvDetails:any;
  tvGenres:any;
  tvOverview:any;
  tvCasts:any[] = [];
  tvCastsLength:any;
  tvCrews:any[] = [];
  tvCrewsLength:any;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  video:any;

  constructor(private _ActivatedRoute:ActivatedRoute , private _SharedapiService:SharedapiService) {
    this.tvId= _ActivatedRoute.snapshot.params.id;
    this._SharedapiService.getTvDetail(this.tvId).subscribe((data)=> {
      this.tvDetails=data;
      this.tvGenres=data.genres;
      (this.tvOverview = data.overview) === "" ? this.tvOverview = `We don't have an overview translated in English. Help us expand our database by adding one.`: this.tvOverview;
    
    })

    this._SharedapiService.getTvVideo(this.tvId).subscribe((data)=> {
      for(let i=0; i<data.results.length;i++) {
        if(data.results[i].type == 'Trailer' || data.results[i].type == 'Teaser') {
          this.video=`https://www.youtube.com/watch?v=${data.results[i].key}`
        }
      }
    })

    this._SharedapiService.getTvCredit(this.tvId).subscribe((data)=> {
      this.tvCastsLength=data.cast.length;
      for(let i=0; i<data.cast.length; i++) {
        this.tvCasts.push(data.cast[i]);
      }
      this.tvCrewsLength=data.crew.length;
      for(let i=0; i<data.crew.length; i++) {
        this.tvCrews.push(data.crew[i]);
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
