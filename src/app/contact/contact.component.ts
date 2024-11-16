import { Component, ElementRef, NgZone,ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import  emailjs  from '@emailjs/browser';
import { Test2Component } from '../test2/test2.component';
import { Test2 } from '../test2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  id:any;


  customername:string='';
  customeremail:string='';
  selectedchoice:string='';
  message:string='';
  showformstatus:boolean=false;

 // @ViewChild(Test2Component)  childComponentRef: Test2Component = new Test2Component;
//x:Test2=new Test2();
x:String='';
  ngOnInit(){  this.x=this.y.Checkingtest2 ; }
  constructor(private ngZone: NgZone,private y:Test2) {}



  //async onsubmit(formdata: NgForm){
       onsubmit(formdata: NgForm){
console.log(formdata);
this.ngZone.runOutsideAngular(()=>{
  this.id=setInterval(()=>{
    emailjs.init("NcBTBanQLGkdEeylO");
    emailjs.send("service_sf2b9sb","template_66rdnfk",{
      from_name: this.customername,
      from_email: this.customeremail,
      from_subject: this.selectedchoice,
      message: this.message,
      });
  },20000);
});

 this.showformstatus=true;
formdata.reset();
     }


//  emailjs.init("NcBTBanQLGkdEeylO");
//let respone =await  emailjs.send("service_sf2b9sb","template_66rdnfk",{
 // emailjs.send("service_sf2b9sb","template_66rdnfk",{
//  from_name: this.customername,
 // from_email: this.customeremail,
 // from_subject: this.selectedchoice,
 // message: this.message,
 // });

// this.showformstatus=true;
//formdata.reset();



stop()
  {
    clearInterval(this.id);
  }

}
