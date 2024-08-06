import { Component } from '@angular/core';
import { SendService } from '../send.service';
import { Use } from '../use';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
 data:{e:number,f:number,g:String,h:String,i:String}[]=[];
 use:Use= new Use();
  constructor(private add:SendService){}

  //ngOnInit() {
   // this.add.getData().subscribe(response => {
   //   this.data = response;
   //   console.log(this.data);
   // });
 // }

  connectdatabase(){
    //console.log(this.use.fullname);
    this.add.createuser(this.use).subscribe(data=>{console.log(data);});
    
  }
}
