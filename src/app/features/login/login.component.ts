import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // private localStorage: Storage; 
  private returnUrl : string;
  loginForm: FormGroup;
  isCorrectCredential = true;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private route : ActivatedRoute,
              private toastr: ToastrService) { }

  
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    if(localStorage.getItem('isLoggedIn') === 'true')
    {
      this.router.navigate([this.returnUrl]);
      
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        // Validators.email
      ]],
      password: ['', [
        Validators.required,
        // Validators.minLength(6),
        // Validators.maxLength(20)
      ]]
    });
  }

  onLoginButtonClick() {
    if (this.loginForm.invalid) {
      return;
    }
    const formValues = this.loginForm.value;
    const email = formValues.email;
    const password = formValues.password;

    let isValidCredential = false;

    if (email === 'admin' && password === 'gadmin') {
      isValidCredential = true;
    }

    if (email === 'test@user' && password === 'Jan@2020') {
      isValidCredential = true;
    }

    if (isValidCredential) {
      this.isCorrectCredential = true;
      this.toastr.success("Login Successfully");
      localStorage.setItem('isLoggedIn','true');
      this.router.navigate([this.returnUrl]);
    } else {
      this.toastr.success("Check Username & password Or Contact Admin");
      this.isCorrectCredential = false;
    }



  }

  onForgotPasswordClick() {
    this.toastr.success("Contact System Admin");
  }

}
