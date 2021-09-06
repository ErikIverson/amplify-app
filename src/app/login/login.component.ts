import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Auth, { CognitoUser } from '@aws-amplify/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(username, password) {
    Auth.signIn(username, password).then((userInfo: CognitoUser) => {
      this.authService.currentUser = userInfo;
      this.router.navigate(['']);
    }).catch(e => console.error('Login Error: ', e))
  }

}
