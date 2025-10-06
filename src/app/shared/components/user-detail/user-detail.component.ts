import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Idata, IlogRes, Iphonecode } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Route, Router } from '@angular/router';
import { CustomRegex } from '../../const/validators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userForm !: FormGroup;
  userInfo !: Idata | null;
  showOldPassword : boolean = true;
  showNewPassword : boolean = false;
  showConfirmPassword : boolean = false;
  countryData !: Iphonecode[];
  

  constructor(private authservice : AuthService,
          private snackbar : SnackbarService,
          private router : Router
  ) { }

  createUserForm(){
    this.userForm = new FormGroup({
      firstName : new FormControl(null, Validators.required),
      lastName : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      phone : new FormControl(null, Validators.required),
      phoneCode : new FormControl(null, Validators.required),
      oldpassword : new FormControl(null, Validators.required),
      newPassword : new FormControl(null, Validators.required),
      confirmPassword : new FormControl(null, Validators.required),
    })
  }

  onLogOut(){
    localStorage.clear();
    this.router.navigate([''])
  }

  get f(){
    return this.userForm.controls;
  }

  userDetail(){
    this.authservice.userObs$
    .subscribe({
      next : (res : Idata| null) => {
        this.userInfo = res;
        this.userForm.patchValue(this.userInfo!)
      },
      error : err => this.snackbar.openSnackbar(err)
    })
  }



  ngOnInit(): void {
    this.createUserForm();
    this.userDetail();
    this.getPhoneCode();
  }

  getPhoneCode(){
    this.authservice.phoneCode()
    .subscribe({
      next : (data : Iphonecode | any) => {
        this.countryData = data;
      },
      error : err => {
        this.snackbar.openSnackbar(err.message);
      }
    })
  }

}
