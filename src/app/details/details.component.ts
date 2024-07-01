import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  productslist:{id: string,name:string,price:string,color:string,description:string}[]=[];
  productlist:any;

  detail:any;
  detailid: any;
  
  constructor( private activatedRoute :ActivatedRoute ,private service :ProductsService, private checkoutservice:CheckoutService){}
  ngOnInit(){
   this.detailid = this.activatedRoute.snapshot.paramMap.get('id');
   
   this.detail= this.service.products.find(x => x.id == this.detailid);

   this.productlist = this.service.products.find(x => x.id == this.detailid);
  }
  sendcheckout(){
   this.checkoutservice.addnewproduct(this.productlist);
}
}
