import { Component ,OnInit} from '@angular/core';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
press:number=1; x:number=0;
  constructor(private _renderer: Renderer2){}
  ngOnInit(){
   // this._renderer.setStyle(document.body, 'overflow-x', 'hidden');
    this._renderer.setStyle(document.body, 'margin', 0);
     }
  
  leftarrow(){
    if(this.press == 1)
      {this.press=3; this.x =this.x +1;}
  if(this.press!=1){
    if(this.press!=3){this.press=1;}
     }
     if(this.press ==3){
      if(this.x == 0){this.press=2;}
      if(this.x != 0){this.x=0;}
     }
     console.log(this.press);
  }

  rightarrow(){
    if(this.press == 1)
      {this.press=2; this.x =this.x +1;}
  if(this.press!=1){
    if(this.press!=2){this.press=1;}
     }
     if(this.press ==2){
      if(this.x == 0){this.press=3;}
      if(this.x != 0){this.x=0;}
     }
  console.log(this.press);}
 
}
