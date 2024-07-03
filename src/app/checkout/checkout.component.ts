import { Component , OnInit} from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { AmountService } from '../amount.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  checkoutlist:{id: string,name:string,price:string,color:string,description:string,amount:number}[]=[];

constructor(private checkout:CheckoutService , private amountlist: AmountService){}
ngOnInit(){
  this.checkoutlist = this.checkout.checkoutproducts;

}
temp:number=0;
remove(c1:number){
 
  //this.checkoutlist=this.checkoutlist.filter(item => item !== c1);
  
  console.log(this.checkoutlist[c1].amount);
  if(this.checkoutlist.length ===0){
    
    this.amountlist.subtractamout(this.temp);
  }
  else{
    this.amountlist.subtractamout(this.checkoutlist[c1].amount);

  }
  this.checkoutlist.splice(c1, 1);
}

}
