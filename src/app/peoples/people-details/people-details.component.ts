import { Component , OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleApiService } from '../people-api.service';
import { Subject } from 'rxjs';
import {takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit , OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
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

  constructor(private activatedRoute:ActivatedRoute , private peopleApiService:PeopleApiService) { }

  ngOnInit(): void {
      this.getPeopleDetails();
  }

  getPeopleDetails() {
    
    this.peopleId = this.activatedRoute.snapshot.params.id; 
      this.peopleApiService.getPeopleDetails(this.peopleId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data)=> {
        this.peopleDetail = data;
        this.peopleName = data.name;
        this.imdbUrl=`https://www.imdb.com/name/${data.imdb_id}`;
        (this.peopleGender = data.gender) === 1 ? this.peopleGender = 'female' : this.peopleGender = 'male' ;
        (this.peopleBiography = data.biography) === "" ? this.peopleBiography = `We don't have a biography for ${this.peopleName}` : this.peopleBiography ;
        (this.peopleBirthday = data.birthday) === null ? this.peopleBirthday = '-' : this.peopleBirthday ;
        (this.peoplePlaceOfBirth = data.place_of_birth) === null ? this.peoplePlaceOfBirth = '-' : this.peoplePlaceOfBirth ;
      })

  }

  imageError(event:any) {
    event.target.src = 'assets/image/error.jpg';
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
