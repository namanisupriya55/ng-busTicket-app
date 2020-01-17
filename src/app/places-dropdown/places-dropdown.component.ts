import {Component, OnChanges, OnInit, SimpleChanges, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Router} from '@angular/router';
// import { data } from '../data';
import { BusesDataServiceService } from '../buses-data-service.service';


@Component({
  selector: 'app-places-dropdown',
  templateUrl: './places-dropdown.component.html',
  styleUrls: ['./places-dropdown.component.css']
})
export class PlacesDropdownComponent implements OnInit, OnChanges {
  sourceForm: FormGroup;
  minDate = new Date(2021, 0, 1);
  maxDate = new Date(2021, 11, 31);
  @Input() name: string;
  places: any = [ 'Banglore', 'Hyderabad', 'Delhi', 'Chennai', 'Mumbai', 'Kolkata'];
  events: string[] = [];
  data: any;

  constructor(private router: Router, private fb: FormBuilder, private service: BusesDataServiceService) {
  this.sourceForm = this.fb.group({
    source : ['', Validators.required],
    destination   : ['', Validators.required],
  });
  service.getData().subscribe(data => {
      this.data = data;
  });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
  onValueChanges() {
    this.sourceForm.valueChanges.subscribe(val => {
      console.log('val', val);
      if (val.source === val.destination) {
        this.sourceForm.reset({source: 'Select Source', destination: 'Select Destination'});
        this.sourceForm.setErrors({
          notUnique: true
        });
        return;
      } else {
        this.sourceForm.setErrors(null);
      }
    });
  }
  ngOnInit() {
    this.onValueChanges();
  }

  addEvent(type: string, event: MatDatepickerInputEvent<any>) {
    this.events.push(`${event.value}`);
  }

  submit() {
    const event = new Date(this.events[0]);
    const date =  event.getDate() + '-' + event.getMonth() + '-' + event.getFullYear();
    const filteredList = this.data.buses.filter((item) => {
      if ( item.date === date) {
        return item;
      }
    })
    this.router.navigate(['/buses'], {state: {data: filteredList}});
  }
}

