import { Directive , Renderer2 , ElementRef  , HostListener} from '@angular/core';

@Directive({
  selector: '[appImgMissing]'
})
export class ImgMissingDirective {

  constructor(private renderer:Renderer2 , private elementRef:ElementRef) { }
  
  @HostListener('error')
  
  onError() {
    this.renderer.setAttribute(this.elementRef.nativeElement,'src' , './assets/image/error-image.jpg');
  }

}
