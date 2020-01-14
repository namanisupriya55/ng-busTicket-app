import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../data';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit {
  name: any;
  constructor(private activatedRoute: ActivatedRoute) {
     this.name = this.activatedRoute.snapshot.params.name;
   }
   data = data;

  ngOnInit() {
  }

}
