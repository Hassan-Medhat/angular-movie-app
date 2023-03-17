import { Component } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { SharedapiService } from '../sharedapi.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  pouplarPeople:any[] = [];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  page:number;
  term:string='';

  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };


  constructor(private _SharedapiService:SharedapiService) {


    for(this.page=1; this.page <101; this.page++)
    { 
      this._SharedapiService.getPeople(this.page).subscribe((data)=> {
        this.pouplarPeople = [...this.pouplarPeople , ...data.results] ;
      })

    }

  }


  onPageChange(number: number) {
    this.config.currentPage = number;
}

imageError(event:any) {
  event.target.src = 'assets/image/error-image.jpg';
}

}
