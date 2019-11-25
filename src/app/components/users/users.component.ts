import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // Properties
  //Put brackets to make it an array
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

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
        isActive: true
      },
      {
        firstName: 'John',
        lastName: 'Doe'
      },
      {
        firstName: 'John',
        lastName: 'Doe'
      }
    ]

    this.loaded = true
    
  }

  addUser(user: User) {
    this.users.push(user)
  }

}

