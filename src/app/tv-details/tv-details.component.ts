import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedapiService } from '../sharedapi.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent {

  tvId:any;
  tvDetails:any;
  tvGenres:any;
  tvCasts:any[] = [];
  tvCrews:any[] = [];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  video:any;

  constructor(private _ActivatedRoute:ActivatedRoute , private _SharedapiService:SharedapiService) {
    this.tvId= _ActivatedRoute.snapshot.params.id;
    this._SharedapiService.getTvDetail(this.tvId).subscribe((data)=> {
      this.tvDetails=data;
      this.tvGenres=data.genres;

    })

    this._SharedapiService.getTvVideo(this.tvId).subscribe((data)=> {
      for(let i=0; i<data.results.length;i++) {
        if(data.results[i].type == 'Trailer' || data.results[i].type == 'Teaser') {
          this.video=`https://www.youtube.com/watch?v=${data.results[i].key}`
        }
      }
    })

    this._SharedapiService.getTvCredit(this.tvId).subscribe((data)=> {
      for(let i=0; i<data.cast.length; i++) {
        this.tvCasts.push(data.cast[i]);
      }
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
