import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-homesearch',
  templateUrl: './homesearch.component.html',
  styleUrl: './homesearch.component.css'
})
export class HomesearchComponent {
  products:{id: string,name:string,price:string,color:string,description:string,amount:number}[]=[];
 searchvalue:string='';
  constructor( private productslist: ProductsService){
   }
ngOnInit(){
  this.products = this.productslist.products;
}


}
