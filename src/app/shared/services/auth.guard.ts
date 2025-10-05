import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
      private authService : AuthService,
      private router : Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = this.authService.getToken();
      if(token){
         if (state.url === '/' || state.url === '') {
        return this.router.createUrlTree(['/userDetail']);
      }
        return true
      }else{
         if (state.url === '/' || state.url === '') {
        return true
      }
       return this.router.createUrlTree(['/'])
      }
  }
  
}
