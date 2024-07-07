import { Directive, ElementRef, Renderer2 ,OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appBackgroundimage]'
})
export class BackgroundimageDirective {

  @Input() imageUrl:string='';
    constructor(private elementRef:ElementRef, private renderer: Renderer2) {}
    ngOnInit() {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'backgroundImage',
            `url(${this.imageUrl})`
        );
    }

}
