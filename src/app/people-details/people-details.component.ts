import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedapiService } from '../sharedapi.service';


@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent {

  peopleId:any;
  peopleDetail:any;
  peopleGender:any;
  imdbUrl:any;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;

  constructor(private _ActivatedRoute:ActivatedRoute , private _SharedapiService:SharedapiService) {
    this.peopleId = _ActivatedRoute.snapshot.params.id; 
    this._SharedapiService.getPeopleDetails(this.peopleId).subscribe((data)=> {
      this.peopleDetail = data;
      this.imdbUrl=`https://www.imdb.com/name/${data.imdb_id}`;
      if((this.peopleGender = data.gender) == 1) {
        this.peopleGender = 'female';
      } else {
        this.peopleGender = 'male';
      }
    })
  }


  imageError(event:any) {
    event.target.src = 'assets/image/error-image.jpg';
  }

}
