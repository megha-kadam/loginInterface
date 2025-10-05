import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'loginInterface';

  constructor(private authservice : AuthService){}

  isLoggedIn : boolean = false;

  ngOnInit(): void {
    this.authservice.logInObs$
    .subscribe(res => {
      this.isLoggedIn = res;
    })
  }
}
