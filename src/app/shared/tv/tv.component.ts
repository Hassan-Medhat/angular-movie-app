import { Component  , Input} from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {

  @Input() data:any = {} ;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;

  aroundRating(rating: any) {
    rating = Number(rating).toFixed(1);
    return rating ;
  }

}
