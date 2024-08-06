import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import  emailjs  from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 
  customername:string='';
  customeremail:string='';
  selectedchoice:string='';
  message:string='';

  showformstatus:boolean=false;
  async onsubmit(formdata: NgForm){

console.log(formdata);

   emailjs.init("NcBTBanQLGkdEeylO");
let respone =await  emailjs.send("service_sf2b9sb","template_66rdnfk",{
  from_name: this.customername,
  from_email: this.customeremail,
  from_subject: this.selectedchoice,
  message: this.message,
  });

 this.showformstatus=true;
formdata.reset();

}
}
