import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables
  loginForm: FormGroup;
  isSubmitted = false;
  errors: string;
  
  constructor(private formBuilder: FormBuilder, private loginservice: LoginService, private router: Router) { }

  ngOnInit(): void {
    //create a reactive form module
    this.loginForm = this.formBuilder.group({
      //formControlName
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      
    })
  }

  //get all controls for validation
  get formControls() {
    return this.loginForm.controls;
  }
  //check login credential to verify and let the user to login
  loginCredentials() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    console.log('submitted form for credentials');

    //form is invalid
    if (this.loginForm.invalid) {
      this.errors = "Sorry invalid entry";
    }

    //form is valid
    if (this.loginForm.valid) {
      console.log("Valid credentials");

      //calling mmethod from  --authentication and authorize
      this.loginservice.loginVerify(this.loginForm.value).subscribe(
        response => {
          this.errors = '';
          console.log(response);

          //set session storage and local storage
          sessionStorage.setItem('username', response.UserName);
          sessionStorage.setItem('RoleId', response.RoleId.toString());
          sessionStorage.setItem('StaffId', response.StaffId.toString());

          //local storage
          localStorage.setItem('username', response.UserName);
          localStorage.setItem('RoleId', response.RoleId.toString());
          //sessionStorage.setItem('StaffId', response.StaffId.toString());


          if (response == null) {
            this.errors = "Invalid username and password"
          }
          else if (response.RoleId == 1) {
            this.router.navigateByUrl('emp-list');
            console.log('Admin');
          }
          else if (response.RoleId == 3) {
            this.router.navigateByUrl('doctordash');
            console.log('doctordash');
          } else {
            this.errors = "Invalid credentials"
          }
        }
      )
    }
  }

}
