import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomRegex } from '../../const/validators';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Route, Router } from '@angular/router';
import { Idata, IlogRes } from '../../models/auth';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  allreadyHasAccount : boolean = true;
  userInfo !: Idata;
  showHide : boolean = true;

  logInForm !: FormGroup;
  signUpForm !: FormGroup;

  constructor(
        private authService : AuthService,
        private snackbar : SnackbarService,
        private router : Router
  ){}

  createLogInForm(){
    this.logInForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      password : new FormControl(null, [Validators.required])
    })
  }

  get l(){
    return this.logInForm.controls
  }

  get s(){
    return this.signUpForm.controls
  }

  createSignupForm(){
    this.signUpForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      password : new FormControl(null, [Validators.required])
    })
  }

  onLogIn(){
    if(this.logInForm.valid){
      let val = this.logInForm.value;
      console.log(val);
     this.authService.logIn(val)
   
     .subscribe({
      next : (res : IlogRes | any) => {
        this.userInfo = res.data;
       
        this.authService.userEmitter(this.userInfo);
        this.logInForm.reset();
        this.snackbar.openSnackbar(res.message);
        this.router.navigate([`${this.userInfo.id}`]);

      },
      error : err => {
        this.snackbar.openSnackbar(err.error.message)
      }
     })
    }
  }

  onSignUp(){
   if(this.signUpForm.valid){
     let val = this.signUpForm.value;
    console.log(val);
    this.signUpForm.reset();
    this.authService.logInEmitter(true);
   }
    
  }

 ngOnInit(): void {
   this.createLogInForm();
   this.createSignupForm();
 }
}



