import { Component, OnInit } from '@angular/core';
import { SearchEvent } from 'src/app/shared/Events/searchEvent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private searchEvent : SearchEvent) { }

  ngOnInit() {
  }


  onSearch(searchText){
    if (searchText && searchText.value) {
      this.searchEvent.publish(searchText.value);
    }
  }

}
