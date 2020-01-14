import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from '../data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  invalid = false;
  users = data.users;
  constructor( private router: Router, private fb: FormBuilder ) { }

  ngOnInit() {
    this.loginForm  =  this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }

  login() {
    console.log(this.loginForm.value);
    const user = this.users.findIndex(item => item.username === this.loginForm.value.email && item.password === this.loginForm.value.password);
    if (user < 0 ) {
      this.invalid = true;
      return;
    }
    this.isSubmitted  =  true;
    this.router.navigateByUrl('/searchBuses');
  }
 }
