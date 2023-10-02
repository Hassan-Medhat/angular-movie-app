import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {


  @Input() data:any = {} ;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;

  imageError(event:any) {
    event.target.src = 'assets/image/error-image.jpg';
  }

  aroundRating(rating: any) {
    rating = Number(rating).toFixed(1);
    return rating ;
  }

}
