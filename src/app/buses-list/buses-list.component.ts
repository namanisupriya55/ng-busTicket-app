import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buses-list',
  templateUrl: './buses-list.component.html',
  styleUrls: ['./buses-list.component.css']
})
export class BusesListComponent implements OnInit {

  constructor() {
  }
  buses: [];

  ngOnInit() {
    this.buses = history.state.data;
  }
}
