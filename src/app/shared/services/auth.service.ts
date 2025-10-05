import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Idata, IlogIn, IlogRes, Isignup } from '../models/auth';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogInStatus : boolean = false;
  baseURL : string = environment.url;

  logInSub : Subject<boolean> = new Subject<boolean>();
  logInObs$ : Observable<boolean> = this.logInSub.asObservable();
  logInEmitter(flag : boolean){
    this.logInSub.next(flag);
  }
    userSub : Subject<Idata | null> = new BehaviorSubject<Idata | null>(null);
  userObs$ : Observable<Idata | null> = this.userSub.asObservable();
  userEmitter(user : Idata){
    this.userSub.next(user);
  }

  constructor(private http : HttpClient) { }

  logIn(userDetail : IlogIn){
    let loginURL : string = `${this.baseURL}`;
    return this.http.post(loginURL, userDetail)
  }

  // signUp(userDetail : Isignup){
  //   let signupURL : string = `${this.baseURL}`;
  //   return this.http.post(signupURL, userDetail)
  // }

  
    saveToken(token : string){
        localStorage.setItem('token', token);
    }

    getToken() : boolean{
        return !!localStorage.getItem('token')
    }

}


 // saveUserrole(userRole : string){
    //     localStorage.setItem('userRole', userRole);
    // }

    // getUserRole(){
    //     return localStorage.getItem('userRole');
    // }