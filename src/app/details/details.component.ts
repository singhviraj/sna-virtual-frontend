import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  detail:any;
  detailid: any;
  
  constructor( private activatedRoute :ActivatedRoute ,private service :ProductsService){}
  ngOnInit(){
   this.detailid = this.activatedRoute.snapshot.paramMap.get('id');
   
   this.detail= this.service.products.find(x => x.id == this.detailid);
  }
}
