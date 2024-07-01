import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ProductsService } from '../products.service';
import { CheckoutService } from '../checkout.service';
import { HomeproductsService } from '../homeproducts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private _renderer: Renderer2,private productslist: HomeproductsService , private checkoutlist :CheckoutService)
  {}
  products:{id: string,name:string,price:string,color:string,description:string}[]=[];

  ngOnInit(){
    this.products=this.productslist.products;
    this._renderer.setStyle(document.body, 'overflow-x', 'hidden');
    this._renderer.setStyle(document.body, 'margin', 0);
    
  }

  sendcheckout(p1 : {id: string,name:string,price:string,color:string,description:string}){
    this.checkoutlist.addnewproduct(p1);
  }
}
