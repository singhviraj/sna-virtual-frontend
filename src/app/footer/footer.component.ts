import { Component, NgZone,DoCheck } from '@angular/core';
import { Test } from '../test';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  num: number[] = [4,6,2,7];
  id:any;
  add(){
    let k = 1;
    const num2 = Object.assign([], this.num);
    num2.push(k);
    this.num=num2;
    console.log(this.num);
    Test();
     this.id=setInterval(this.add,2000);
    
  }
 
  stop()
  {
    clearInterval(this.id);
  }
  constructor(private ngZone: NgZone) {}
  ngOnInit() {
   // this.ngZone.runOutsideAngular(() => setInterval(this.add,2000));
    }


 

}












