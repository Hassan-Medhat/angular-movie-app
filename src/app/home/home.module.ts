import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatTabsModule
  ]
})
export class HomeModule { }
