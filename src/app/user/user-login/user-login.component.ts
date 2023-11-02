import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SweetalertService } from 'src/app/services/sweetalert.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

// direct injection 

  constructor(private authService: AuthService, private sweetalert: SweetalertService,private router:Router) { }

  ngOnInit() {
  }

   
  onLogin(loginForm: NgForm) 
  {
    console.log(loginForm.value);

    // user authentication using DI in constructor
    const token = this.authService.authUser(loginForm.value);

    if (token) {
      localStorage.setItem('token', token.userName);
      this.sweetalert.showSuccessMessage("Successfully Logged in");
      
      // routering to home page
      this.router.navigate(['/']);
    } else {
      this.sweetalert.showErrorMessage("Login Unsuccessful");
    }
  }



  
}
