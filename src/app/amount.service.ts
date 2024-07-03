import { Injectable ,OnInit} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AmountService {
  //productsamount:{id: string,name:string,price:string,color:string,description:string,amount:number}[]=[];
  count:number=0;
   total:number=0;
  temp:number=0;
  constructor() { }

  addamount( a : number){
          this.total= a+this.total;
          console.log(this.total);
          this.count=this.count+1;
  }

  subtractamout(b : number){
    this.total= this.total-b;
    this.count=this.count-1;
  }


}
