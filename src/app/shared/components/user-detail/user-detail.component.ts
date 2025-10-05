import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Idata, IlogRes } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userForm !: FormGroup;
  userInfo !: Idata | null;
  showHide : boolean = true;

  constructor(private authservice : AuthService,
          private snackbar : SnackbarService,
          private router : Router
  ) { }

  createUserForm(){
    this.userForm = new FormGroup({
      firstName : new FormControl(null, Validators.required),
      lastName : new FormControl(null, Validators.required),
      email : new FormControl(null, Validators.required),
      phone : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required),
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
      next : (res : Idata | null) => {
        console.log(res);
        this.userInfo = res;
        this.userForm.controls['firstName'].patchValue(this.userInfo?.firstName);
        this.userForm.controls['lastName'].patchValue(this.userInfo?.lastName);
        this.userForm.controls['email'].patchValue(this.userInfo?.email);
        this.userForm.controls['phone'].patchValue(this.userInfo?.phone);
    
        console.log(this.userInfo);
      },
      error : err => this.snackbar.openSnackbar(err)
    })
  }



  ngOnInit(): void {
    this.createUserForm();
    this.userDetail();
  }



}
