import { Component ,OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CheckoutService } from '../checkout.service';
import { AmountService } from '../amount.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor( private productslist: ProductsService , private checkoutlist :CheckoutService,private amoutlist:AmountService){}

products:{id: string,name:string,price:string,color:string,description:string,amount:number}[]=[];

ngOnInit(){
this.products=this.productslist.products;
}
sendcheckout(p1 : {id: string,name:string,price:string,color:string,description:string,amount:number}){
  this.checkoutlist.addnewproduct(p1);
  this.amoutlist.addamount(p1.amount);
  
}
searchtext:string ='';
aftersearchtext(data :string){
this.searchtext =data;
this.searchtext = this.searchtext.toLowerCase();
}



}
