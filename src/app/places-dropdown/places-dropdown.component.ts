import {Component, OnChanges, OnInit, SimpleChanges, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Router} from '@angular/router';
import { data } from '../data';


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
  placesList = data.buses;
  places: any = [ 'Banglore', 'Hyderabad', 'Delhi', 'Chennai', 'Mumbai', 'Kolkata'];
  events: string[] = [];

  constructor(private router: Router, private fb: FormBuilder) {
  this.sourceForm = this.fb.group({
    source : ['', Validators.required],
    destination   : ['', Validators.required],
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
    const filteredList = this.placesList.filter((item) => {
      if ( item.date === date) {
        return item;
      }
    })
    this.router.navigate(['/buses'], {state: {data: filteredList}});
  }
}

