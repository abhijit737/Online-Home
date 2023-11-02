import { Component, OnInit } from '@angular/core';
import { SweetalertService } from '../services/sweetalert.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit
 {

  constructor(private sweetalertify:SweetalertService) { }

  ngOnInit() 
  {
  }


// method to login



loggedin() {
  const token = localStorage.getItem('token');
  console.log('User Token is:', token);
  return token ; // Adjust the condition based on your authentication logic
}



// loggedin()
// {
//   return localStorage.getItem('token');

// }

// remove token when logout





isDropdownOpen: boolean = false;

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}

viewDashboard() {
  // Implement logic for viewing dashboard
  console.log('View Dashboard clicked');
}

viewProfile() {
  // Implement logic for viewing profile
  console.log('View Profile clicked');
}

changePassword() {
  // Implement logic for changing password
  console.log('Change Password clicked');
}

onLogout()
{
localStorage.removeItem('token');  
this.sweetalertify.showSuccessMessage(" Successfully Logged Out");
}


}





