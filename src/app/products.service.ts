import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products=[
    {
    id: "1",name:'Alexa',price:'$200',color:'black',description:'d1',amount:100
  },
  {
    id: "2",name:'Magenta',price:'$200',color:'black',description:'d1',amount:100
  },
  {
    id: "3",name:'Tiger',price:'$200',color:'black',description:'d1',amount:100
  },
  {
    id: "4",name:'Menon',price:'$200',color:'black',description:'d1',amount:100
  },
]
}
