import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-bus-info',
  templateUrl: './bus-info.component.html',
  styleUrls: ['./bus-info.component.css']
})
export class BusInfoComponent implements OnInit {
  @Input() busDetails;
  constructor() { }

  ngOnInit() {
  }

}
