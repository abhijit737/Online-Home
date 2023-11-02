import { Injectable } from '@angular/core';
import { User } from '../model/user.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

// adding user service 

addUser(user: User) {

  
  let users: User[] = JSON.parse(localStorage.getItem('Users') ?? '[]');

  users.push(user);

  localStorage.setItem('Users', JSON.stringify(users));
}
 


}
