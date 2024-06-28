import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  checkoutproducts:{id: string,name:string,price:string,color:string,description:string}[]=[];

  addnewproduct(checkoutproducts1: {id: string,name:string,price:string,color:string,description:string}){
      this.checkoutproducts.push(checkoutproducts1);
      
  }

  removenewproduct(checkoutproducts2: {id: string,name:string,price:string,color:string,description:string}){
    this.checkoutproducts=this.checkoutproducts.filter(item => item !== checkoutproducts2);
    console.log(this.addnewproduct);
  }
}
