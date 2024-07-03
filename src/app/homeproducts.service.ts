import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeproductsService {

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
  
]
}
