import { Component , OnInit} from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  checkoutlist:{id: string,name:string,price:string,color:string,description:string}[]=[];

constructor(private checkout:CheckoutService){}
ngOnInit(){
  this.checkoutlist = this.checkout.checkoutproducts;

}

remove(c1:number){
 
  //this.checkoutlist=this.checkoutlist.filter(item => item !== c1);
  this.checkoutlist.splice(c1, 1);
}

}
