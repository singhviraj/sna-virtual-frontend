import { Component, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchvalue:string = '' ;

  @Output() searchtextvalue: EventEmitter<string> = new EventEmitter<string>();
  
  onsearchtextchange(){
    
    this.searchtextvalue.emit(this.searchvalue);
  }
}
