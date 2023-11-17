import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';
import { PipeModuleModule } from './pipe-module/pipe-module.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { ImgMissingDirective } from './directives/img-missing.directive';







@NgModule({
  declarations: [
    HeaderComponent,
    MovieComponent,
    TvComponent,
    FooterComponent,
    ImgMissingDirective
  ],
  imports: [
    CommonModule,
    PipeModuleModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    TvComponent,
    ImgMissingDirective,
    PipeModuleModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
