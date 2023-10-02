import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  socialData = [
    {url: 'https://www.linkedin.com/in/hassan-medhat-586889167/', name: 'Linkedin', img: './assets/svg/linkedin.svg'},
    {url: 'https://github.com/Hassan-Medhat', name: 'Github', img: './assets/svg/github.svg'}
  ];

}
