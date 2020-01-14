import { Component, OnInit } from '@angular/core';
// import { PlacesDropdownComponent } from '../places-dropdown/places-dropdown.component';
import { data } from '../data';

@Component({
  selector: 'app-buses-list',
  templateUrl: './buses-list.component.html',
  styleUrls: ['./buses-list.component.css']
})
export class BusesListComponent implements OnInit {

  constructor() {
  }
  data = data;
  buses: [];

  ngOnInit() {
    this.buses = history.state.data;
  }
}
