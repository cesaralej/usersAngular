import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // Properties
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  //Put brackets to make it an array
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm', {static: false}) form: any;

  // Methods
  constructor() { 
    
  }

  ngOnInit() {

    this.users= [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: "john@gmail.com",
        registered: new Date('03/11/2017 06:20:00'),
        isActive: true,
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Pearl',
        email: "kevin@gmail.com",
        registered: new Date('10/08/2016 06:20:00'),
        isActive: false,
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Smith',
        email: "karen@gmail.com",
        registered: new Date('01/03/2018 06:20:00'),
        isActive: false,
        hide: true
      }
    ]

    this.loaded = true
    
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   // Adds it to the begining instead of the end of the array
  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }

  // }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    }else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset()
    }
  }



}

