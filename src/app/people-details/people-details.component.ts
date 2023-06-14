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
  peopleBiography:any;
  peopleBirthday:any;
  peoplePlaceOfBirth:any;
  peopleName:any;
  isValid:boolean = true;
  peopleDetail:any;
  peopleGender:any;
  imdbUrl:any;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;

  constructor(private _ActivatedRoute:ActivatedRoute , private _SharedapiService:SharedapiService) {
    this.peopleId = _ActivatedRoute.snapshot.params.id; 
    this._SharedapiService.getPeopleDetails(this.peopleId).subscribe((data)=> {
      this.peopleDetail = data;
      this.peopleName = data.name;
      this.imdbUrl=`https://www.imdb.com/name/${data.imdb_id}`;
      (this.peopleGender = data.gender) === 1 ? this.peopleGender = 'female' : this.peopleGender = 'male' ;
      (this.peopleBiography = data.biography) === "" ? this.peopleBiography = `We don't have a biography ${this.peopleName}` : this.peopleBiography ;
      (this.peopleBirthday = data.birthday) === null ? this.peopleBirthday = '-' : this.peopleBirthday ;
      (this.peoplePlaceOfBirth = data.place_of_birth) === null ? this.peoplePlaceOfBirth = '-' : this.peoplePlaceOfBirth ;
    })
  }


  imageError(event:any) {
    event.target.src = 'assets/image/error.jpg';
  }

}
