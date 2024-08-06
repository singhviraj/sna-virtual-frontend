import { Component } from '@angular/core';
import { SendService } from '../send.service';
import { AmountService } from '../amount.service';
import { HttpClient } from '@angular/common/http';
import { OrderamountService } from '../orderamount.service';
import FileSaver from 'file-saver';

//import Razorpay from 'razorpay';

declare var Razorpay:any

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
//compare:String='';
compareemail:String='';
comparepassword:String='';
print:number=0;
  data:{id:number,card:number,fullname:String,email: String,password:String}[]=[];
  constructor(private add:SendService, private amountlist: AmountService,private httpclient :HttpClient
    ,private orderamount:OrderamountService){}

  ngOnInit() {
    this.add.getData().subscribe(response => {
      this.data = response;
    });
  }
  displayamount:number=0;
  
  checkdatabase(){
    //console.log(this.data);

    //below we will add the filename of the exel sheets , second parameter will be a string which takes 
    //tells the name of the document when its not given 
    

    for (const val of this.data) {
     // console.log(this.compare); 
      if(this.compareemail === val.email  && this.comparepassword === val.password){
        this.print= val.card;
       this.displayamount= this.amountlist.total;
        this.orderamount.createorder(this.displayamount).subscribe(data=>{this.setoption(data);});
      }
    }
    //console.log(this.print);
  }

  setoption(response :any){
    var options = {
      "key": "rzp_test_SGUIc5wNZ1VhzI", // Enter the Key ID generated from the Dashboard
      "amount": response.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": response.currency,
      "name": "Company Name",
      "description": "Test Transaction",
      "image": response.id,
      "order_id": response.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response:any){
          console.log(response);
          FileSaver.saveAs("\Alexa.jpg");          
         
      },
      "prefill": {
          "name": "Viraj",
          "email": "sviraj347@gmail.com",
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
   var rzp1 = new Razorpay(options);
  rzp1.open();
  
  
      
      
  
  }
  
    
    
  
}

