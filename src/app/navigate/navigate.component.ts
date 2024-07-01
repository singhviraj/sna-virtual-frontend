import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {

  constructor(private _renderer: Renderer2)
  {}
  
  ngOnInit(){
    
    this._renderer.setStyle(document.body, 'margin', 0);
  }
}
