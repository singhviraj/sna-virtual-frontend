import { Component } from '@angular/core';

@Component({
  selector: 'app-navigatephone',
  templateUrl: './navigatephone.component.html',
  styleUrl: './navigatephone.component.css'
})
export class NavigatephoneComponent {

  press:number=1;

  convert(){
    switch(this.press>0) { 
      case this.press==1: { 
         this.press=2;
         break; 
      } 
      case this.press==2: { 
         this.press=1; 
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 
}
}