import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CheckoutService } from '../checkout.service';
import { AmountService } from '../amount.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  productslist:{id: string,name:string,price:string,color:string,description:string,amount:number}[]=[];
  productlist:any;

  detail:any;
  detailid: any;
  money:any;
  constructor( private activatedRoute :ActivatedRoute ,private service :ProductsService, 
    private checkoutservice:CheckoutService ,private amountlist: AmountService){}
  ngOnInit(){


    //if we do not want to loose our data when we copy paste the url including the product name
    // on incognito then we have to send data using routing


   this.detailid = this.activatedRoute.snapshot.paramMap.get('id');
   
   
   this.detail= this.service.products.find(x => x.id == this.detailid);

   this.productlist = this.service.products.find(x => x.id == this.detailid);
  }
  sendcheckout(){
   this.checkoutservice.addnewproduct(this.productlist);
   for (const data of this.service.products) {
   if(data.id === this.detailid){
    this.amountlist.addamount(data.amount);
   }
}
}
}
