import { Component,OnInit,DoCheck } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { AmountService } from '../amount.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {
  displayamount:number=0;
  size:number=0;

  constructor(private _renderer: Renderer2, private amount:AmountService)
  {}
    ngOnInit(){
    
    this._renderer.setStyle(document.body, 'margin', 0);
    this.displayamount = this.amount.total;
    
  }
 ngDoCheck(){
  this.displayamount = this.amount.total; 
  this.size= this.amount.count;
 }
}
