import { NgModule } from '@angular/core';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailsComponent
  ],
  imports: [
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class PeoplesModule { }
