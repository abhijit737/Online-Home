import { Injectable } from '@angular/core';
// import User from '../user/LoginUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }




authUser(user:any){
  let UserArray = [];

  // Retrieve user data from localStorage if available
  const localStorageData = localStorage.getItem('Users') ?? null;
  
  if (localStorageData) {
    UserArray = JSON.parse(localStorageData);
  }
  
  
  const authenticatedUser = UserArray.find((p: { userName: string; password: string; }) => 
  p.userName.toLowerCase() === user.userName.toLowerCase() && 
  p.password.toLowerCase() === user.password.toLowerCase()
);

return authenticatedUser; 
}

}
