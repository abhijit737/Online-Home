import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { User } from '../../model/user.interface';
import { UserService } from 'src/app/services/user-service.service';
import { SweetalertService } from 'src/app/services/sweetalert.service';
 //  import * as alertify from 'alertifyjs';
//  import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  user: any = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: ''
  };
  userSubmitted:boolean=false ;

  constructor(private fb: FormBuilder,private userService:UserService,private sweetalertSevice:SweetalertService) { }


  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),

    //   confirmPassword: new FormControl(null, [Validators.required, this.passwordMatchingValidator.bind(this)]),

    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // },this.passwordMatchingValidator); // Use bind to set the correct context

    this.createRegistrationForm();
    this.registerationForm.get('userName');
  }

  createRegistrationForm() {
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
    },
      { Validators: this.passwordMatchingValidator }
    );

  }


  passwordMatchingValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notmatched: true };
  }

  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }

  get password() {
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmpassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }





  // onSubmit() {
  //   console.log(this.registerationForm.value);
  
  //   this.userSubmitted=true;

  //   if(this.registerationForm.valid){


  //     this.user = Object.assign(this.user, this.registerationForm.value);
  //     this.userService.addUser(this.user);

  //     this.registerationForm.reset(); 
  //     this.userSubmitted=false;
  //  //   alertify.success("User Registred Successfully");  
               
  //   }
  //   else
  //   {
  //    // alertify.error("User Not Registred");  
      
  //   }
  // }



  

  // onSubmit() {
  //   console.log(this.registerationForm.value);
  //   this.userSubmitted = true;
  
  //   if (this.registerationForm.valid) {
  //     this.user = Object.assign(this.user, this.registerationForm.value);
  //     this.userService.addUser(this.user);
  
  //     this.registerationForm.reset();
  //     this.userSubmitted = false;
  
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Success', 
  //       text: 'User Registered Successfully!',
  //     });
  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'User Not Registered! Please check your inputs.',
  //     });
  //   }
  // }




  onSubmit() 
  {
    console.log(this.registerationForm.value);
    this.userSubmitted = true;
  
    if (this.registerationForm.valid) {
      this.user = Object.assign(this.user, this.registerationForm.value);


     localStorage.setItem('User', JSON.stringify(this.user));


     
      this.userService.addUser(this.user);
  

      this.registerationForm.reset();
      this.userSubmitted = false;
  
      this.sweetalertSevice.showSuccessMessage('User Registered Successfully!');
    } else {
      this.sweetalertSevice.showErrorMessage('User Not Registered! Please check your inputs');
    }



  }
  
   


} 
   