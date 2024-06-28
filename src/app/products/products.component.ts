import { Component ,OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor( private productslist: ProductsService , private checkoutlist :CheckoutService){}

products:{id: string,name:string,price:string,color:string,description:string}[]=[];

ngOnInit(){
this.products=this.productslist.products;
}
sendcheckout(p1 : {id: string,name:string,price:string,color:string,description:string}){
  this.checkoutlist.addnewproduct(p1);
}
}
