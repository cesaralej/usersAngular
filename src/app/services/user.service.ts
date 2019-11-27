import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor() { 
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
    
  }
      getUsers(): Observable<User[]> {
        console.log('Fetching users...')
        return of(this.users)
      }

      addUser(user: User){
        this.users.unshift(user)
      }
}
 