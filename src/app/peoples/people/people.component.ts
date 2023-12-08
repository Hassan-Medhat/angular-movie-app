import { Component , OnInit , OnDestroy } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination/lib/ngx-pagination.module';
import { PeopleApiService } from '../people-api.service';
import { Subject} from 'rxjs';
import {takeUntil } from 'rxjs/operators';
import { People } from 'src/app/shared/interfaces/people';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent  implements OnInit , OnDestroy{

  private unsubscribe: Subject<void> = new Subject<void>();
  pouplarPeople: Array<People> = [];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  page:number;
  term:string='';

  public config: PaginationInstance = {
    itemsPerPage: 32,
    currentPage:1 
  };

  constructor(private peopleApiService:PeopleApiService) { }


  ngOnInit(): void {
      this.getPeople();
  }

  getPeople() {
    for(this.page=1; this.page<101; this.page++) {
        this.peopleApiService.getPeople(this.page)
        .pipe(takeUntil(this.unsubscribe)).subscribe((data)=> {
          this.pouplarPeople = [...this.pouplarPeople , ...data.results];
        })
      }
  }


  onPageChange(number: number) {
    this.config.currentPage = number;
}

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
