import { Component } from '@angular/core';

@Component({
  selector: 'app-customerhelp',
  templateUrl: './customerhelp.component.html',
  styleUrl: './customerhelp.component.css'
})
export class CustomerhelpComponent {
 show:number=1;
 show1:number=1;
 show2:number=1;

 showparagraph(){
  if( this.show === 1){ this.show=0; }
  else{  this.show=1; }
 
 }
 showparagraph1(){
  if( this.show1=== 1){ this.show1=0; }
  else{  this.show1=1; }
 }
 showparagraph2(){
  if( this.show2=== 1){ this.show2=0; }
  else{  this.show2=1; }
 }
}
